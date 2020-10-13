const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const userSchema = require("../models/userModel");

// add error message if no server is reached ie no internet
router.post("/register", async (request, response) => {
  try {
    const { loginName, password, passwordCheck } = request.body;
    
    if (!loginName || !password || !passwordCheck) return response.status(400).json({ message: "Not all fields have been entered!" });
    
    if (password.length < 2) return response.status(400).json({ message: "Password needs to be at least 6 characters!" });
    
    if (password !== passwordCheck) return response.status(400).json({ message: "Enter the same password twice for verification" }); 

    const existingUser = await userSchema.findOne({ loginName: loginName });

    if (existingUser) return response.status(400).json({ message: "Account with this name already exists" });

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new userSchema({
      loginName: loginName,
      password: passwordHash,
      createdAt: Date.now(),
      numberOfGameStarts: 0,
      numberOfGameFinishes: 0,
      numberOfDeaths: 0,
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
    response.json(savedUser);

  } catch (error) {
    response.status(500).json({ error: error.message });
    console.log(error.message);
  }
});

router.post("/login", async (request, response) => {
  try {
    const { loginName, password } = request.body;

    if (!loginName || !password) return response.status(400).json({ message: "Not all fields have been entered!" });

    const user = await userSchema.findOne({ loginName: loginName });

    if (!user) return response.status(400).json({ message: "No account with this name!" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return response.status(400).json({ message: "Invalid credentials!" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    response.json({ token, user: { id: user._id, loginName: user.loginName } });

  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

router.delete("/delete", auth, async (request, response) => {
  try {
    const deletedUser = await userSchema.findByIdAndDelete(request.user);
    response.json(deletedUser);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

router.post("/tokenIsValid", async (request, response) => {
  try {
    const token = request.header("x-auth-token");
    if (!token) return response.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return response.json(false);

    const user = await userSchema.findById(verified.id);
    if (!user) return response.json(false);

    return response.json(true);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

router.put("/achievement", async (request, response) => {
  const receivedData = request.body;
  if (!receivedData) return response.status(400).json({ message: "Didn't receive any data." });

  if (receivedData.storyCode === "a1s1") {
    const achievementClientCode = [undefined, "AOSO8G", "AOSO5N_2"];
    const achievementStates = [undefined, "achievementsA1S1.keepPunching.state", "achievementsA1S1.hideSafely.state"];
    const achievementTimestamps = [undefined, "achievementsA1S1.keepPunching.date", "achievementsA1S1.hideSafely.date"];
    
    const getUser = await userSchema.findById(receivedData.id);
    const achievementValues = Object.entries(getUser.achievementsA1S1).splice(1);
    for (let i = 0; i < achievementClientCode.length; i++) {
      if (receivedData.code === achievementClientCode[i]) {
        if (achievementValues[i][1].state) return response.status(200).json({ message: true });
  
        try {
          await getUser.updateOne({ "$set": { [achievementStates[i]]: true, [achievementTimestamps[i]]: Date.now() }});
          return response.json("update received");
        } catch (error) {
          response.status(500).json({ error: error.message });
        }
      }
    }
  }

  if (receivedData.storyCode === "a1s2") {
    console.log("story not yet ready, don't do anything -- need to copy over the code above");
  }
});

router.get("/achievements/global", async (request, response) => {
  const receivedData = request.query;
  const getUser = await userSchema.findById(receivedData);
  response.json({gameStart: getUser.numberOfGameStarts, gameFinish: getUser.numberOfGameFinishes, gameDeath: getUser.numberOfDeaths});
});

router.put("/achievements/gamestart", async (request, response) => {
  const receivedData = request.body;
  const getUser = await userSchema.findById(receivedData.id);
  await getUser.updateOne({ "$inc": { numberOfGameStarts: +1 }});
  response.json("Data has been updated!");
});

router.put("/achievements/death", async (request, response) => {
  const receivedData = request.body;
  const getUser = await userSchema.findById(receivedData.id);
  await getUser.updateOne({ "$inc": { numberOfDeaths: +1 }});
  response.json("Data has been updated!");
});

router.get("/achievements/:storycode", async (request, response) => {
  const receivedData = request.query;
  const getUser = await userSchema.findById(receivedData);
  const storyCodes = ["a1s1", "a1s2", "a2s1", "a3s1", "a4s1"];

  if (request.url.includes(storyCodes[0])) {
    response.json(getUser.achievementsA1S1);
  } else if (request.url.includes(storyCodes[1])) {
    response.json(getUser.achievementsA1S2);
  } else if (request.url.includes(storyCodes[2])) {
    response.json(getUser.achievementsA2S1);
  } else if (request.url.includes(storyCodes[3])) {
    response.json(getUser.achievementsA3S1);
  } else if (request.url.includes(storyCodes[4])) {
    response.json(getUser.achievementsA4S1);
  } else return null;
});

router.put("/changename", async (request, response) => {
  const { id, formData } = request.body;

  if (!formData.changedName) return response.status(400).json({ message: "Not all fields have been entered!" });

  const user = await userSchema.findOne({ loginName: formData.changedName });
  if (user) return response.status(400).json({ message: "There's already an account with this name!" });

  const getUser = await userSchema.findById(id);
  await getUser.updateOne({ "$set": { loginName: formData.changedName }});
  response.json("Data has been updated!");
});

router.put("/changepassword", async (request, response) => {
  const { id, formData } = request.body;

  if (!formData.password || !formData.passwordCheck) return response.status(400).json({ message: "Not all fields have been entered!" });
  
  if (formData.password.length < 2) return response.status(400).json({ message: "Password needs to be at least 6 characters!" });
  if (formData.password !== formData.passwordCheck) return response.status(400).json({ message: "Enter the same password twice for verification" }); 

  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(formData.password, salt);

  const getUser = await userSchema.findById(id);
  await getUser.updateOne({ "$set": { password: passwordHash }});
  response.json("Data has been updated!");
});

router.get("/", auth, async (request, response) => {
  const user = await userSchema.findById(request.user);
  response.json({ loginName: user.loginName, id: user._id });
});

module.exports = router;