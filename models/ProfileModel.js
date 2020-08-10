const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  name: { type: String, required: "Profile name is required" },
  age: { type: Number, required: "Profile age is required" },
  gender: { type: String, required: "Profile gender is required" },
  size: { type: String, required: "Profile size is required" },
  city: { type: String, required: "Profile city is required" },
  state: { type: String, required: "Profile state is required" },
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
