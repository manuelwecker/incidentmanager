const express = require("express");
const issueRoutes = express.Router();

const { addIssue, getIssues, getLastIssue } = require("../lib/issues");

issueRoutes.post("/issues", async (request, response) => {
  try {
    const issue = request.body;
    await addIssue(issue);
    response.end();
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
});

issueRoutes.get("/lastissue", async (request, response) => {
  try {
    const issue = await getLastIssue();

    response.json(issue);
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
});

issueRoutes.get("/issues", async (request, response) => {
  try {
    const issues = await getIssues();

    response.json(issues);
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
});

module.exports = issueRoutes;
