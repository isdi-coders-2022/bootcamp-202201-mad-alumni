import { myPush } from './metodos.js';

describe('Give the function myPush', () => {
  test('Add an element at the end of an Array', () => {
    const cars = ['volvo', 'bmw', 'ferrari'];
    expect(myPush(cars, 'mercedes')).toEqual(
      (cars[cars.length - 1] = 'mercedes')
    );
  });
});
