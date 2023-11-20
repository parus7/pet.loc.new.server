// const express = require('express');
const queryDb = require("./../../../database/queresDb");

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
    console.log("Not authorized!")
    res.status(401).json({ message: "Not authorized! Data not save!" })
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
module.exports = { getAllEmployees, postAllEmployees, getAllArch, postAllArch };

// need verify income data