const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  loginname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  }
}, { collection: "evrallas_database" });

module.exports = mongoose.model("userSchema", userSchema);