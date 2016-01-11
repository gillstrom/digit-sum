import test from 'ava';
import m from './';

test('Should work', t => {
	t.is(m(84001), 13);
	t.is(m(12345), 15);
	t.is(m(99), 18);
	t.is(m(5), 5);
});
