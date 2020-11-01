const bcrypt = require("bcryptjs");
const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    const { username, password, passwordCheck } = request.body;
    const regexpUsername = /^[A-Za-z0-9 ]+$/i;

    if (!username || !password || !passwordCheck) return response.status(400).json({ message: "Please fill out all fields!" });

    if (!username.match(regexpUsername)) return response.status(400).json({ message: "Use only letters and numbers." });
    if (username.length < 5 || username.length > 12) return response.status(400).json({ message: "USERNAME is required - use only letters and numbers; minimum 5, maximum 12 characters long." });

    if (password.length < 6|| username.length > 15) return response.status(400).json({ message: "PASSWORD is required; minimum 6, maximum 15 characters long." });
    if (password !== passwordCheck) return response.status(400).json({ message: "Please enter the same password twice for verification!" }); 

    const existingUser = await userSchema.findOne({ username: username });
    if (existingUser) return response.status(400).json({ message: "An entry with such name already exists in our Archives." });

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new userSchema({
      username: username,
      password: passwordHash,
      createdAt: Date.now(),
      numberOfGameStarts: 0,
      numberOfGameFinishes: 0,
      numberOfDeaths: 0,
      colorTheme: "darkYellow",
      savedGames: {
        tutorial: { savedId: "ID0001" },
        A1S1: { savedId: "ID0001" }
      },
      achievementsTutorial: {
        firstAchievement: { id: 1, state: false, name: "There's a first for everything!", description: "Your first tutorial achievement.", date: Date.now() },
      },
      achievementsA1S1: {
        followToRoom: { id: 1, state: false, name: "placeholder_name", description: "add descr", date: Date.now() },
        keepPunching: { id: 2, state: false, name: "Keep 'em Punching!", description: "You kept the bastards punching until the soldiers have shown up.", date: Date.now() },
        hideSafely: { id: 3, state: false, name: "Hide in Safety.", description: "add descr", date: Date.now() },
        refuseMeal: { id: 4, state: false, name: "placeholder_name", description: "add descr", date: Date.now() },
        acceptMeal: { id: 5, state: false, name: "placeholder_name", description: "add descr", date: Date.now() },
        refusePampflet: { id: 6, state: false, name: "placeholder_name", description: "add descr", date: Date.now() },
        acceptPampflet: { id: 7, state: false, name: "placeholder_name", description: "add descr", date: Date.now() },
        listenToSoldiers: { id: 8, state: false, name: "placeholder_name", description: "add descr", date: Date.now() }
      }
    });

    const savedUser = await newUser.save();
    return response.json(savedUser);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};