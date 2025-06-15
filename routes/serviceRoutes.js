const express = require("express");
const router = express.Router();
const { upload } = require("../config/cloudinary");
const {
  createService,
  getServices,
} = require("../controllers/serviceController");

router.get("/", getServices);

router.post(
  "/",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "workImage", maxCount: 1 },
  ]),
  createService
);

module.exports = router;
