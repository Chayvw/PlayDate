const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/profiles", (req, res) => {
  db.Profile.find({})
    .then((response) => {
      res.json({
        error: false,
        data: response,
        message: "Success!",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to retrieve profile",
      });
    });
});

router.post("/api/profiles", (req, res) => {
  db.Profile.create(req.body)
    .then((response) => {
      res.json({
        error: false,
        data: response,
        message: "Success!",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to create profile",
      });
    });
});

module.exports = router;
