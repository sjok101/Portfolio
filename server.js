var express = require("express");

const mongoose = require("mongoose");

const db = mongoose.connection;
//add further logic for mongoose connection

var bodyParser = require("body-parser");
var app = express();
var path = require("path");

//initialize view engine
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//set dir path portfolio/public/...
app.use(express.static(path.join(__dirname, "public")));

//add routes below

//route to index
app.get("/", function (req, res) {
  res.render("pages/index");
});

//--------------------------------------//

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
