import { mapMethod } from './method_map.js';

describe('Given the function mapMethod', () => {
  describe('When it receives de parameters [1,2,3,4] and "1"', () => {
    test('Then it should return [2,3,4,5]', () => {
      const arrayNumbers = [1, 2, 3, 4];
      const numberToAdd = 1;
      expect(mapMethod(arrayNumbers, numberToAdd)).toEqual([2, 3, 4, 5]);
    });
  });
});
