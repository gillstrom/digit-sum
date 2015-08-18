'use strict';
var numberIsInteger = require('number-is-integer');
var isPositive = require('is-positive');
var mathSum = require('math-sum');
var numArr = require('num-arr');

module.exports = function (val) {
	if (!numberIsInteger(val) || !isPositive(val)) {
		throw new TypeError('Expected a positive number');
	}

	return mathSum(numArr(val));
};
