const express = require("express");
const app = express();

// Register view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
    name: "Phillip",
    address: "1755 Rocky Mountain Avenue, Milpitas, CA 95035",
  });
});
app.get("/dad", (req, res) => {
  res.render("index", {
    name: "Sam",
    address: "1755 Rocky Mountain Avenue, Milpitas, CA 95035",
  });
});
app.get("/mom", (req, res) => {
  res.render("index", {
    name: "Mou Noi",
    address: "1755 Rocky Mountain Avenue, Milpitas, CA 95035",
  });
});
app.get("/morality", (req, res) => {
  res.download("./downloads/morality.pdf");
});
app.listen(9000);
