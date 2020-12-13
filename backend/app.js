require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require("./db");

module.exports.prepareApp = async function prepareApp(mongoUrl) {
  await db.connect(mongoUrl);
  const app = express();
  require("./routers")(app);

  app.use(express.static("dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve("dist/index.html"));
  });

  return app;
};
