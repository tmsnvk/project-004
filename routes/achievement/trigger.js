const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  const { code, id, storyCode } = request.body;

  if (!request.body) return response.status(400).json({ message: "Our library caretakers haven't received any data." });

  if (storyCode === "a1s1") {
    const achievementClientCode = [undefined, "AOSO8G", "AOSO5N_2"];
    const achievementStates = [undefined, "achievementsA1S1.keepPunching.state", "achievementsA1S1.hideSafely.state"];
    const achievementTimestamps = [undefined, "achievementsA1S1.keepPunching.date", "achievementsA1S1.hideSafely.date"];
    
    const getUser = await userSchema.findById(id);
    const achievementValues = Object.entries(getUser.achievementsA1S1).splice(1);
    for (let i = 0; i < achievementClientCode.length; i++) {
      if (code === achievementClientCode[i]) {
        if (achievementValues[i][1].state) return response.status(200).json({ message: "Already unlocked this one." });
  
        try {
          await getUser.updateOne({ "$set": { [achievementStates[i]]: true, [achievementTimestamps[i]]: Date.now() }});
          return response.json("Our library caretakers in the Tower have updated your data in our archives!");
        } catch (error) {
          return response.status(500).json({ error: error.message });
        }
      }
    }
  }

  if (storyCode === "a1s2") {
    try {
      return response.json("story not yet ready, don't do anything -- need to copy over the code above");
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }
};