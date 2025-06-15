const Service = require("../models/Service.js");

const createService = async (req, res) => {
  try {
    const { name, type, description, price } = req.body;

    const image = req.files?.["image"]?.[0];
    const workImage = req.files?.["workImage"]?.[0];

    const newService = new Service({
      name,
      type,
      description,
      price,
      image: image?.path || req.body.image,
      workImage: workImage?.path || req.body.workImage,
    });

    await newService.save();

    res.status(201).json({
      message: "Service created successfully",
      service: newService,
    });
  } catch (error) {
    console.error("Error creating service:", error);
    res.status(400).json({ message: "Error creating service" });
  }
};

const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { createService, getServices };
