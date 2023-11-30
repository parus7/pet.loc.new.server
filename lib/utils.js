const fs = require("fs");
const path = require('path');
const busboy = require('busboy');

const getData = (dbName) => {
  return JSON.parse(fs.readFileSync(dbName, 'utf8'))
 }

const saveToDatabase = (dbName, DB) => {
  fs.writeFileSync(dbName, JSON.stringify(DB, null, 2), {
    encoding: "utf-8",
  });
};

const saveImg = (req, res) => {
  const bb = busboy({ headers: req.headers });
    bb.on('file', (name, file, info) => {
      const saveTo = path.join(__dirname, '../assets/img', info.filename);
      file.pipe(fs.createWriteStream(saveTo));
    });
    bb.on('close', () => {
      res.writeHead(200, { 'Connection': 'close' });
      res.end(`That's all folks!`);
    });
    req.pipe(bb);
    return;
  }

const delImg = (fileName) => {
  const fullName = path.join(__dirname, '../assets/img', fileName)
  fs.unlink(fullName,(err) => {
    if (err) throw err;
    // console.log(`${fileName} was deleted`);
  });
  return `${fileName} was deleted`
};

module.exports = { getData, saveToDatabase, saveImg, delImg };