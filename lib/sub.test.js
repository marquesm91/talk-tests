const sub = require('./sub');

it('test sub 1 - 3 equals -2', () => {
  expect(sub(1, 3)).toEqual(-2);
});

it('test sub 1 - 4 equals -3', () => {
  expect(sub(1, 4)).toEqual(-3);
});