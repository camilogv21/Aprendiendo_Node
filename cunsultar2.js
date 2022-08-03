const mongoC = require("mongodb").MongoClient

const u = "mongodb+srv://adsi2364481:p8TCW6KTs7OtZPFa@clusteradsi2364481.bnbay.mongodb.net/?retryWrites=true&w=majority"

const client = new mongoC(u);
async function run() {
  try {
    const database = client.db("FakeStore");
    const ven = database.collection("Aprendices");
    // Query for a movie that has the title 'The Room'
    const query = { "cedula":123456789};
    const v = await ven.findOne(query)

    console.log(v);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);