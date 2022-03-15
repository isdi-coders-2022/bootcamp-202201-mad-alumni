import React from 'react';
import { prettyDOM, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import { GlobalContext } from './context/globalContext';

const addTask = jest.fn();

test('renders learn react link', () => {
    render(
        <Provider store={store}>
            <GlobalContext.Provider value={addTask}>
                <App />
            </GlobalContext.Provider>
        </Provider>
    );
    expect(screen.getByText(/Title/)).toBeInTheDocument();
});
