const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/signup", (req, res) => {
  res.send("Its working");
});

router.post("/api/signup", (req, res) => {
  db.User.create({
    email: req.body.email,
    password: req.body.password,
  })
    .then(function () {
      res.redirect(307, "/api/login");
    })
    .catch(function (err) {
      res.status(401).json(err);
    });
});

module.exports = router;
