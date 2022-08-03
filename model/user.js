import mongoose from "../config/database";

var userSchema = new mongoose.Schema({
  userName: String,
  fullName: String,
  avatarUrl: String,
  hash: String,
});

var User = mongoose.model("User", userSchema);
