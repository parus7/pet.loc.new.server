const express = require('express')
const app = express()
const v1Router = require("./v1/routes/router");
const config = require('./v1/config.json');
const crypto = require("node:crypto");
const PORT = process.env.PORT || config.port;
const tokenKey = config.tokenKey;


app.listen(PORT, () => {
  console.log(`App listen on port ${PORT}`);
});

// JWT authentification 
app.use((req, res, next) => {
  if (req.headers.authorization) {
    let tokenParts = req.headers.authorization.split(".");
    let signature = crypto
      .createHmac("SHA256", tokenKey)
      .update(`${tokenParts[0]}.${tokenParts[1]}`)
      .digest("base64");

    if (signature === tokenParts[2])
      req.user = JSON.parse(
        Buffer.from(tokenParts[1], "base64").toString("utf8")
      );
  }
  next();
});


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const jsonParser = express.json();
app.use("/v1", jsonParser, v1Router);


const urlencodedParser = express.urlencoded({ extended: false });
app.use("/v1", urlencodedParser, v1Router);

