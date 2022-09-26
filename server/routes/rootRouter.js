const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("homepage 입니다!");
});
router.get("/hello", (req, res) => {
  res.send("hello 입니다!");
});

module.exports = router;
