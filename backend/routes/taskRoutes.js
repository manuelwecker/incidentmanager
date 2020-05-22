const express = require("express");
const taskRoutes = express.Router();

const { getTasks, updateTasks, addTask } = require("../lib/tasks");

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

module.exports = taskRoutes;
