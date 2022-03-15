import * as actions from './actionCreators';
import { taskReducer } from './taskReducer';

describe('Given the taskReducer', () => {
    describe('When given a state and an action', () => {
        test('Returns a new state', () => {
            const initialState = {
                taskList: [{ id: 1 }],
            };
            const addedState = {
                taskList: [{ id: 1 }, { id: 2 }],
            };
            expect(
                taskReducer(
                    initialState,
                    actions.loadTasks(initialState.taskList)
                )
            ).toEqual(initialState);
            expect(
                taskReducer(initialState, actions.addTask({ id: 2 }))
            ).toEqual(addedState);
            expect(taskReducer(initialState, actions.removeTask(1))).toEqual({
                taskList: [],
            });
            expect(
                taskReducer(
                    {
                        taskList: [{ id: 1 }, { id: 2 }],
                    },
                    actions.toggleTask({ id: 1, isCompleted: true })
                )
            ).toEqual({
                taskList: [{ id: 1, isCompleted: true }, { id: 2 }],
            });
            expect(taskReducer(initialState, 'random action')).toEqual(
                initialState
            );
        });
    });
});
