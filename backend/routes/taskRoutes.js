const express = require("express");
const taskRoutes = express.Router();

const { getTasks, updateTasks, addTask, deleteTask } = require("../lib/tasks");

taskRoutes.get("/tasks", async (request, response) => {
  try {
    const tasks = await getTasks();

    response.json(tasks);
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
});

taskRoutes.put("/updatetasks", async (request, response) => {
  try {
    const task = request.body;
    updateTasks(task);
    response.end();
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
});

taskRoutes.post("/addtask", async (request, response) => {
  try {
    const task = request.body;
    await addTask(task);
    response.end();
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
});

taskRoutes.post("/deletetask", async (request, response) => {
  try {
    console.log(request.body._id);
    await deleteTask(request.body._id);
    response.end();
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
});

module.exports = taskRoutes;
