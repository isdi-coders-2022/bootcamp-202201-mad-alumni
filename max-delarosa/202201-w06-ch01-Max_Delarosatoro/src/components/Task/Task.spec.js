/* eslint-disable react/jsx-no-constructed-context-values */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GlobalContext } from '../../context/globalContext';
import Task from './Task';

describe('Given the Task component', () => {
    describe('When a task is passed as a prop', () => {
        test('It renders', () => {
            const contextValue = {
                toggleTask: jest.fn(),
                removeTask: jest.fn(),
            };
            const mockTask = {
                id: 1,
                title: 'Test Task',
                responsible: 'Test Person',
                isCompleted: false,
            };
            render(
                <GlobalContext.Provider value={contextValue}>
                    <Task task={mockTask} />
                </GlobalContext.Provider>
            );
            expect(screen.getByText(/Test Task/)).toBeInTheDocument();
            expect(screen.getByText(/no/)).toBeInTheDocument();
            userEvent.click(screen.getByRole('button'));
            expect(contextValue.removeTask).toHaveBeenCalled();
            userEvent.click(screen.getByTestId('checkbox'));
            expect(contextValue.toggleTask).toHaveBeenCalled();
        });
        test('If completed screen says yes', () => {
            const contextValue = {
                toggleTask: jest.fn(),
                removeTask: jest.fn(),
            };
            const mockTask = {
                id: 1,
                title: 'Test Task',
                responsible: 'Test Person',
                isCompleted: true,
            };
            render(
                <GlobalContext.Provider value={contextValue}>
                    <Task task={mockTask} />
                </GlobalContext.Provider>
            );
            expect(screen.getByText(/yes/)).toBeInTheDocument();
        });
    });
});
