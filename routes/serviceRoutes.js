const express = require("express");
const router = express.Router();
const { upload } = require("../config/cloudinary");
const {
  createService,
  getServices,
} = require("../controllers/serviceController");
router.post("/", createService);
router.get("/", getServices);
router.post("/upload", upload.array("image", 3), (req, res) => {
  res.json({ imageUrl: req.file.path });
});
module.exports = router;
