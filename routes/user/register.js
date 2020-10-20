const bcrypt = require("bcryptjs");
const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    const { username, password, passwordCheck } = request.body;

    if (!username || !password || !passwordCheck) return response.status(400).json({ message: "Please fill out all fields!" });
    if (password.length < 6) return response.status(400).json({ message: "Your password needs to be at least 6 characters long!" });
    if (password !== passwordCheck) return response.status(400).json({ message: "Please enter the same password twice for verification!" }); 

    const existingUser = await userSchema.findOne({ username: username });
    if (existingUser) return response.status(400).json({ message: "An entry with such name already exists in our archives." });

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new userSchema({
      username: username,
      password: passwordHash,
      createdAt: Date.now(),
      numberOfGameStarts: 0,
      numberOfGameFinishes: 0,
      numberOfDeaths: 0,
      achievementsA1S1: {
        followToRoom: { 
          id: 1, 
          state: false, 
          name: "placeholder_name", 
          description: "add descr", 
          date: Date.now() 
        },
        keepPunching: { 
          id: 2, 
          state: false, 
          name: "Keep 'em Punching!", 
          description: "You kept the bastards punching until the soldiers have shown up.", date: Date.now() 
        },
        hideSafely: { 
          id: 3, 
          state: false, 
          name: "Hide in Safety.", 
          description: "add descr", 
          date: Date.now() 
        },
        refuseMeal: { 
          id: 4, 
          state: false, 
          name: "placeholder_name", 
          description: "add descr", 
          date: Date.now() 
        },
        acceptMeal: { 
          id: 5, 
          state: false, 
          name: "placeholder_name", 
          description: "add descr", 
          date: Date.now() 
        },
        refusePampflet: { 
          id: 6, 
          state: false, 
          name: "placeholder_name", 
          description: "add descr", 
          date: Date.now() 
        },
        acceptPampflet: { 
          id: 7, 
          state: false, 
          name: "placeholder_name", 
          description: "add descr", 
          date: Date.now() 
        },
        listenToSoldiers: { 
          id: 8, 
          state: false, 
          name: "placeholder_name", 
          description: "add descr", 
          date: Date.now() 
        }
      }
    });

    const savedUser = await newUser.save();
    return response.json(savedUser);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};