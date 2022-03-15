import axios from 'axios';
import * as api from './api';

jest.mock('axios');

const mockRobotsFromApi = [
  { title: 'Robot 1', id: 1 },
  { title: 'Robot 2', id: 2 },
];

const mockRobot = { title: 'Robot 3', id: 3 };

describe('Given the function getRobots from the service api.js', () => {
  describe('When calling it with a given url', () => {
    test('Then it should return the Robots in our api', async () => {
      axios.get.mockResolvedValue({ data: mockRobotsFromApi });
      expect(await api.getRobots()).toEqual({
        data: [
          { title: 'Robot 1', id: 1 },
          { title: 'Robot 2', id: 2 },
        ],
      });
    });
  });
});

describe('Given the function getOneRobot from the service api.js', () => {
  describe('When calling it with a given id', () => {
    test('Then it should return the robot with that id', async () => {
      axios.get.mockResolvedValue({ data: mockRobot });
      expect(await api.getRobots()).toEqual({
        data: mockRobot,
      });
    });
  });
});

describe('Given the function addRobots from the service api.js', () => {
  describe('When calling it with a given url', () => {
    test('Then it should return the Robots in our api', async () => {
      axios.post.mockResolvedValue({ data: { title: 'Robot 2', id: 2 } });
      expect(await api.addRobot()).toEqual({
        data: { title: 'Robot 2', id: 2 },
      });
    });
  });
});

describe('Given the function deleteRobot from the service api.js', () => {
  describe('When calling it with a given url', () => {
    test('Then it should return the Robots in our api', async () => {
      axios.delete.mockResolvedValue({ respText: 'Ok' });
      expect(await api.deleteRobot(mockRobot)).toEqual({ respText: 'Ok' });
    });
  });
});

describe('Given the function updateRobot from the service api.js', () => {
  describe('When calling it with a given url', () => {
    test('Then it should return the Robots in our api', async () => {
      axios.patch.mockResolvedValue({ data: mockRobot });
      expect(await api.updateRobot(mockRobot)).toEqual({
        data: { title: 'Robot 3', id: 3 },
      });
    });
  });
});
