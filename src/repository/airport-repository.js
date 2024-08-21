const { Airport } = require("../models/index");

class AirportRepository {
  async createAirport({ name, address, city_id }) {
    try {
      const airport = await Airport.create({
        name,
        address,
        city_id,
      });
      return airport;
    } catch (error) {
      console.log("something went wrong in airport repository log");
      throw { error };
    }
  }
  async deleteAirport(airportId) {
    try {
      await Airport.destroy({
        where: {
          id: airportId,
        },
      });
      return true;
    } catch (error) {
      console.log("something went wrong in airport repository log");
      throw { error };
    }
  }
  async updateAirport(airportId, data) {
    try {
      const airport = await Airport.findByPk(airportId);
      if (data.name != null) airport.name = data.name;
      if (data.city_id != null) airport.city_id = data.city_id;
      if (data.address != null) airport.address = data.address;
      await airport.save();
      return airport;
    } catch (error) {
      console.log("something went wrong in airport repository log");
      throw { error };
    }
  }
  async getAirport(airportId) {
    try {
      const airport = await Airport.findByPk(airportId);
      return airport;
    } catch (error) {
      console.log("something went wrong in airport repository log");
      throw { error };
    }
  }
}

module.exports = AirportRepository;
