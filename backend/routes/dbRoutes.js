const express = require("express");
const dbRoutes = express.Router();

const { addIssue, getIssues } = require("../lib/issues");

dbRoutes.post("/issues", async (request, response) => {
  try {
    const attendee = request.body;
    await addIssue(attendee);
    response.end();
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
});

dbRoutes.get("/issues", async (request, response) => {
  try {
    const issues = await getIssues();
    console.log(issues);
    response.json(issues);
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
});

module.exports = dbRoutes;
