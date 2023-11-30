// const express = require('express');
const queryDb = require("./../../../lib/queresDb");
const imgUtils = require("./../../../lib/utils");
const fs = require("fs");

const getAllEmployees = (req, res) => {
  // console.log(queryDb.getAll('Empl'))
  res.send({status: "Ok", data: queryDb.getAll('Empl')});
};

const postAllEmployees = (req, res) => {
  if (req.user) { 
  res.send({status: 200, data: queryDb.postAll('Empl', req.body)});
  // queryDb.postAll("Empl", req.body);
    // res.send({ status: 200, data: req.user });
    // res.status(200).json({ message: "Data saved." })
    
  } else {
    console.log("Not authorized!");
    res.status(401).json({ message: "Not authorized! Data not save!" });
  }
}

const getAllArch = (req, res) => {
  res.send({status: "Ok", data: queryDb.getAll('Arch')});
  // res.send({ status: "Ok", data: "req queryDb Arch" });
};

const postAllArch = (req, res) => {
  if (req.user) {
    res.send({ status: "Ok", data: queryDb.postAll('Arch', req.body) });
    // res.send({ status: "Ok", data: "Data save" });
  } else {
    console.log("Not authorized!")
    res.status(401).json({ message: "Not authorized! Data not save!" })
  }
}

const postAsset = (req, res) => {
  // binary data !!!
  //  verife type data  jpg jpeg, png, svg,
  //  verife size data   > 75kb
  //    if (req.user) {
  //   res.send({ status: "Ok", data: imgUtils.saveImg(req.body) });
  // } else {
  //   console.log("Not authorized!")
  //   res.status(401).json({ message: "Not authorized! Data not save!" })
  // }
  // res.send({ status: "Ok", data: "Data save" });
  imgUtils.saveImg(req, res)
}
const deleteAsset = (req, res) => {
  console.log(' I WORK!!!!')
  res.send({ status: "Ok", data: "Data delete" });
}


module.exports = { getAllEmployees, postAllEmployees, getAllArch, postAllArch, postAsset, deleteAsset };

// need verify income data