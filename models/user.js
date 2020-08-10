const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {type: String, require: true},
  password: {type: String, require:true}
});

UserSchema.pre('save', function(next){
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
  });

const User = mongoose.model("User", UserSchema);

module.exports = User;
