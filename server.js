var express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

const db = mongoose.connection;
//add further logic for mongoose connection

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

// Start the server to listen on port 80
const port = 80;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
