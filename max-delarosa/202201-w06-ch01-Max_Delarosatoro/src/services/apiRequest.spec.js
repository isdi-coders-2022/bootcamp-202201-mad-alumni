import axios from 'axios';
import * as service from './apiRequest';

jest.mock('axios');

describe('Given the apiRequest service', () => {
    beforeEach(() => {
        axios.get.mockResolvedValue([{ id: 1 }]);
        axios.post.mockResolvedValue([{ id: 1 }, { id: 2 }]);
        axios.patch.mockResolvedValue([{ id: 1, isCompleted: true }]);
        axios.delete.mockResolvedValue([]);
    });
    describe('When called', () => {
        test('returns a response', async () => {
            expect(await service.loadTasks()).toEqual([{ id: 1 }]);
            expect(await service.addTask({ id: 2 })).toEqual([
                { id: 1 },
                { id: 2 },
            ]);
            expect(
                await service.toggleTask({ id: 2, isCompleted: false })
            ).toEqual([{ id: 1, isCompleted: true }]);
            expect(await service.removeTask(1)).toEqual([]);
        });
    });
});
