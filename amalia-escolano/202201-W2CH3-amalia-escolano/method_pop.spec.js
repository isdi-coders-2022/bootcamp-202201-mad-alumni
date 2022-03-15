import { popMethod } from './method_pop.js';

describe('Given the function popMethod', () => {
  describe('When it receives de parameters [1,2,3,4,5]', () => {
    test('Then it should return [1,2,3,4]', () => {
      const arrayNumbers = [1, 2, 3, 4, 5];

      expect(popMethod(arrayNumbers)).toEqual([1, 2, 3, 4]);
    });
  });
});
