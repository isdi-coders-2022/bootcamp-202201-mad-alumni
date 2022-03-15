import { someMethod } from './method_some.js';

describe('Given the function someMethod', () => {
  describe('When it receives de parameters ["red","red","red","red"] and "green"', () => {
    test('Then it should return false', () => {
      const arrayRed = ['red', 'red', 'red', 'red'];
      const green = 'green';
      expect(someMethod(arrayRed, green)).toBe(false);
    });
  });
});

describe('Given the function someMethod', () => {
  describe('When it receives de parameters ["red","red","green","red"] and "green"', () => {
    test('Then it should return true', () => {
      const arrayRed = ['red', 'red', 'green', 'red'];
      const green = 'green';
      expect(someMethod(arrayRed, green)).toBe(true);
    });
  });
});
