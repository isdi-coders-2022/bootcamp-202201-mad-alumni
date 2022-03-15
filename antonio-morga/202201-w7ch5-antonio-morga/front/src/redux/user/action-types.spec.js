import { actionTypes } from './action-types';

describe('Given the constant actionTypes', () => {
  test('It should have a number of defined action types', () => {
    expect(actionTypes.login).toBeDefined();
    expect(actionTypes.logout).toBeDefined();
    expect(actionTypes.updateUser).toBeDefined();
  });
});
