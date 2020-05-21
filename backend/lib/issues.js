const { getCollection } = require("./db");

function getIssueCollection() {
  return getCollection("issues");
}

function getIssues() {
  const collection = getIssueCollection();
  return collection.find().toArray();
}

function addIssue(issue) {
  return getIssueCollection().insertOne(issue);
}

module.exports = {
  addIssue,
  getIssues
};
