import { useDispatch } from 'react-redux';
import * as action from './action-creators';
import { actionTypes } from './action-types';

jest.mock('react-redux');

const mockUser = { userName: 'pepe' };

describe('Given the functions in action-creators', () => {
  const dispatch = jest.fn();
  beforeAll(() => {
    useDispatch.mockReturnValue(dispatch);
  });
  describe('when calling action.login', () => {
    test('Then it call the dispatch function', () => {
      action.login(mockUser);
      expect(dispatch).toHaveBeenCalled();
    });
  });
  describe('when calling action.logout', () => {
    test('Then it should return an action type object', () => {
      expect(action.logout(mockUser)).toEqual({
        type: actionTypes.logout,
        payload: mockUser,
      });
    });
  });
  describe('when calling action.updateUser', () => {
    test('Then it call the dispatch function', () => {
      action.updateUser(mockUser);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
