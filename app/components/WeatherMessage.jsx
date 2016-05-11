var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h5>It is {temp} in {location}</h5>
    </div>
  );
};

module.exports = WeatherMessage;
