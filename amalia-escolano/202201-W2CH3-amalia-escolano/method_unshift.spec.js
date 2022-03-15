import { unShiftMethod } from './method_unShift.js';

describe('Given the function unShiftMethod', () => {
  describe('When it receives de parameters [2,3,4,5]', () => {
    test('Then it should return [1,2,3,4,5]', () => {
      const arrayNumbers = [2, 3, 4, 5];
      const numberToAdd = 1;
      expect(unShiftMethod(arrayNumbers, numberToAdd)).toEqual([1, 2, 3, 4, 5]);
    });
  });
});
