import { filterMethod } from './method_filter.js';

describe('Given the function filterMethod', () => {
  describe('When it receives de parameters ["red","green","red","green"] and "green"', () => {
    test('Then it should return ["green", "green"]', () => {
      const arrayColors = ['red', 'green', 'red', 'green'];
      const green = 'green';
      expect(filterMethod(arrayColors, green)).toEqual(['green', 'green']);
    });
  });
});
