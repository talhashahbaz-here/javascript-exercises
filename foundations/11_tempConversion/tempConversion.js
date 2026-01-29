const convertToCelsius = function(temp) {
  let inCel = (temp - 32) * (5 / 9)
  if (inCel === 0) return 0

  return Number(inCel.toFixed(1))
};

const convertToFahrenheit = function(temp) {
  let inFar = temp * (9 / 5) + 32 
  if (inFar === 0) return 0
  return Number(inFar.toFixed(1))
};

console.log(convertToCelsius(32))
console.log(convertToCelsius(97))
console.log(convertToCelsius(100))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
