const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const functions = require("./functions");

const zz = 12;

app.set("view engine", "hbs");
app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use("/js", express.static(path.join(__dirname, "./js")));
app.get("/", function (req, res) {
  res.render("index", {
    pageTitle: "Zajęcia ALK",
    subTitle: "Podtytuł",
    x: 4,
    y: zz > 9 ? functions.add(1, 2) : null,
  });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});
