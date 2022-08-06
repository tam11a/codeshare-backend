const { User } = require("../model/user");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  res.send({
    msg: "hello!",
  });
});

module.exports = router;
