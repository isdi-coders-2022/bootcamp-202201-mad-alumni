import { useDispatch } from 'react-redux';
import * as action from './action-creators';

jest.mock('react-redux');

describe('Given the actions in action-creators', () => {
  const dispatch = jest.fn();
  const mockId = '1234567';
  beforeAll(() => {
    useDispatch.mockReturnValue(dispatch);
  });
  describe('When calling action.addFriend with an id', () => {
    test('Then the dispatch function should be called', () => {
      action.addFriend(mockId);
      expect(dispatch).toHaveBeenCalled();
    });
  });
  describe('When calling action.addEnemy with an id', () => {
    test('Then the dispatch function should be called', () => {
      action.addEnemy(mockId);
      expect(dispatch).toHaveBeenCalled();
    });
  });
  describe('When calling action.getAllUsers', () => {
    test('Then the dispatch function should be called', () => {
      action.getAllUsers();
      expect(dispatch).toHaveBeenCalled();
    });
  });
  describe('When calling action.getAllFriends', () => {
    test('Then the dispatch function should be called', () => {
      action.getAllFriends();
      expect(dispatch).toHaveBeenCalled();
    });
  });
  describe('When calling action.getAllEnemies', () => {
    test('Then the dispatch function should be called', () => {
      action.getAllEnemies();
      expect(dispatch).toHaveBeenCalled();
    });
  });
  describe('When calling action.update', () => {
    test('Then the dispatch function should be called', () => {
      action.update();
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
