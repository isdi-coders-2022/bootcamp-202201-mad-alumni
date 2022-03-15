/* eslint-disable react/jsx-no-constructed-context-values */
import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { ContextProvider, GlobalContext } from './globalContext';

describe('Given the globalContext', () => {
    describe('When wrapped around children', () => {
        test('Gives its properties', () => {
            function TestComponent() {
                const context = useContext(GlobalContext);
                return <div>hello</div>;
            }
            render(
                <Provider store={store}>
                    <ContextProvider>
                        <TestComponent />
                    </ContextProvider>
                </Provider>
            );
            expect(screen.getByText(/hello/)).toBeInTheDocument();
        });
    });
});
