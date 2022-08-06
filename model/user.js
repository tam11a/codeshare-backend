const mongoose = require("../config/database");

var userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      maxLength: 11,
      required: true,
      trim: true,
    },
    fullName: {
      type: String,
      maxLength: 32,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // One Account with One Email
      trim: true,
    },
    avatarUrl: {
      type: String,
      trim: true,
    },
    hash: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = {
  User,
};
