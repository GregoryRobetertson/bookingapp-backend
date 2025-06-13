const Services = require("../models/Service.js");

const createService = async (req, res) => {
  try {
    const { name, type, description, price, image, workimage } = req.body;

    const image = req.files?.["image"]?.[0];
    const workImage = req.files?.["workImage"]?.[0];

    const newService = new service {
      name,
      type,
      description,
      price,
      imageUrl: image?.path,       
      workImageUrl: workImage?.path,
    }
    
    await newService.save();
    res.status(201).json({
      message: "Service created successfully",
      service: newService,
    });
  } catch (error) {
    res.status(400).json({ message: "Error creating service" });
  }
};

const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
module.exports = { createService, getServices };
