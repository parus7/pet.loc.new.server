const express = require("express");
const emplController = require("../controllers/EmployeesController");
const logController = require("../controllers/loginController");

const router = express.Router();

router.get("/", emplController.getAllEmployees);

router.post("/", emplController.postAllEmployees);

router.get("/arch", emplController.getAllArch);

router.post("/arch", emplController.postAllArch);

router.post("/asset", emplController.postAsset);

router.delete("/asset/:fileName", emplController.deleteAsset);

router.post("/login", logController);

module.exports = router;
