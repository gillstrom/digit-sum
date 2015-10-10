import test from 'ava';
import digitSum from './';

test('Should work', t => {
	t.is(digitSum(84001), 13);
	t.is(digitSum(12345), 15);
	t.is(digitSum(99), 18);
	t.is(digitSum(5), 5);
	t.end();
});
