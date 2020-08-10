const express = require("express");
const router = express.Router();
const db = require("../models");

// .post("/submit", ({ body }, res) => {
//     db.Note.create(body)
//       .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
//       .then(dbUser => {
//         res.json(dbUser);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });
  
//   app.get("/populateduser", (req, res) => {
//     db.User.find({})
//       .populate("notes")
//       .then(dbUser => {
//         res.json(dbUser);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });

router.post("/api/playdate", (req, res) => {
    db.PlayDate.create(req.body)
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
  