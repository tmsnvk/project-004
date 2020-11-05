const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    const userIdCookie = request.cookies.userId;

    const getUser = await userSchema.findById(userIdCookie);
    return response.json({ gameStart: getUser.numberOfGameStarts, gameFinish: getUser.numberOfGameFinishes, gameDeath: getUser.numberOfDeaths });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};