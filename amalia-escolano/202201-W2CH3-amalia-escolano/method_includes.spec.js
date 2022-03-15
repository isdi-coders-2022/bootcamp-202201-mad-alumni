import { includesMethod } from './method_includes.js';

describe('Given the function includesMethod', () => {
  describe('When it receives de parameters ["red","red","green","red"] and "green"', () => {
    test('Then it should return true', () => {
      const arrayColors = ['red', 'red', 'green', 'red'];
      const colorToFind = 'green';
      expect(includesMethod(arrayColors, colorToFind)).toBe(true);
    });
  });
});
