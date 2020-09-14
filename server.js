const path = require("path");
const express = require("express");
const cors = require("cors");
// const bodyParser = require("body-parser");
const helmet = require("helmet");
const mongoose = require("mongoose");

require("dotenv").config();

const publicPath = path.join(__dirname, "..", "client/public");

const app = express();

app.use(helmet({
  contentSecurityPolicy: false,
}));
app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(publicPath));

mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, 
  (error) => {
    if (error) {
      throw error;
    } else {
      console.log("Connected to your MongoDB database");
    }
  });

app.use("/users", require("./routes/userRoute"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`evrallas project @ port ${port}!`);
});