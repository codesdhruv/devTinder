const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  emailid: {
    type: String,
  },
  password: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: Number,
  },
});

module.exports = mongoose.model("User", userSchema);
