const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    const { _id } = request.query;

    const getUser = await userSchema.findById(_id);
    return response.json({ gameStart: getUser.numberOfGameStarts, gameFinish: getUser.numberOfGameFinishes, gameDeath: getUser.numberOfDeaths });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};