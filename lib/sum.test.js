const sum = require('./sum');

it('test sum 1 + 3 equals 4', () => {
  expect(sum(1, 3)).toEqual(4);
});

it('test sum 1 + 4 equals 5', () => {
  expect(sum(1, 4)).toEqual(5);
});

it('test sum 1 + 5 equals 6', () => {
  expect(sum(1, 5)).toEqual(6);
});

it('test sum 3 + 7 equals 10', () => {
  expect(sum(3, 7)).toEqual(10);
});