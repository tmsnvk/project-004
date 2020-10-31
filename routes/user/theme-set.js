const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    const { id, colorTheme } = request.body;

    await userSchema.findByIdAndUpdate(id, ({ "$set": { colorTheme }}));
    return response.json({ message: "Color theme updated." });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};