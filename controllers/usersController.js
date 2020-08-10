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

router.post("/api/login", (req, res) => {
  db.User.findOne({
    email: req.body.email,
  })
    .then((dbModel) => {
      if (!dbModel) {
        return res.json("Email or password is incorrect");
      }
      else if (!dbModel.validPassword(req.body.password)) {
        return res.json("Email or password is incorrect")
      }
      else res.json(dbModel);
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
