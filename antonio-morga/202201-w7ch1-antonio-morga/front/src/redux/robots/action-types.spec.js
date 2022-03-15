import { actionTypes } from './action-types';

describe('Given the constant actionTypes', () => {
  test('It should have the following properties', () => {
    expect(actionTypes.addRobot).toBeDefined();
    expect(actionTypes.deleteRobot).toBeDefined();
    expect(actionTypes.updateRobot).toBeDefined();
  });
});
