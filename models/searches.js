const axios = require("axios");

class Searches {
  history = ["Navojoa", "Pueblo mayo", "ETC"];
  constructor() {
    //
  }

  async city(place = "") {
    await axios
      .get(
        "https://api.mapbox.com/geocoding/v5/mapbox.places/-104.74381455742045,30.40003932335661.json?language=es&limit=1&access_token=pk.eyJ1IjoiZWxpdWQxMDEzIiwiYSI6ImNreTdwN2prejEzaXUycG9hZTFiNTMxM3QifQ.YTpNYV47pBqYEP7GTD4E6g"
      )
      .then((res) => console.log(res.data))
      .catch((e) => {
        console.log(e);
      });
    return []; //retornar lugares que coincidan
  }
}

module.exports = Searches;
