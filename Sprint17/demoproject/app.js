require("dotenv").config();
require("./config/database").connect();
const User = require("./model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("./middleware/auth");
const express = require("express");

const app = express();

app.use(express.json());
app.post("/register", async (req, res) => {
    try {
        const { shortname,firstname, lastname, email, password } = req.body;
        if (!(shortname && email && password && firstname && lastname)) {
            res.status(400).send("All input is required");
          }
        const existsUser = await User.findOne({email});
        if (existsUser) {
            return res.status(409).send("User Already Exist. Please Login");
        } 
        encryptedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            shortname,
            firstname,
            lastname,
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            password: encryptedPassword,
          });
      
         const token =  jwt.sign(
            {user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn:"2h",
            }
         );
         user.token = token;
         res.status(201).json(user);

    } catch (err) {
        console.log(err);
    }
    });
    
    // Login
    app.post("/login", async(req, res) => {
    try {
        const { email, password } = req.body;
        if (!(email && password)) {
            res.status(400).send("All input is required");
          }
          const user = await User.findOne({ email });
          if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign(
              { user_id: user._id, email },
              process.env.TOKEN_KEY,
              {
                expiresIn: "2h",
              }
            );
            user.token = token;

            // user
            res.status(200).json(user);
            } else {
            res.status(400).send("Invalid Credentials");
        }
      
    } catch (err) {
        console.log(err);
    }
    });

    app.post("/welcome", auth, (req, res) => {
        res.status(200).send("Welcome SoftServians!");
      });
      
    

// Logic goes here

module.exports = app;
