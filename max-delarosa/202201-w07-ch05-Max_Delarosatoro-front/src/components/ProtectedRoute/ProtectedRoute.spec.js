import { prettyDOM, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import { render } from '../../utils/test-utils';
import ProtectedRoute from './ProtectedRoute';

describe('Given ProtectedRoute component', () => {
    describe('When Called', () => {
        test('If not logged, it  will render Navigate', async () => {
            function TestComponent() {
                return <div>Hello</div>;
            }
            function TestLogin() {
                return <div>Login</div>;
            }
            const { container } = await render(
                <MemoryRouter initialEntries={['/']}>
                    <Routes location={{ pathname: '/' }}>
                        <Route
                            path="/"
                            element={
                                <ProtectedRoute>
                                    <TestComponent />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="/login" element={<TestLogin />} />
                    </Routes>
                </MemoryRouter>,
                {
                    preloadedState: {
                        auth: { token: '12312' },
                        users: [],
                    },
                }
            );

            expect(screen.getByText(/Hello/)).toBeInTheDocument();
        });
    });
});
