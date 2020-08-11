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
    const id = "5f3198a236bd9ece99c980dd"
    db.PlayDate.create(req.body)
        .then(({ _id }) => db.User.findOneAndUpdate({_id: id}, { $push: { playdates: _id } }, { new: true }))
        .then(dbUser => {
            res.json(dbUser);
        })
        .catch(err => {
            res.json(err);
        });
});
          
    


module.exports = router;
