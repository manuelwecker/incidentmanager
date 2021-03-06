const MongoClient = require("MongoDB").MongoClient;

let db = null;

async function dbInit(url, dbName) {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  await client.connect();
  db = client.db(dbName);
}

async function getCollection(collectionName) {
  if (!db) {
    throw new Error("Not initialized");
  }
  return db.collection(collectionName);
}

exports.dbInit = dbInit;
exports.getCollection = getCollection;
