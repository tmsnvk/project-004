const { MongoClient } = require("mongodb");
let mongodb;

const connect = (callback) => {
  MongoClient.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true }, (error, client) => {
    mongodb = client.db();
    callback();
  });
};

const get = () => {
    return mongodb;
};

const close = () => {
    mongodb.close();
};

module.exports = { connect, get, close };