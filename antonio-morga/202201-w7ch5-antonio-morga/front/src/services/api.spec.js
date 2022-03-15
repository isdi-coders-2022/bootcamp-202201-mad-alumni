import axios from 'axios';
import * as api from './api';

jest.mock('axios');

const mockUser = {
  userName: 'Cris',
  password: '1234',
  birthDate: '2022-02-27',
  image: 'image',
  friends: [],
  enemies: [],
};

const mockId = '123456';

describe('Given the functions in api.js', () => {
  describe('When calling api.login', () => {
    test('Then it should return the logged user data and a token', async () => {
      axios.post.mockResolvedValue({
        data: { ...mockUser, token: '1a2b3c' },
      });
      expect(await api.login(mockUser)).toHaveProperty('userName');
    });
  });
  describe('When calling api.updateUser', () => {
    test('Then it should return the logged user data updated', async () => {
      axios.patch.mockResolvedValue({
        data: { ...mockUser, token: '1a2b3c' },
      });
      expect(await api.updateUser(mockUser)).toHaveProperty('userName');
    });
  });
  describe('When calling api.addRelation', () => {
    test('Then it should return the logged user data updated', async () => {
      axios.patch.mockResolvedValue({
        data: { ...mockUser, friends: [mockId] },
      });
      expect((await api.addRelation(mockId, 'friend')).friends).toHaveLength(1);
    });
  });
  describe('When calling api.getAllUsers', () => {
    test('Then it should return an array of users', async () => {
      axios.get.mockResolvedValue({
        data: [{}, {}, {}],
      });
      expect(await api.getAllUsers()).toHaveLength(3);
    });
  });
  describe('When calling api.getAllFiltered', () => {
    test('Then it should return an array of users', async () => {
      axios.get.mockResolvedValue({
        data: [{}, {}],
      });
      expect(await api.getAllFiltered('friends')).toHaveLength(2);
    });
  });
});
