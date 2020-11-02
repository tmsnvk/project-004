const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    const { id } = request.body;

    await userSchema.findByIdAndUpdate(id, ({ "$inc": { numberOfGameFinishes: +1 }}));
    return response.json("Our library caretakers in the Tower have updated your data in our archives!");
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};