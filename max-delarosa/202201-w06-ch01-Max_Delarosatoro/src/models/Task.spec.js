import { TaskStructure } from './Task';

describe('Given the Task class', () => {
    describe('When passed the correct arguments', () => {
        test('It creates a task object', () => {
            expect(new TaskStructure('Hello', 'Max')).toEqual({
                title: 'Hello',
                responsible: 'Max',
                isCompleted: false,
            });
        });
    });
});
