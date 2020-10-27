const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    const { id, formData } = request.body;
    const regexpUsername = /^[A-Za-z0-9 ]+$/i;
  
    if (!formData.changedName) return response.status(400).json({ message: "Please enter the new name of your account!" });
    if (formData.changedName.length < 5 || formData.changedName.length > 12) return response.status(400).json({ message: "USERNAME is required - use only letters and numbers; minimum 5, maximum 12 characters long." });
    if (!formData.changedName.match(regexpUsername)) return response.status(400).json({ message: "Use only letters and numbers." });

    const checkName = await userSchema.findOne({ userName: formData.changedName });
    if (checkName) return response.status(400).json({ message: "There's already an account with this name!" });
  
    await userSchema.findByIdAndUpdate(id, ({ "$set": { userName: formData.changedName }}));
    return response.json("Our library caretakers in the Tower have updated your data in our Archives!");
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};