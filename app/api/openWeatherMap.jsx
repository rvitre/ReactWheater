var axios = require('axios');

const API_KEY = 'a361a3fabb1a80c8bb1311edfaae7e8f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&unit=celsius`;


module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${ROOT_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
};
