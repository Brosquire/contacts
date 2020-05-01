const express = require("express");
const router = express.Router();

//  @Route  GET api/contacts
//  @Desc   Get all users contacts
//  @Access Private
router.get("/", (req, res) => {
  res.send("Get all users contacts");
});

//  @Route  POST api/contacts/
//  @Desc   Add new contact
//  @Access Private
router.post("/", (req, res) => {
  res.send("Add new contact");
});

//  @Route  PUT api/contacts/:id
//  @Desc   Update current contact
//  @Access Private
router.put("/:id", (req, res) => {
  res.send("Update contact by ID");
});

//  @Route  DELETE api/contacts/:id
//  @Desc   Delete contact by ID
//  @Access Private
router.delete("/:id", (req, res) => {
  res.send("Delete contact by ID");
});

module.exports = router;
