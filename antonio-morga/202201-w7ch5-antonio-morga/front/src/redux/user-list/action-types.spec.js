import { actionTypes } from './action-types';

describe('given the constant actionTypes', () => {
  test('Then it should have a number of action types as properties', () => {
    expect(actionTypes.getAllUsers).toBeDefined();
    expect(actionTypes.getAllFriends).toBeDefined();
    expect(actionTypes.getAllEnemies).toBeDefined();
  });
});
