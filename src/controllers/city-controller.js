const { CityService } = require("../services/index");

const cityService = new CityService();

/*
 * POST
 * data -> req.body
 */
const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully created a city.",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in city controller", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed, Not created a city",
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
    const city = await cityService.deleteCity(req.params.id);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully deleted a city.",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in city controller", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed, Not deleted a city",
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
    const city = await cityService.updateCity(req.params.id, req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully updated a city.",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in city controller", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed, Not updated a city",
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
    const city = await cityService.getCity(req.params.id);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully fetched a city.",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in city controller", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed, Not get a city data",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const cities = await cityService.getAllCities(req.query);
    return res.status(201).json({
      data: cities,
      success: true,
      message: "Successfully fetched all cities.",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in city controller", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed, Not get a city data",
      err: error,
    });
  }
};
module.exports = { create, destroy, update, get, getAll };
