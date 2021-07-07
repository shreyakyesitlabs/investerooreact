const path = require("path");
const express = require("express");
const app = express(); // create express app

app.use(express.static("public"));

// start express server on port 3000
app.listen(3000, () => {
  console.log("server started on port 3000");
});