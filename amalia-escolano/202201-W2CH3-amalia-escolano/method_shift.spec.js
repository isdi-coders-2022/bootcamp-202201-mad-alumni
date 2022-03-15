import { shiftMethod } from './method_shift.js';

describe('Given the function shiftMethod', () => {
  describe('When it receives de parameters [1,2,3,4,5]', () => {
    test('Then it should return [2,3,4,5]', () => {
      const arrayNumbers = [1, 2, 3, 4, 5];
      expect(shiftMethod(arrayNumbers)).toEqual([2, 3, 4, 5]);
    });
  });
});
