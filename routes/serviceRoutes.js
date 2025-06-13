const express = require("express");
const router = express.Router();
const { upload } = require("../config/cloudinary");
const {
  createService,
  getServices,
} = require("../controllers/serviceController");

router.post("/", createService);
router.get("/", getServices);

// ✅ THIS IS THE MISSING ROUTE
router.post(
  "/upload",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "workimage", maxCount: 1 },
  ]),
  (req, res) => {
    const image = req.files["image"]?.[0];
    const workImage = req.files["workImage"]?.[0];

    console.log("Image uploaded:", image?.path);
    console.log("Work image uploaded:", workImage?.path);

    res.json({
      message: "Upload successful",
      imageUrl: image?.path,
      workImageUrl: workImage?.path,
    });
  }
);

module.exports = router;
