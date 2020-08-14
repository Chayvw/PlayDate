const express = require("express");
const router = express.Router();
const db = require("../models");
const jwt = require("jsonwebtoken")

// Create
    router.post("/api/playdate", (req, res) => {
        console.log(req.headers.auth);
        jwt.verify(req.headers.auth, process.env.JWT_PASSWORD, function(err, decoded) {
            if(err) {
                console.log("Decoding token error");
                console.log(err);
            }else {
                console.log(decoded)
            }
          });
    
  db.PlayDate.create(req.body)
    .then((createdPlayDate) => {
      res.json({
        error: false,
        data: createdPlayDate,
        message: "Successfully created new play date",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to create play date",
      });
    });
});
// Read
router.get("/api/playdate", (req, res) => {
  db.PlayDate.find({})
    .then((foundPlaydate) => {
      res.json({
        error: false,
        data: foundPlaydate,
        message: "Successfully found all play dates.",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to retrieve all play date ",
      });
    });
});
// Update
router.put("/api/playdate/:id", (req, res) => {
  console.log(req.body, req.params);
  db.PlayDate.updateOne(
    {
      _id: req.params.id,
    },
    {
      $set: {
        name: req.body.name,
        date: req.body.date,
        location: req.body.location,
        description: req.body.description,
        //   modified: Date.now()
      },
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

// get route by id
router.get("/api/playdate/:id", (req, res) => {
  console.log(req.body, req.params);
  db.PlayDate.findOne({ _id: req.params.id }).then((response) => {
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
      message: "Unable to get playdate by id",
    });
  });
});

router.delete("/api/playdate/:id", (req, res) => {
  db.PlayDate.deleteOne(
    {
      _id: req.params.id,
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

// router.get("/api/ingredients/:id", (req, res) => {
//     db.Ingredient.findById(req.params.id)
//       .then((foundPlaydate) => {
//         res.json({
//           error: false,
//           data: foundIngredient,
//           message: "Successfully retrieved play dates.",
//         });
//       })
//       .catch((err) => {
//         res.status(500).json({
//           error: true,
//           data: null,
//           message: "Unable to retrieve play dates . ",
//         });
//       });
//   });

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

// router.post("/api/playdate", (req, res) => {
//     const id = "5f3198a236bd9ece99c980dd"
//     db.PlayDate.create(req.body)
//         .then(({ _id }) => db.User.findOneAndUpdate({_id: id}, { $push: { playdates: _id } }, { new: true }))
//         .then(dbUser => {
//             res.json(dbUser);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

module.exports = router;
