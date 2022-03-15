import { pushMethod } from './method_push.js';

describe('Given the function pushMethod', () => {
  describe('When it receives de parameters [1,2,3,4] and 5', () => {
    test('Then it should return [1,2,3,4,5]', () => {
      const numbers = [1, 2, 3, 4];
      const newNumber = 5;

      expect(pushMethod(numbers, newNumber)).toEqual([1, 2, 3, 4, 5]);
    });
  });
});
