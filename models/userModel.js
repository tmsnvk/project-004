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
  },
  achi: {
    type: Boolean,
    required: false,
  }
}, { collection: "evrallas_database" });

module.exports = mongoose.model("userSchema", userSchema);