import { actionTypes } from './action-types';

describe('Given the constant actionTypes', () => {
  test('It should have the following properties', () => {
    expect(actionTypes.addTask).toBeDefined();
    expect(actionTypes.deleteTask).toBeDefined();
    expect(actionTypes.updateTask).toBeDefined();
  });
});
