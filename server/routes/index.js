// server/routes/index.js

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("http://localhost:3001/api/");
  res.send({ title: "hfsdkljfsdjlkfsjdlk" });
});

router.get("/hello", (req, res) => {
  res.send({ name: "한창민", id: "1234" });
});

module.exports = router;
