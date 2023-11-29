const fs = require("fs");

const getData = (dbName) => {
  return JSON.parse(fs.readFileSync(dbName, 'utf8'))
 }

const saveToDatabase = (dbName, DB) => {
  fs.writeFileSync(dbName, JSON.stringify(DB, null, 2), {
    encoding: "utf-8",
  });
};

const saveImg = (img) => {
  // binary data
  // fs.writeFileSync(dbName, img , {
  //   encoding: "utf-8",
  // });
};

const delImg = (img) => {
  // try catch
  // fs.writeFileSync(dbName, JSON.stringify(DB, null, 2), {
  //   encoding: "utf-8",
  // });
};

module.exports = { getData, saveToDatabase, saveImg, delImg };