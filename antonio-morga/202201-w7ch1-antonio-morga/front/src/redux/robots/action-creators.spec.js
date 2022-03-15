import * as action from './action-creators';
import * as api from '../../services/api';

jest.mock('react-redux');
jest.mock('../../services/api');
const mockRobot = { id: 1, title: 'do sth', isComplete: false };

let dispatch;

describe('Given the function loadRobots', () => {
  beforeEach(() => {
    dispatch = jest.fn();
  });
  describe('When calling it with a Robot as a parameter', () => {
    test('Then it should return an action object', async () => {
      api.getRobots.mockResolvedValue(mockRobot);

      await action.loadRobots(mockRobot)(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe('Given the function addRobot', () => {
  beforeEach(() => {
    dispatch = jest.fn();
  });
  describe('When calling it with a Robot as a parameter', () => {
    test('Then it should return an action object', async () => {
      api.addRobot.mockResolvedValue(mockRobot);

      await action.addRobot(mockRobot)(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe('Given the function deleteRobot', () => {
  beforeEach(() => {
    dispatch = jest.fn();
  });
  describe('When calling it with a Robot as a parameter', () => {
    test('Then it should return an action object', async () => {
      api.deleteRobot.mockResolvedValue();

      await action.deleteRobot(mockRobot)(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe('Given the function updateRobot', () => {
  beforeEach(() => {
    dispatch = jest.fn();
  });
  describe('When calling it with a Robot as a parameter', () => {
    test('Then it should return an action object', async () => {
      api.updateRobot.mockResolvedValue(mockRobot);

      await action.updateRobot(mockRobot)(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
