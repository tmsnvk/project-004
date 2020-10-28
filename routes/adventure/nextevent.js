const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

module.exports = async (request, response) => {
  const { _id, event } = request.query;
console.log(request.query);
  try {
    await client.connect();
    const database = client.db("evrallas");
    const collection = database.collection("adventures_database");

    const query = { _id }

    const one = await collection.findOne(query)
    console.log(one.arcOneStoryOne[event]);
    await client.close();
    return response.json(one.arcOneStoryOne[event])
  } catch (error) {
    console.log(error);
  }
};