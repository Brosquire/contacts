const express = require("express");
const router = express.Router();

//  @Route  GET api/auth
//  @Desc   get logged in user
//  @Access Private
router.get("/", (req, res) => {
  res.send("Get Logged In User");
});

//  @Route  POST api/auth
//  @Desc   Authenticate user and get token
//  @Access Public
router.post("/", (req, res) => {
  res.send("Log In User");
});

module.exports = router;
