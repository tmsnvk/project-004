const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    const user = await userSchema.findById(request.user);
    return response.json({ userName: user.userName, id: user._id, createdAt: user.createdAt });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};