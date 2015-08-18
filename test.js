'use strict';
var assert = require('assert');
var digitSum = require('./');

it('Should work', function () {
	assert.strictEqual(digitSum(84001), 13);
	assert.strictEqual(digitSum(12345), 15);
	assert.strictEqual(digitSum(99), 18);
	assert.strictEqual(digitSum(5), 5);
});
