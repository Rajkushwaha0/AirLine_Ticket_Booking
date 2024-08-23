const { Airplane } = require("../models/index");

class AirplaneRepository {
  async getAirplane(id) {
    try {
      const airplane = await Airplane.findByPk(id);
      return airplane;
    } catch (error) {
      console.log("something went wrong in airplane repository log");
      throw { error };
    }
  }
}

module.exports = AirplaneRepository;
