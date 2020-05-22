const { ObjectID } = require("mongodb");
const { getCollection } = require("./db");

async function getTasks() {
  const tasks = await getCollection("tasks");
  return tasks.find().toArray();
}

async function updateTasks(task) {
  const id = new ObjectID(task._id);
  const tasks = await getCollection("tasks");
  await tasks.updateOne({ _id: id }, { $set: { taskStatus: task.taskStatus } });
}

async function addTask(task) {
  const tasks = await getCollection("tasks");
  return tasks.insertOne(task);
}

module.exports = { getTasks, updateTasks, addTask };
