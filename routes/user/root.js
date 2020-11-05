const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    const userIdCookie = request.cookies.userId;

    const getUser = await userSchema.findById(userIdCookie);
    return response.json({ username: getUser.username, createdAt: getUser.createdAt });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};