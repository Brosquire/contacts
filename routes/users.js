const express = require("express");
const router = express.Router();

//  @Route  POST api/users
//  @Desc   Register A User
//  @Access Public
router.post("/", (req, res) => {
  res.send("Registers A User");
});

module.exports = router;
