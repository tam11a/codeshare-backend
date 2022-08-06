const mongoose = require("../config/database");

var codeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "{PATH} is required."],
      trim: true,
    },
    code: {
      type: String,
      required: [true, "{PATH} is required."],
    },
    fileName: {
      type: String,
      required: [true, "{PATH} is required."],
      trim: true,
    },
    author: {
      type: String,
      required: [true, "{PATH} is required."],
      trim: true,
    },
  },
  { timestamps: true }
);

const Code = mongoose.model("Code", codeSchema);
module.exports = {
  Code,
};
