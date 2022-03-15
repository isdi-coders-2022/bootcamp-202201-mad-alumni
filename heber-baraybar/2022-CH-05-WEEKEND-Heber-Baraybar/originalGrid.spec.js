import { originalGrid } from './originalGrid.js';

describe('Creating first grid before filter', () => {
  test('Loop thru columns and rows', () => {
    expect(originalGrid(row, column)).toBe(originalGrid);
  });
});
