const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
});

const Profile = mongoose.model("profile", profileSchema);
module.exports = Profile;
