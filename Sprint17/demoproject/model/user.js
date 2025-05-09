const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  shortname: { type: String, default: null },
  firstname: { type: String, default: null },
  lastname: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
});

module.exports = mongoose.model("user", userSchema);