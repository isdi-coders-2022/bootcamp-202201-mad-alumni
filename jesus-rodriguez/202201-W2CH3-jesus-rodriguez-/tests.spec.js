// import * as arrayMethods from './arraymethods.js';
import {
  pushArray,
  popArray,
  shiftArray,
  unShiftArray,
} from './arraymethods.js';

// const animals = ['pigs', 'goats', 'sheep'];

// Applies only to tests in this describe block

describe('Give the function pushArray', () => {
  test('add one more item at the end', () => {
    const animals = ['pigs', 'goats', 'sheep'];
    expect(pushArray(animals, 'ducks')).toEqual([
      'pigs',
      'goats',
      'sheep',
      'ducks',
    ]);
  });
  describe('Give the function popArray', () => {
    test('delete the last item at the array', () => {
      const array2 = ['pigs', 'goats', 'sheep'];

      expect(popArray(array2)).toEqual(['pigs', 'goats']);
    });
  });

  describe('Give the function shiftArray', () => {
    test('delete the first element at the array', () => {
      const array3 = ['pigs', 'goats', 'sheep'];
      expect(shiftArray(array3)).toEqual(['goats', 'sheep']);
    });
  });

  describe('Give the function unShiftArray', () => {
    test('add element on first position at the array', () => {
      const array4 = ['pigs', 'goats', 'sheep'];
      expect(unShiftArray(array4, 'test')).toEqual([
        'test',
        'pigs',
        'goats',
        'sheep',
      ]);
    });
  });
});
