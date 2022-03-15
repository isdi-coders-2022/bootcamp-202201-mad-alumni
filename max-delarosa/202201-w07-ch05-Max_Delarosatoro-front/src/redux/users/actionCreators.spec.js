/* eslint-disable testing-library/no-unnecessary-act */
import { useSelector, useDispatch } from 'react-redux';
import { prettyDOM, screen } from '@testing-library/react';
import { useEffect } from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '../../utils/test-utils';
import * as auth from '../../services/auth';
import * as actions from './actionCreators';
import * as user from '../../services/apiRequest';

jest.mock('../../services/auth');
jest.mock('../../services/apiRequest');

const mockUser = {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjM2YjdiNDRjYTZkZDZlZGRiNzAzZiIsInVzZXJuYW1lIjoiY2FjYSIsIm5hbWUiOiIyY2FjYTIiLCJsYXN0TmFtZSI6ImNhY2EiLCJwcm9maWxlUGljVXJsIjoiQzpcXGZha2VwYXRoXFxUeXBlU2NyaXB0IENoZWF0IFNoZWV0IChEQVJLKSAoMSkucG5nIiwiZnJpZW5kcyI6W10sImVuZW1pZXMiOlsiNjIyMjM0MzY2ZmMyZjEzYjA2NjhkMTY4Il0sImlhdCI6MTY0NjU2ODM5NH0.Nb8679S4cDLPe-2-vx6Gq0CfYZfOrcGKaaGBV0KZf2c',
    id: '62236b7b44ca6dd6eddb703f',
    username: 'test',
    name: 'test',
    lastName: 'test',
    profilePicUrl: 'C:\\fakepath\\TypeScript Cheat Sheet (DARK) (1).png',
    friends: [],
    enemies: [],
};

describe('Given the action creators', () => {
    beforeEach(() => {
        user.loadUsers.mockResolvedValue({ data: [mockUser] });
    });
    describe('When given called', () => {
        test('They interact with the redux store', async () => {
            function TestComponent() {
                const stateLog = useSelector((state) => state.users);
                const dispatch = useDispatch();

                useEffect(() => {
                    dispatch(actions.loadUsers());
                });

                return (
                    <div>
                        <p>{JSON.stringify(stateLog)}</p>
                    </div>
                );
            }

            await render(<TestComponent />, {
                preloadedState: {
                    auth: {},
                    users: [],
                },
            });

            expect(
                screen.getByText(JSON.stringify([mockUser]))
            ).toBeInTheDocument();
        });
    });
});
