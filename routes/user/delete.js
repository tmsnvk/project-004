const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    await userSchema.findByIdAndDelete(request.user);
    return response.json("The entry has been deleted from our Archives!");
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};