const convertToCelsius = function(fah) {
  let celsius = (fah - 32) * 5 / 9;
  celsius = Math.round(celsius * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  let far = celsius * 9 / 5 + 32;
  far = Math.round(far * 10) / 10;
  return far;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
