const { Airport } = require("../models/index");

class AirportRepository {
  async createAirport({ name, address, city_id }) {
    try {
      const city = await Airport.create({
        name,
        address,
        city_id,
      });
      return city;
    } catch (error) {
      console.log("something went wrong in airport repository log");
      throw { error };
    }
  }
  async deleteAirport(cityId) {
    try {
      await Airport.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("something went wrong in airport repository log");
      throw { error };
    }
  }
  async updateAirport(cityId, data) {
    try {
      const airport = await Airport.findByPk(cityId);
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
  async getAirport(cityId) {
    try {
      const city = await Airport.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("something went wrong in airport repository log");
      throw { error };
    }
  }
}

module.exports = AirportRepository;
