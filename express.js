const express = require("express");

const app = express();

app.get("/api/users", async (request, response) => {
  response.json(["leon", "marwin"]);
});

// Serve any static files
app.use(express.static(path.join(__dirname, "client/build")));

// Handle React routing, return all requests to React app
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

initDb(process.env.MONGO_URL, process.env.DB_NAME).then(() => {
  console.log("DB initialized");
  app.listen(process.env.PORT, () => {
    console.log(`Server ready on http://localhost:${process.env.PORT}`);
  });
});
