const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

router.get("/api/test", (req, res) => {
  console.log("api has been hit");
  res.json({ message: "hello from the api" });
});

router.get("/api/test2", (req, res) => {
  console.log("api has been hit");
  res.json({ message: "this is another button" });
});

router.get("/api/test3", (req, res) => {
  console.log("api has been hit");
  res.json({ message: "this is a third example" });
});

module.exports = router;