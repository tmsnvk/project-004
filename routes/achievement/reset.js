const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    const userIdCookie = request.cookies.userId;

    await userSchema.findByIdAndUpdate(userIdCookie, { "$set": { 
      "numberOfGameStarts": 0,
      "numberOfGameFinishes": 0,
      "numberOfDeaths": 0,
    }});
    await userSchema.findByIdAndUpdate(userIdCookie, { "$set": { 
      "achievementsTutorial01.firstAchievement.state": false,
      "achievementsTutorial01.finishTutorial01.state": false,
      "achievementsTutorial02.waitBang.state": false,
      "achievementsTutorial02.avoidMillie.state": false,
      "achievementsTutorial02.caughtByMillie.state": false,
      "achievementsTutorial02.tutorialWillFinished.state": false
    }});
    await userSchema.findByIdAndUpdate(userIdCookie, { "$set": { 
      "savedGames.$[].savedId": "ID0001"
    }});
    return response.json({ message: "The Tower librarians have updated their Archives with your data input." });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};