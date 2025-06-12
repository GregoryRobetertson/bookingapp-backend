const express = require("express");
const router = express.Router();
const {
  createService,
  getServices,
} = require("../controllers/serviceController");
router.Post("/", createService);
router.Get("/", getServices);
module.exports = router;
