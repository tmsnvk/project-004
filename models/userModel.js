const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  loginName: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date },
  // updatedAt: { type: Date },
  achievementsA1S1: {
    followToRoom: { type: Boolean, required: false },
    keepPunching: { type: Boolean, required: false },
    hideSafely: { type: Boolean, required: false },
    refuseMeal: { type: Boolean, required: false },
    acceptMeal: { type: Boolean, required: false },
    refusePampflet: { type: Boolean, required: false },
    acceptPampflet: { type: Boolean, required: false },
    listenToSoldiers: { type: Boolean, required: false },
  }
}, { collection: "evrallas_database" });

module.exports = mongoose.model("userSchema", userSchema);