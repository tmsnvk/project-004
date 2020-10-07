const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  loginName: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date },
  // updatedAt: { type: Date },
  numberofDeath: { type: Number, default: 0, required: true },
  achievementsA1S1: {
    followToRoom: {
      id: { type: Number, default: 1, required: true },
      state: { type: Boolean, required: true },
      name: { type: String, required: true },
      description: { type: String, default: "", required: true },
    },
    keepPunching: {
      id: { type: Number, default: 2, required: true },
      state: { type: Boolean, required: true },
      name: { type: String, required: true },
      description: { type: String, default: "", required: true },
    },
    hideSafely: {
      id: { type: Number, default: 3, required: true },
      state: { type: Boolean, required: true },
      name: { type: String, required: true },
      description: { type: String, default: "", required: true },
    },
    refuseMeal: {
      id: { type: Number, default: 4, required: true },
      state: { type: Boolean, required: true },
      name: { type: String, required: true },
      description: { type: String, default: "", required: true },
    },
    acceptMeal: {
      id: { type: Number, default: 5, required: true },
      state: { type: Boolean, required: true },
      name: { type: String, required: true },
      description: { type: String, default: "", required: true },
    },
    refusePampflet: {
      id: { type: Number, default: 6, required: true },
      state: { type: Boolean, required: true },
      name: { type: String, required: true },
      description: { type: String, default: "", required: true },
    },
    acceptPampflet: {
      id: { type: Number, default: 7, required: true },
      state: { type: Boolean, required: true },
      name: { type: String, required: true },
      description: { type: String, default: "", required: true },
    },
    listenToSoldiers: {
      id: { type: Number, default: 8, required: true },
      state: { type: Boolean, required: true },
      name: { type: String, required: true },
      description: { type: String, default: "", required: true },
    }
  }
}, { collection: "evrallas_database" });

module.exports = mongoose.model("userSchema", userSchema);