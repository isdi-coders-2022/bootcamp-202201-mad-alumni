/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable default-param-last */
/* eslint-disable react/jsx-no-constructed-context-values */
import userEvent from '@testing-library/user-event';
import { prettyDOM, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Provider, useSelector } from 'react-redux';
import { createStore } from 'redux';
import { GlobalContext } from '../../context/globalContext';
import { actionTypes } from '../../redux/tasks/actionTypes';
import { TaskList } from './TaskList';

const initialState = {
    taskList: [
        { id: 1, title: 'test', responsible: 'testperson', isCompleted: false },
    ],
};

function testReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.load:
            return { ...state, taskList: action.payload };
        case actionTypes.add:
            return { ...state, taskList: [...state.taskList, action.payload] };
        case actionTypes.remove:
            return {
                ...state,
                taskList: state.taskList.filter(
                    (item) => item.id !== action.payload
                ),
            };
        case actionTypes.toggle:
            return {
                ...state,
                taskList: state.taskList.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                ),
            };
        default:
            return state;
    }
}

describe('Given the TaskList component', () => {
    describe('When called', () => {
        beforeEach(() => {});
        test('It renders', async () => {
            const contextValue = {
                addTask: jest.fn(),
            };
            const store = createStore(testReducer);
            const { container } = render(
                <Provider store={store}>
                    <GlobalContext.Provider value={contextValue}>
                        <TaskList />
                    </GlobalContext.Provider>
                </Provider>
            );
            console.log(prettyDOM(container));
            expect(screen.getByText(/testperson/)).toBeInTheDocument();

            const titleInput = screen.getByPlaceholderText(/title/);
            const responsibleInput = screen.getByPlaceholderText(/responsible/);
            userEvent.click(titleInput);
            userEvent.keyboard('testTitle');
            userEvent.click(responsibleInput);
            userEvent.keyboard('Hello');
            const submitBtn = screen.getByTestId('submit-btn');
            userEvent.click(submitBtn);

            expect(contextValue.addTask).toHaveBeenCalled();
            expect(screen.getByDisplayValue(/Hello/)).toBeInTheDocument();
        });
    });
});
