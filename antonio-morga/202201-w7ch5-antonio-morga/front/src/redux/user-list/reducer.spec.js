import { userListReducer } from './reducer';

const action = {
  getAllUsers: {
    type: '@userList/getAllUsers',
    payload: [{}, {}, {}],
  },
  getAllFriends: {
    type: '@userList/getAllFriends',
    payload: [{}, {}],
  },
  getAllEnemies: {
    type: '@userList/getAllEnemies',
    payload: [{}],
  },
};

const mockInitialState = [];

describe('Given the function reducer', () => {
  describe('When calling it with a action.getAllUsers as aparameter', () => {
    test('Then it should return an updated state', () => {
      const updatedState = userListReducer(
        mockInitialState,
        action.getAllUsers
      );
      expect(updatedState).toHaveLength(3);
    });
  });
  describe('When calling it with a action.getAllFriends as aparameter', () => {
    test('Then it should return an updated state', () => {
      const updatedState = userListReducer(
        mockInitialState,
        action.getAllFriends
      );
      expect(updatedState).toHaveLength(2);
    });
  });
  describe('When calling it with a action.getAllEnemies as aparameter', () => {
    test('Then it should return an updated state', () => {
      const updatedState = userListReducer(
        mockInitialState,
        action.getAllEnemies
      );
      expect(updatedState).toHaveLength(1);
    });
  });
});
