const { getCollection } = require("./db");

async function getMemo(type) {
  const memos = getCollection("memos");
  const cursor = await memos.find({ type: type });
  const result = cursor.toArray();
  return result;
}

module.exports = {
  getMemo
};
