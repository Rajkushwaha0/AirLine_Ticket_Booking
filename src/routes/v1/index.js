const express = require("express");
const CityController = require("../../controllers/city-controller");
const AirportController = require("../../controllers/airport-controller");
const FlightController = require("../../controllers/flight-controller");
const router = express.Router();

//city
router.post("/city", CityController.create);
router.post("/cities", CityController.createMany);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.get("/city/airports/:cityId", CityController.getAllAirportByCity);
router.patch("/city/:id", CityController.update);

//airport
router.post("/airport", AirportController.create);
router.get("/airport/:id", AirportController.get);
router.delete("/airport/:id", AirportController.destroy);
router.patch("/airport/:id", AirportController.update);

//flights
router.post("/flights", FlightController.create);
router.get("/flights/:id", FlightController.get);
router.get("/flights", FlightController.getAll);

//export
module.exports = router;
