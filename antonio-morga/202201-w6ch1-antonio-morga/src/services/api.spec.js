import axios from 'axios';
import * as api from './api';

jest.mock('axios');

const mockTasksFromApi = [
  { title: 'task 1', id: 1 },
  { title: 'task 2', id: 2 },
];

const mockTask = { title: 'task 3', id: 3 };

describe('Given the function getTasks from the service api.js', () => {
  describe('When calling it with a given url', () => {
    test('Then it should return the tasks in our api', async () => {
      axios.get.mockResolvedValue({ data: mockTasksFromApi });
      expect(await api.getTasks()).toEqual({
        data: [
          { title: 'task 1', id: 1 },
          { title: 'task 2', id: 2 },
        ],
      });
    });
  });
});

describe('Given the function addTasks from the service api.js', () => {
  describe('When calling it with a given url', () => {
    test('Then it should return the tasks in our api', async () => {
      axios.post.mockResolvedValue({ data: { title: 'task 2', id: 2 } });
      expect(await api.addTask()).toEqual({
        data: { title: 'task 2', id: 2 },
      });
    });
  });
});

describe('Given the function deleteTask from the service api.js', () => {
  describe('When calling it with a given url', () => {
    test('Then it should return the tasks in our api', async () => {
      axios.delete.mockResolvedValue({ respText: 'Ok' });
      expect(await api.deleteTask(mockTask)).toEqual({ respText: 'Ok' });
    });
  });
});

describe('Given the function updateTask from the service api.js', () => {
  describe('When calling it with a given url', () => {
    test('Then it should return the tasks in our api', async () => {
      axios.patch.mockResolvedValue({ data: mockTask });
      expect(await api.updateTask(mockTask)).toEqual({
        data: { title: 'task 3', id: 3 },
      });
    });
  });
});
