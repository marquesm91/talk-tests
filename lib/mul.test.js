const mul = require('./mul');

test('test mul 2 * 2 equals 4', () => {
  expect(mul(2, 2)).toEqual(4);
});

test('test mul 2 * 3 equals 6', () => {
  expect(mul(2, 3)).toEqual(6);
});