const { ObjectID } = require("mongodb");
const { getCollection } = require("./db");

async function getTasks() {
  const tasks = await getCollection("tasks");
  return tasks
    .find()
    .sort({ number: 1 })
    .toArray();
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

async function deleteTask(TaskID) {
  const id = new ObjectID(TaskID);
  const tasks = await getCollection("tasks");
  await tasks.deleteOne({ _id: id });
}

module.exports = { getTasks, updateTasks, addTask, deleteTask };
