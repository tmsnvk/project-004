const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    const user = await userSchema.findById(request.query);
    return response.json(user.colorTheme);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};