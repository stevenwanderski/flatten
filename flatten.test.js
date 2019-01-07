const flatten = require('./flatten');

test('[[1, 2, [3]], 4] returns [1, 2, 3, 4]', () => {
  const array = [[1, 2, [3]], 4];
  expect(flatten(array)).toEqual([1, 2, 3, 4]);
});

test('non-array returns null', () => {
  expect(flatten(null)).toBe(null);
});
