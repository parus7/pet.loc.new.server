const express = require("express");
const app = express();
const crypto = require("node:crypto");
const users = require("./users");
const path = require("node:path");
const cors = require('cors');
const config = require('./../config.json')

const host = config.host;
const port = config.port;

const tokenKey = config.tokenKey;

const corsOptions = {
  // origin: 'http://127.0.0.1:8080'
  // origin: 'http://localhost:8080'
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors(corsOptions))
// app.use(cors())

const login =  (req, res) => { 
  for (let user of users) {
    if (req.body.login === user.login && req.body.password === user.password) {
      let head = Buffer.from(
        JSON.stringify({ alg: "HS256", typ: "jwt" })
      ).toString("base64");
      let body = Buffer.from(JSON.stringify(user)).toString("base64");
      let signature = crypto
        .createHmac("SHA256", tokenKey)
        .update(`${head}.${body}`)
        .digest("base64");
        
      return res.status(200).json({
        id: user.id,
        login: user.login,
        token: `${head}.${body}.${signature}`,
      });
    }
  }

  return res.status(404).json({ message: "User not found!" });

};

// app.get("/user", (req, res) => {
//   if (req.user) return res.status(200).json(req.user);
//   else return res.status(401).json({ message: "Not authorized" });
// });
  

// const lg = (req, res) => {
//   const { body } = req;
//   res.send( body);
//   console.log("login", body);
// };

module.exports = login;
