const { where } = require("sequelize");
const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("something went wrong in repository log");
      throw { error };
    }
  }
  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("something went wrong in repository log");
      throw { error };
    }
  }

  async updateCity(
    cityId,
    data // data->  {name : updated_name}
  ) {
    try {
      //this also works but does not return updated city object;
      // const city = await City.update(data, {
      //   where: {
      //     id: cityId,
      //   },
      // });

      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.log("something went wrong in repository log");
      throw { error };
    }
  }
  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("something went wrong in repository log");
      throw { error };
    }
  }

  async getAllCities() {
    try {
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("something went wrong in repository log");
      throw { error };
    }
  }
}

module.exports = CityRepository;
