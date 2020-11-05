const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    const { formData } = request.body;
    const userIdCookie = request.cookies.userId;
    const regexpUsername = /^[A-Za-z0-9 ]+$/i;
  
    if (!formData.changedName) return response.status(400).json({ message: "Enter the new name of your account!" });
    if (formData.changedName.length < 5 || formData.changedName.length > 12) return response.status(400).json({ message: "USERNAME is required - use only letters and numbers; minimum 5, maximum 12 characters long." });
    if (!formData.changedName.match(regexpUsername)) return response.status(400).json({ message: "Use only letters and numbers." });

    const checkName = await userSchema.findOne({ username: formData.changedName });
    if (checkName) return response.status(400).json({ message: "There's already an account with this name in The Tower's Archives." });
  
    await userSchema.findByIdAndUpdate(userIdCookie, ({ "$set": { username: formData.changedName }}));
    return response.json({ message: "The Tower librarians have updated their Archives with your data input." });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};