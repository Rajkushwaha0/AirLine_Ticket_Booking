const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");
class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }

  /**
   * flightNumber,
   * airplaneId,
   * departureAirportId,
   * arrivalAirportId,
   * arrivalTime,
   * departureTime,
   * price,
   * totalSeats
   */
  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw {
          error: "Arrival time can not be less than or same as departure time",
        };
      }
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("something went wrong at flight service layer");
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await this.flightRepository.getFlight(flightId);
      return flight;
    } catch (error) {
      console.log("something went wrong at flight service layer");
      throw { error };
    }
  }

  async getAllFlight(filter) {
    try {
      const flight = await this.flightRepository.getAllFlight(filter);
      return flight;
    } catch (error) {
      console.log("something went wrong at flight service layer");
      throw { error };
    }
  }
}

module.exports = FlightService;
