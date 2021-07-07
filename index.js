const path = require("path");
const express = require("express");
const app = express(); // create express app

app.use(express.static("public"));

// start express server on port 3000
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});