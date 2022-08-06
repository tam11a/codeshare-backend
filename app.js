// config the .env file
require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 4001;

// Import Routes
const auth = require("./route/auth");
const code = require("./route/code");

// Use Routes
app.use(express.json());
app.use("/auth", auth);
app.use("/code", code);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
