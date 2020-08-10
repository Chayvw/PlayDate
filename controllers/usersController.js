const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/signup", (req, res) => {
  res.send("Its working");
});

// router.post("/api/signup", (req, res) => {
//   db.User.create({
//     email: req.body.email,
//     password: req.body.password,
//   })
//     .then(function () {
//       res.redirect(307, "/api/login");
//     })
//     .catch(function (err) {
//       res.status(401).json(err);
//     });
// });

router.post("/api/signup", (req, res) => {
  db.User.create(req.body)
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
        message: "Unable to create user",
      });
    });
});

module.exports = router;
