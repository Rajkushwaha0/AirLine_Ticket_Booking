const { Op } = require("sequelize");
const { City, Airport } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("something went wrong in city repository log");
      throw { error };
    }
  }

  async createManyCity(data) {
    try {
      const cities = await City.bulkCreate(data, { returning: true });
      return cities;
    } catch (error) {
      console.log("something went wrong in city repository log");
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
      console.log("something went wrong in city repository log");
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
      console.log("something went wrong in city repository log");
      throw { error };
    }
  }
  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("something went wrong in city repository log");
      throw { error };
    }
  }

  async getAllCities(filter) {
    //filter can be empty
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("something went wrong in city repository log");
      throw { error };
    }
  }

  async getAllAirportByCity(cityId) {
    try {
      const city = await City.findOne({
        where: { id: cityId },
        include: [
          {
            model: Airport,
            as: "Airports",
          },
        ],
      });
      return city.Airports;
    } catch (error) {
      console.log("something went wrong in city repository log");
      throw { error };
    }
  }
}

module.exports = CityRepository;
