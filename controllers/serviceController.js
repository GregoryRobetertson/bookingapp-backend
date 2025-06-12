const Services = require("../models/Service.js");

const createService = async (req, res) => {
  try {
    const service = await Service.Create(req.body);
    res.status(201).json(service);
  } catch (error) {
    res.status(400).json(message: error.message );
  }
};

const getService = async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json(services)
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}
module.exports = {createService, getService};

