const path = require("path");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const db = require("./mongodb/database.js");

require("dotenv").config();

const publicPath = path.join(__dirname, "..", "client/public");

const app = express();

app.use(cors());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicPath));

app.use("/achievement", require("./routes/achievement"));
app.use("/adventure", require("./routes/adventure"));
app.use("/contact", require("./routes/contact"));
app.use("/user", require("./routes/user"));

mongoose.set("useFindAndModify", false);
mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, 
  (error) => {
    if (error) {
      throw error;
    } else {
      console.log("Connected to your MongoDB database - moongose");
    }
  }
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const port = process.env.PORT || 3003;
db.connect(() => {
  app.listen(port, () => {
    console.log(`evrallas project @ port ${port}!`);
    console.log("connected to evrallas mongodb database!");
  });
});