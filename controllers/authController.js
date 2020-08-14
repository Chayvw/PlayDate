const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const db = require("../models");

router.post("/api/login", async (req, res) => {
      console.log(req.body);
    const email = req.body.email.toLowerCase();
    const user = await db.User.findOne({email})
    console.log(user);
    db.User.findOne({ email: email }).then((foundUser) => {
        // console.log("FOUND USER: ", foundUser);
        if (foundUser.password === req.body.password) {
            // send back a token.
            const privateKey = "playdateprivatekey"
            // const privateKey = process.env.JWT_PASSWORD;
            jwt.sign({ email: foundUser.email }, privateKey, function (err, token) {
                console.log(token);
                res.json({
                    error: false,
                    data: token,
                    message: "Successfully authenticated user. ",
                });
            });
        } else {
            res.status(401).json({
                error: true,
                data: null,
                message: "Unable to authenticate user. Please try again.",
            });
        }
    });
});

// router.post("/api/login", (req, res) => {
//     db.User.findOne({ email: req.body.email }).then(foundUser => {
//         if (foundUser.password === req.body.password) {
//             const privateKey = "playdatprivatekey";
//             jwt.sign({ email: req.body.email }, privateKey, function(err, token) {
//                 console.log(token);
//                 res.status(500).json({
//                     error: false,
//                     data: token,
//                     message: "Authenicated user",
//                 });
//               });

//         } else {
//             res.status(401).json({
//                 error: true,
//                 data: null,
//                 message: " unable to Authenicated user",
//             });
//         }




//     });
// });
module.exports = router; 