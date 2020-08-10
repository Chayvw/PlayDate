const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/profile", (req, res) => {
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

module.exports = router;
