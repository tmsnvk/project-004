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
    console.log(request.body);
    
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
      achievementsAOSO: {
        numberOfDeath: 0,
        typesOfDeath: "",
        followToRoom: false,
        keepPunching: false,
        hideSafely: false,
        refuseMeal: false,
        acceptMeal: false,
        refusePampflet: false,
        acceptPampflet: false,
        listenToSoldiers: false
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
    const { loginName, password, auth } = request.body;

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

  const achievementClientCode = [undefined, "AOSO8G", "AOSO5N_2"];
  const achievementMongoCode = [undefined, "achievementsAOSO.keepPunching", "achievementsAOSO.hideSafely"];

  const getUser = await userSchema.findById(receivedData.id);
  const achievementValues = Object.entries(getUser.achievementsAOSO).splice(3);

  for (let i = 0; i < achievementClientCode.length; i++) {
    if (receivedData.code === achievementClientCode[i]) {
      if (achievementValues[i][1]) return response.status(200).json({ message: true });

      try {
        await getUser.updateOne({ "$set": { [achievementMongoCode[i]]: true }});
        return response.json("update received");
      } catch (error) {
        response.status(500).json({ error: error.message });
      }
    }
  }
});

// router.get("/achievements/aoso", async (request, response) => {
//   const receivedData = request.query;
//   const getUser = await userSchema.findById(receivedData);
//   response.json(getUser.achievementsAOSO);
// });

router.get("/", auth, async (request, response) => {
  const user = userSchema.findById(request.user);
  response.json({ loginName: user.loginName, id: user._id });
});

module.exports = router;