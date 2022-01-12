const axios = require("axios");
const { config } = require("../config");

class Searches {
  history = ["Navojoa", "Pueblo mayo", "ETC"];
  constructor() {
    //
  }

  async city(place = "") {
    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json `,
        params: {
          access_token: config.token,
        },
      });
      const res = await instance.get();
      return res.data.features.map((place) => ({
        id: place.id,
        name: place.place_name,
        lng: place.center[0],
        lat: place.center[1],
      }));
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Searches;
