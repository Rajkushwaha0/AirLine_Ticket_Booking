const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    return res.status(201).json({
      data: flight,
      success: true,
      message: "Successfully created a flight.",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in flight controller", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed, Not created a flight",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const flight = await flightService.getFlight(req.params.id);
    return res.status(201).json({
      data: flight,
      success: true,
      message: "Successfully created a flight.",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in flight controller", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed, Not created a flight",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const flight = await flightService.getAllFlight(req.query);
    return res.status(201).json({
      data: flight,
      success: true,
      message: "Successfully created a flight.",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in flight controller", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed, Not created a flight",
      err: error,
    });
  }
};

module.exports = { create, get, getAll };
