import * as action from './action-creators';
import * as api from '../../services/api';

jest.mock('react-redux');
jest.mock('../../services/api');
const mockTask = { id: 1, title: 'do sth', isComplete: false };

let dispatch;

describe('Given the function loadTasks', () => {
  beforeEach(() => {
    dispatch = jest.fn();
  });
  describe('When calling it with a task as a parameter', () => {
    test('Then it should return an action object', async () => {
      api.getTasks.mockResolvedValue(mockTask);

      await action.loadTasks(mockTask)(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe('Given the function addTask', () => {
  beforeEach(() => {
    dispatch = jest.fn();
  });
  describe('When calling it with a task as a parameter', () => {
    test('Then it should return an action object', async () => {
      api.addTask.mockResolvedValue(mockTask);

      await action.addTask(mockTask)(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe('Given the function deleteTask', () => {
  beforeEach(() => {
    dispatch = jest.fn();
  });
  describe('When calling it with a task as a parameter', () => {
    test('Then it should return an action object', async () => {
      api.deleteTask.mockResolvedValue();

      await action.deleteTask(mockTask)(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe('Given the function updateTask', () => {
  beforeEach(() => {
    dispatch = jest.fn();
  });
  describe('When calling it with a task as a parameter', () => {
    test('Then it should return an action object', async () => {
      api.updateTask.mockResolvedValue(mockTask);

      await action.updateTask(mockTask)(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
