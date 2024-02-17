var express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
var path = require("path");

const Profile = require("./public/models/profile");

var app = express();
mongoose.connect(
  "mongodb+srv://bok:b4mXTTHRcJJRQXIP@portfolio.ac3y6nr.mongodb.net/portfolio"
);
//add further logic for mongoose connection
const db = mongoose.connection;
db.once("open", () => {
  console.log("connected to mongo");
});

//initialize view engine
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//set dir path portfolio/public/...
app.use(express.static(path.join(__dirname, "public")));

//add routes below

//route to index
app.get("/", function (req, res) {
  res.render("pages/index");
});

//--------------------------------------//

// Start the server to listen on port 3000
const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//POST
app.post("/send-message", async (req, res) => {
  try {
    const newProfile = new Profile({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      message: req.body.message,
    });
    await newProfile.save();
    res.json({ success: true, message: "Profile added successfully" });
  } catch (error) {
    console.error("Error adding profile", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});
