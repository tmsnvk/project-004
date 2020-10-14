const bcrypt = require("bcryptjs");
const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    const { id, formData } = request.body;

    if (!formData.password || !formData.passwordCheck) return response.status(400).json({ message: "Please enter all fields!" });

    if (formData.password.length < 6) return response.status(400).json({ message: "The password needs to be at least 6 characters long!" });
    if (formData.password !== formData.passwordCheck) return response.status(400).json({ message: "Please enter the same password twice for verification" }); 

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(formData.password, salt);

    await userSchema.findByIdAndUpdate(id, ({ "$set": { password: passwordHash }}));
    return response.json("Our library caretakers in the Tower have updated your data in our archives!");
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};