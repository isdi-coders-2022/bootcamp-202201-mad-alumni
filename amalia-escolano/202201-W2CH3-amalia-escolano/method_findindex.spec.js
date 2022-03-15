import { findIndexMethod } from './method_findindex.js';

describe('Given the function findIndexMethod', () => {
  describe('When it receives de parameters ["red","red","green","red"] and "green"', () => {
    test('Then it should return 2', () => {
      const arrayColors = ['red', 'red', 'green', 'red'];
      const colorToFind = 'green';
      expect(findIndexMethod(arrayColors, colorToFind)).toBe(2);
    });
  });
});
