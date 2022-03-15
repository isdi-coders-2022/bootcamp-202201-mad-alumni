/* eslint-disable testing-library/no-unnecessary-act */
import { prettyDOM, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { Provider, useSelector } from 'react-redux';
import { store } from '../redux/store';
import { useTasks } from './useTasks';
import * as service from '../services/apiRequest';

jest.mock('../services/apiRequest');

describe('Given the useTasks custom hook', () => {
    beforeEach(() => {
        service.loadTasks.mockResolvedValue({
            data: [{ id: 1, isCompleted: false }],
        });
        service.addTask.mockResolvedValue({
            data: { id: 2, isCompleted: false },
        });
        service.toggleTask.mockResolvedValue({
            data: { id: 1, isCompleted: true },
        });
        service.removeTask.mockResolvedValue({ data: [{ id: 1 }] });
    });
    describe('When called in a component', () => {
        test('Returns a factory object', async () => {
            function TestComponent() {
                const { addTask, toggleTask, removeTask } = useTasks();
                const taskList = useSelector((state) => state.taskList);
                const mockTask = { id: 2, isCompleted: false };
                const mockToggleTask = { id: 1, isCompleted: false };
                return (
                    <div>
                        <p>{JSON.stringify(taskList)}</p>
                        <button
                            type="button"
                            data-testid="add"
                            onClick={() => {
                                addTask(mockTask);
                            }}
                        >
                            add task
                        </button>
                        <button
                            type="button"
                            data-testid="toggle"
                            onClick={() => {
                                toggleTask(mockToggleTask);
                            }}
                        >
                            toggle task
                        </button>
                        <button
                            type="button"
                            data-testid="remove"
                            onClick={() => {
                                removeTask(1);
                            }}
                        >
                            remove task
                        </button>
                    </div>
                );
            }
            const { container } = render(
                <Provider store={store}>
                    <TestComponent />
                </Provider>
            );
            expect(screen.getByText(/\[\]/)).toBeInTheDocument();

            await act(async () => {
                userEvent.click(screen.getByTestId(/add/));
            });
            expect(
                screen.getByText(
                    /\[{"id":1,"isCompleted":false},{"id":2,"isCompleted":false}\]/
                )
            ).toBeInTheDocument();

            await act(async () => {
                userEvent.click(screen.getByTestId(/toggle/));
            });
            expect(
                screen.getByText(
                    /\[{"id":1,"isCompleted":true},{"id":2,"isCompleted":false}\]/
                )
            ).toBeInTheDocument();

            await act(async () => {
                userEvent.click(screen.getByTestId(/remove/));
            });
            expect(
                screen.getByText(/\[{"id":2,"isCompleted":false}\]/)
            ).toBeInTheDocument();
        });
    });
});
