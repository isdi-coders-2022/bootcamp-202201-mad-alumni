import { todoReducer } from './todo-reducer';
import * as action from './action-creators';
import { actionTypes } from './action-types';

jest.mock('./action-creators');
const mockTask = { id: 1, title: 'do sth', isComplete: false };
let mockState = [];

describe('Given the function todoReducer', () => {
  beforeEach(() => {
    mockState = [
      { id: 123, title: 'create to-do list', isComplete: false },
      { id: 456, title: 'test to-do list', isComplete: false },
    ];
  });
  describe('When calling it with the addTask action as a parameter', () => {
    test('Then it should return a new state', () => {
      action.addTask.mockReturnValue({
        type: actionTypes.addTask,
        payload: mockTask,
      });
      expect(todoReducer(mockState, action.addTask(mockTask))).toEqual([
        { id: 123, title: 'create to-do list', isComplete: false },
        { id: 456, title: 'test to-do list', isComplete: false },
        { id: 1, title: 'do sth', isComplete: false },
      ]);
    });
  });
  describe('When calling it with the deleteTask action as a parameter', () => {
    test('Then it should return a new state', () => {
      action.deleteTask.mockReturnValue({
        type: actionTypes.deleteTask,
        payload: { ...mockTask, id: 456 },
      });
      expect(
        todoReducer(mockState, action.deleteTask({ ...mockTask, id: 456 }))
      ).toEqual([{ id: 123, title: 'create to-do list', isComplete: false }]);
    });
  });
  describe('When calling it with the updateTask action as a parameter', () => {
    test('Then it should return a new state', () => {
      action.updateTask.mockReturnValue({
        type: actionTypes.updateTask,
        payload: { ...mockTask, id: 456, isComplete: true },
      });
      expect(
        todoReducer(mockState, action.updateTask({ ...mockTask, id: 456 }))
      ).toEqual([
        { id: 123, title: 'create to-do list', isComplete: false },
        { id: 456, title: 'do sth', isComplete: true },
      ]);
    });
  });
});
