const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date },
  numberOfGameStarts: { type: Number, default: 0, required: true },
  numberOfGameFinishes: { type: Number, default: 0, required: true },
  numberOfDeaths: { type: Number, default: 0, required: true },
  colorTheme: { type: String, default: "", required: true },
  savedGames: [
    {
      name: { type: String, default: "", required: true },
      savedId: { type: String, default: "", required: true }
    },
    {
      name: { type: String, default: "", required: true },
      savedId: { type: String, default: "", required: true }
    },
    {
      name: { type: String, default: "", required: true },
      savedId: { type: String, default: "", required: true }
    }
    // {
    //   name: { type: String, default: "", required: true },
    //   savedId: { type: String, default: "", required: true }
    // }
  ],
  achievementsTutorial01: {
    firstAchievement: {
      id: { type: Number, default: 1, required: true },
      state: { type: Boolean, required: true },
      name: { type: String, required: true },
      description: { type: String, default: "", required: true },
      date: { type: Number, default: () => {return new Date().getTime()}, required: false }
    },
    finishTutorial01: {
      id: { type: Number, default: 2, required: true },
      state: { type: Boolean, required: true },
      name: { type: String, required: true },
      description: { type: String, default: "", required: true },
      date: { type: Number, default: () => {return new Date().getTime()}, required: false }
    }
  },
  achievementsTutorial02: {
    waitBang: {
      id: { type: Number, default: 1, required: true },
      state: { type: Boolean, required: true },
      name: { type: String, required: true },
      description: { type: String, default: "", required: true },
      date: { type: Number, default: () => {return new Date().getTime()}, required: false }
    },
    avoidMillie: {
      id: { type: Number, default: 2, required: true },
      state: { type: Boolean, required: true },
      name: { type: String, required: true },
      description: { type: String, default: "", required: true },
      date: { type: Number, default: () => {return new Date().getTime()}, required: false }
    },
    caughtByMillie: {
      id: { type: Number, default: 3, required: true },
      state: { type: Boolean, required: true },
      name: { type: String, required: true },
      description: { type: String, default: "", required: true },
      date: { type: Number, default: () => {return new Date().getTime()}, required: false }
    },
    tutorialWillFinished: {
      id: { type: Number, default: 4, required: true },
      state: { type: Boolean, required: true },
      name: { type: String, required: true },
      description: { type: String, default: "", required: true },
      date: { type: Number, default: () => {return new Date().getTime()}, required: false }
    }
  }
  // achievementsA1S1: {
  //   followToRoom: {
  //     id: { type: Number, default: 1, required: true },
  //     state: { type: Boolean, required: true },
  //     name: { type: String, required: true },
  //     description: { type: String, default: "", required: true },
  //     date: { type: Number, default: () => {return new Date().getTime()}, required: false }
  //   },
  //   keepPunching: {
  //     id: { type: Number, default: 2, required: true },
  //     state: { type: Boolean, required: true },
  //     name: { type: String, required: true },
  //     description: { type: String, default: "", required: true },
  //     date: { type: Number, default: () => {return new Date().getTime()}, required: false }
  //   },
  //   hideSafely: {
  //     id: { type: Number, default: 3, required: true },
  //     state: { type: Boolean, required: true },
  //     name: { type: String, required: true },
  //     description: { type: String, default: "", required: true },
  //     date: { type: Number, default: () => {return new Date().getTime()}, required: false }
  //   },
  //   refuseMeal: {
  //     id: { type: Number, default: 4, required: true },
  //     state: { type: Boolean, required: true },
  //     name: { type: String, required: true },
  //     description: { type: String, default: "", required: true },
  //     date: { type: Number, default: () => {return new Date().getTime()}, required: false }
  //   },
  //   acceptMeal: {
  //     id: { type: Number, default: 5, required: true },
  //     state: { type: Boolean, required: true },
  //     name: { type: String, required: true },
  //     description: { type: String, default: "", required: true },
  //     date: { type: Number, default: () => {return new Date().getTime()}, required: false }
  //   },
  //   refusePampflet: {
  //     id: { type: Number, default: 6, required: true },
  //     state: { type: Boolean, required: true },
  //     name: { type: String, required: true },
  //     description: { type: String, default: "", required: true },
  //     date: { type: Number, default: () => {return new Date().getTime()}, required: false }
  //   },
  //   acceptPampflet: {
  //     id: { type: Number, default: 7, required: true },
  //     state: { type: Boolean, required: true },
  //     name: { type: String, required: true },
  //     description: { type: String, default: "", required: true },
  //     date: { type: Number, default: () => {return new Date().getTime()}, required: false }
  //   },
  //   listenToSoldiers: {
  //     id: { type: Number, default: 8, required: true },
  //     state: { type: Boolean, required: true },
  //     name: { type: String, required: true },
  //     description: { type: String, default: "", required: true },
  //     date: { type: Number, default: () => {return new Date().getTime()}, required: false }
  //   }
  // }
}, { collection: "user_database" });

module.exports = mongoose.model("userSchema", userSchema);