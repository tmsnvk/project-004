const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    const { chosenStoryId } = request.query;
    const userIdCookie = request.cookies.userId;

    const getUser = await userSchema.findById(userIdCookie);

    for (let i = 0; i < getUser.savedGames.length; i++) {
      if (chosenStoryId === getUser.savedGames[i].name) return response.json(getUser.savedGames[i].savedId);
    }
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};