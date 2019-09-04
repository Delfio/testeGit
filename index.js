const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello World2!");
});

app.listen(3333);
