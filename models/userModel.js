const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  loginName: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
  }
}, { collection: "evrallas_database" });

module.exports = mongoose.model("userSchema", userSchema);