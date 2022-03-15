import { robotsReducer } from './robots-reducer';
import * as action from './action-creators';
import { actionTypes } from './action-types';

jest.mock('./action-creators');
const mockRobot = { _id: 1, robotName: 'Jhonny Slow' };
let mockState = [];

describe('Given the function robotsReducer', () => {
  beforeEach(() => {
    mockState = [
      { _id: 123, robotName: 'Jhonny Money' },
      { _id: 456, robotName: 'Jhonny Fast' },
    ];
  });
  describe('When calling it with the addRobot action as a parameter', () => {
    test('Then it should return a new state with an additional robot', () => {
      action.addRobot.mockReturnValue({
        type: actionTypes.addRobot,
        payload: mockRobot,
      });
      expect(robotsReducer(mockState, action.addRobot(mockRobot))).toEqual([
        ...mockState,
        mockRobot,
      ]);
    });
  });
  describe('When calling it with the deleteRobot action as a parameter', () => {
    test('Then it should return a new state', () => {
      action.deleteRobot.mockReturnValue({
        type: actionTypes.deleteRobot,
        payload: { ...mockRobot, _id: 456 },
      });
      expect(
        robotsReducer(mockState, action.deleteRobot({ ...mockRobot, _id: 456 }))
      ).toEqual([{ _id: 123, robotName: 'Jhonny Money' }]);
    });
  });
  describe('When calling it with the updateRobot action as a parameter', () => {
    test('Then it should return a new state', () => {
      action.updateRobot.mockReturnValue({
        type: actionTypes.updateRobot,
        payload: { ...mockRobot, _id: 456, robotName: 'Jhonny Slow' },
      });
      expect(
        robotsReducer(mockState, action.updateRobot({ ...mockRobot, _id: 456 }))
      ).toEqual([
        { _id: 123, robotName: 'Jhonny Money' },
        { _id: 456, robotName: 'Jhonny Slow' },
      ]);
    });
  });
});
