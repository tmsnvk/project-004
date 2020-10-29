const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    const { id, chosenStoryId } = request.query;
    
    const getUser = await userSchema.findById(id);
    return response.json(getUser.savedGames[chosenStoryId]);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};