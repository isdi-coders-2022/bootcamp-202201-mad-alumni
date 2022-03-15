import { prettyDOM, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render } from '../../utils/test-utils';
import UserDetail from './UserDetail';

const mockAuth = {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjM2YjdiNDRjYTZkZDZlZGRiNzAzZiIsInVzZXJuYW1lIjoiY2FjYSIsIm5hbWUiOiIyY2FjYTIiLCJsYXN0TmFtZSI6ImNhY2EiLCJwcm9maWxlUGljVXJsIjoiQzpcXGZha2VwYXRoXFxUeXBlU2NyaXB0IENoZWF0IFNoZWV0IChEQVJLKSAoMSkucG5nIiwiZnJpZW5kcyI6W10sImVuZW1pZXMiOlsiNjIyMjM0MzY2ZmMyZjEzYjA2NjhkMTY4Il0sImlhdCI6MTY0NjU2ODM5NH0.Nb8679S4cDLPe-2-vx6Gq0CfYZfOrcGKaaGBV0KZf2c',
    id: '62236b7b44ca6dd6eddb703f',
    username: 'test',
    name: 'test',
    lastName: 'test',
    profilePicUrl: 'C:\\fakepath\\TypeScript Cheat Sheet (DARK) (1).png',
    friends: [],
    enemies: [],
};

const mockUsers = [
    {
        _id: '62236b7b44ca6dd6eddb703f',
        name: 'testName',
        lastName: 'testLastName',
        profilePicUrl: 'testUrl',
    },
];

describe('Given the UserDetail component', () => {
    describe('When called', () => {
        test('It renders', async () => {
            await render(
                <MemoryRouter
                    initialEntries={['/detail/id=62236b7b44ca6dd6eddb703f']}
                >
                    <Routes
                        location={{
                            pathname: '/detail/id=62236b7b44ca6dd6eddb703f',
                        }}
                    >
                        <Route path="/detail/:id" element={<UserDetail />} />
                    </Routes>
                </MemoryRouter>,
                {
                    preloadedState: {
                        auth: mockAuth,
                        users: mockUsers,
                    },
                }
            );
            expect(screen.getByText(/testName/)).toBeInTheDocument();
            expect(screen.getByText(/testLastName/)).toBeInTheDocument();
        });
    });
});
