// test-utils.jsx
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { authReducer } from '../redux/auth/authReducer';
import { usersReducer } from '../redux/users/usersReducer';
// Import your own reducer

function render(
    ui,
    {
        preloadedState,
        store = configureStore({
            reducer: { auth: authReducer, users: usersReducer },
            preloadedState,
        }),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>;
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
