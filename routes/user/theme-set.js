const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    const { colorTheme } = request.body;
    const userIdCookie = request.cookies.userId;

    await userSchema.findByIdAndUpdate(userIdCookie, ({ "$set": { colorTheme }}));
    return response.json({ message: `The Tower librarians have updated their Archives with your data input - color theme - ${colorTheme}.` });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};