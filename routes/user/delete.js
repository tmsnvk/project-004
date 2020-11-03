const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    await userSchema.findByIdAndDelete(request.user);
    return response.json({ message: "The Tower librarians have deleted the entry from their Archives according to your data input." });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};