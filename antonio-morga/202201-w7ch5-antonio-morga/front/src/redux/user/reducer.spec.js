import { userReducer } from './reducer';

const initialState = {
  userName: '',
  birthDate: '',
  image: '',
  friends: [],
  enemies: [],
};

const loginAction = {
  type: '@user/login',
  payload: {
    userName: 'Pepe',
    birthDate: '23-12-1997',
    image: 'image',
    friends: [],
    enemies: [],
  },
};

const updateUserAction = {
  type: '@user/update',
  payload: {
    userName: 'Pepe',
    birthDate: '23-12-1997',
    image: 'image',
    friends: [],
    enemies: [],
  },
};

const logoutAction = { type: '@user/logout' };

describe('given the function userReducer', () => {
  describe('When calling it with a login action as a parameter', () => {
    test('Then it should return an updated state', () => {
      const updatedState = userReducer(initialState, loginAction);
      expect(updatedState).toEqual(loginAction.payload);
    });
  });
  describe('When calling it with a logout action as a parameter', () => {
    test('Then it should return an updated state', () => {
      const updatedState = userReducer(initialState, logoutAction);
      expect(updatedState).toEqual(initialState);
    });
  });
  describe('When calling it with a updateUser action as a parameter', () => {
    test('Then it should return an updated state', () => {
      const updatedState = userReducer(initialState, updateUserAction);
      expect(updatedState).toEqual(updateUserAction.payload);
    });
  });
});
