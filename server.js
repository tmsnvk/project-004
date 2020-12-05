const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const compression = require("compression");

const publicPath = path.join(__dirname, "..", "client/public");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicPath));
app.use(cookieParser());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());
app.use(compression());

app.use("/achievement", require("./routes/achievement"));
app.use("/adventure", require("./routes/adventure"));
app.use("/contact", require("./routes/contact"));
app.use("/user", require("./routes/user"));

mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }, (error) => {
  if (error) {
    throw error;
  } else {
    console.log("The application is now connected to mongoDB via moongose.");
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get('*', (request, response) => response.sendFile(path.join(__dirname, "client/build", "index.html")));
}

const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`The application is listening @ port ${port}!`));