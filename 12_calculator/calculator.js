const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	return nums.reduce((sum, currNum) => sum + currNum, 0);
};

const multiply = function(nums) {
  return nums.reduce((product, currNum) => product * currNum, 1);
};

const power = function(base, power) {
	return Math.pow(base, power);
};

const factorial = function(num) {
  let factorial = 1;

  for (let i = num; i > 1; i--) {
    factorial *= i;
  }

  return factorial;
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
