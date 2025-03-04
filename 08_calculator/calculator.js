const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((total, curr) => total + curr, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((total, curr) => total * curr);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	let produto = 1;
  for (let i = num; i > 0; i--) {
    produto *= i;
  }
  return produto;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
