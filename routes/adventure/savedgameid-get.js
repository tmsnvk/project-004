const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    const { id, chosenStoryId } = request.query;

    const getUser = await userSchema.findOne({ _id: id });

    for (let i = 0; i < getUser.savedGames.length; i++) {
      if (chosenStoryId === getUser.savedGames[i].name) return response.json(getUser.savedGames[i].savedId);
    }
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};