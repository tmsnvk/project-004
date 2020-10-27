const bcrypt = require("bcryptjs");
const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    const { id, formData } = request.body;

    if (!formData.currentPassword || !formData.newPassword || !formData.newPasswordCheck) return response.status(400).json({ message: "Please enter all fields!" });

    const getUser = await userSchema.findById(id);
    const isMatch = await bcrypt.compare(formData.currentPassword, getUser.password);
    if (!isMatch) return response.status(400).json({ message: "Please provide valid credentials!" });

    if (formData.newPassword.length < 6 || formData.newPassword.length > 15) return response.status(400).json({ message: "PASSWORD is required; minimum 6, maximum 15 characters long." });
    if (formData.newPassword !== formData.newPasswordCheck) return response.status(400).json({ message: "Please enter the same password twice for verification" }); 

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(formData.newPassword, salt);

    await getUser.updateOne({ "$set": { password: passwordHash }});
    return response.json("Our library caretakers in the Tower have updated your data in our Archives!");
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};