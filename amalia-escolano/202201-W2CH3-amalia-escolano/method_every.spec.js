import { everyMethod } from './method_every.js';

describe('Given the function everyMethod', () => {
  describe('When it receives de parameters ["green","green","green","green"] and "green"', () => {
    test('Then it should return true', () => {
      const arrayGreen = ['green', 'green', 'green', 'green'];
      const green = 'green';
      expect(everyMethod(arrayGreen, green)).toBe(true);
    });
  });
});

describe('Given the function everyMethod', () => {
  describe('When it receives de parameters ["red","red","green","red"] and "green"', () => {
    test('Then it should return false', () => {
      const arrayMix = ['red', 'red', 'green', 'red'];
      const green = 'green';
      expect(everyMethod(arrayMix, green)).toBe(false);
    });
  });
});
