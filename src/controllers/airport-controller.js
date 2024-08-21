const { AirportService } = require("../services/index");

const airportService = new AirportService();

/*
 * POST
 * data -> req.body
 */
const create = async (req, res) => {
  try {
    const airport = await airportService.createAirport(req.body);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Successfully created a airport.",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in airport controller", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed, Not created a airport",
      err: error,
    });
  }
};

/**
 * DELETE
 * -> city/:id
 */
const destroy = async (req, res) => {
  try {
    const airport = await airportService.deleteAirport(req.params.id);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Successfully deleted a airport.",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in airport controller", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed, Not deleted a airport",
      err: error,
    });
  }
};

/**
 * PATCH
 * city/:id && data -> req.body
 */
const update = async (req, res) => {
  try {
    const airport = await airportService.updateAirport(req.params.id, req.body);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Successfully updated a airport.",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in airport controller", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed, Not updated a airport",
      err: error,
    });
  }
};

/**
 * GET
 * -> city/:id
 */
const get = async (req, res) => {
  try {
    const airport = await airportService.getAirport(req.params.id);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Successfully fetched a airport.",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in airport controller", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed, Not get a airport data",
      err: error,
    });
  }
};

module.exports = { create, destroy, update, get };
