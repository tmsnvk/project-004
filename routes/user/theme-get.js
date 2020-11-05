const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    const usernameCookie = request.cookies.username;

    const getUser = await userSchema.findOne({ username: usernameCookie });
    return response.json(getUser.colorTheme);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};