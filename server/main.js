const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(express.json());
app.use(morgan("dev"))

app.get("/", (req, res) => {
  res.json({
    code: 200,
    message: "Welcome to the Shop Software API",
  });
});
module.exports = app;
