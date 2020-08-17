require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const db = require("../models");

router.post("/api/login", async (req, res) => {
    //   console.log(req.body);
    const email = req.body.email.toLowerCase();
    const user = await db.User.findOne({email})
    // console.log(user);
    db.User.findOne({ email: email }).then((foundUser) => {
        // console.log("User Found: ", foundUser);
        // console.log(foundUser.password)
        // console.log(req.body.password)
        
        if (foundUser.password === req.body.password) {
           
            const privateKey = process.env.JWT_PASSWORD || "something"
            // console.log(privateKey)
            jwt.sign({ id: foundUser._id }, privateKey, function (err, token) {
                // console.log(token);
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


module.exports = router; 