const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render('index')
  console.log("Yo");
});
app.listen(9000);
