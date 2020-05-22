const express = require("express");
const memoRoutes = express.Router();

const { getMemo } = require("../lib/memos");

memoRoutes.post("/memo", async (request, response) => {
  try {
    const type = request.body.type;
    const memo = await getMemo(type);

    response.json(memo);
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
});

module.exports = memoRoutes;
