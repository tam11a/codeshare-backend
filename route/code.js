const { Code } = require("../model/code");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log(req.query);
  //   try {
  //     console.log(await Code.findById(req.query.id));
  //   } catch (err) {
  //     console.log(err);
  //   }

  res.send({});
});

router.post("/", async (req, res) => {
  const code = new Code({
    title: req.body.title,
    code: req.body.code,
    fileName: req.body.fileName,
    author: req.body.author,
  });

  let error = code.validateSync();

  const cursor = await code.save();

  res.status(error ? 400 : 201).send(
    error
      ? error.errors
      : {
          _id: cursor._id,
        }
  );
});

module.exports = router;
