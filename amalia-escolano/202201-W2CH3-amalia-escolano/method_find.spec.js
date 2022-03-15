import { findMethod } from './method_find.js';

describe('Given the function findMethod', () => {
  describe('When it receives de parameters ["green","green","blue","green"] and "blue"', () => {
    test('Then it should return blue', () => {
      const arrayColors = ['green', 'green', 'blue', 'green'];
      const blue = 'blue';
      expect(findMethod(arrayColors, blue)).toBe('blue');
    });
  });
});
