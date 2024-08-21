const { AirportRepository } = require("../repository/index");

class AirportService {
  constructor() {
    this.airportRepository = new AirportRepository();
  }

  async createAirport(data) {
    try {
      const airport = await this.airportRepository.createAirport(data);
      return airport;
    } catch (error) {
      console.log("something went wrong at airport service layer");
      throw { error };
    }
  }

  async deleteAirport(cityId) {
    try {
      const airport = await this.airportRepository.deleteAirport(cityId);
      return airport;
    } catch (error) {
      console.log("something went wrong at airport service layer");
      throw { error };
    }
  }

  async updateAirport(cityId, data) {
    try {
      const airport = await this.airportRepository.updateAirport(cityId, data);
      return airport;
    } catch (error) {
      console.log("something went wrong at airport service layer");
      throw { error };
    }
  }

  async getAirport(cityId) {
    try {
      const airport = await this.airportRepository.getAirport(cityId);
      return airport;
    } catch (error) {
      console.log("something went wrong at airport service layer");
      throw { error };
    }
  }
}

module.exports = AirportService;
