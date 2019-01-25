const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: True
  },
  email: {
    type: String,
    required: True
  },
  password: {
    type: String,
    required: True
  },
  avatar: {
    type: String,
    required: True
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);
