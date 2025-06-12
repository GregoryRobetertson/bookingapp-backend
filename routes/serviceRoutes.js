const express = require("express");
const router = express.Router();
const {
  createService,
  getServices,
} = require("../controllers/serviceController");
router.Post("/", createService);
router.Get("/", getServices);
router.post("/upload", upload.single("image"), (req, res) => {
  res.json({ imageUrl: req.file.path });
});
module.exports = router;
