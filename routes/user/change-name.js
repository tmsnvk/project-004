const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    const { id, formData } = request.body;
  
    if (!formData.changedName) return response.status(400).json({ message: "Please enter the new name of your account!" });
  
    const checkName = await userSchema.findOne({ userName: formData.changedName });
    if (checkName) return response.status(400).json({ message: "There's already an account with this name!" });
  
    await userSchema.findByIdAndUpdate(id, ({ "$set": { userName: formData.changedName }}));
    return response.json("Our library caretakers in the Tower have updated your data in our archives!");
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};