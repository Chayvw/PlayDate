const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/signup", (req, res) => {
  res.send("Its working");
});


router.post("/api/signup", (req, res) => {
  db.User.create(req.body)
    .then((dbModel) => {
      res.json(dbModel);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to create user",
      });
    });
});



module.exports = router;
