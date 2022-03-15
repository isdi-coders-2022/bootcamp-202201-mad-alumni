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

const updatedAuth = {
    ...mockAuth,
    username: 'test-update',
    lastName: 'test-update',
};

const otherUser = '622234366fc2f13b0668d168';

const friendState = { ...updatedAuth, friends: [otherUser] };
const enemyState = { ...updatedAuth, enemies: [otherUser] };

describe('Given the action creators', () => {
    beforeEach(() => {
        auth.login.mockResolvedValue({
            data: mockAuth,
        });
        auth.loginToken.mockResolvedValue({ data: mockAuth });
        user.updateProfile.mockResolvedValue({ data: updatedAuth });
        user.toggleFriend.mockResolvedValue({ data: friendState });
        user.toggleEnemy.mockResolvedValue({ data: enemyState });
    });
    describe('When given called', () => {
        test('They interact with the redux store', async () => {
            function TestComponent() {
                const stateLog = useSelector((state) => state.auth);
                const dispatch = useDispatch();

                return (
                    <div>
                        <p>{JSON.stringify(stateLog)}</p>
                        <button
                            type="button"
                            data-testid="login"
                            onClick={() => {
                                dispatch(actions.login());
                            }}
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            data-testid="update"
                            onClick={() => {
                                dispatch(actions.updateProfile());
                            }}
                        >
                            Update Profile
                        </button>
                        <button
                            type="button"
                            data-testid="friend"
                            onClick={() => {
                                dispatch(actions.toggleFriend());
                            }}
                        >
                            Add Friend
                        </button>
                        <button
                            type="button"
                            data-testid="enemy"
                            onClick={() => {
                                dispatch(actions.toggleEnemy());
                            }}
                        >
                            Add Enemy
                        </button>
                        <button
                            type="button"
                            data-testid="tokenlog"
                            onClick={() => {
                                dispatch(actions.loginToken());
                            }}
                        >
                            Token Login
                        </button>
                        <button
                            type="button"
                            data-testid="logout"
                            onClick={() => {
                                dispatch(actions.logout());
                            }}
                        >
                            Token Login
                        </button>
                    </div>
                );
            }

            const { container } = await render(<TestComponent />, {
                preloadedState: {
                    auth: {},
                    users: [],
                },
            });

            await userEvent.click(screen.getByTestId(/login/));
            expect(
                screen.getByText(JSON.stringify(mockAuth))
            ).toBeInTheDocument();

            await userEvent.click(screen.getByTestId(/tokenlog/));
            expect(
                screen.getByText(JSON.stringify(mockAuth))
            ).toBeInTheDocument();

            await userEvent.click(screen.getByTestId(/update/));
            expect(
                screen.getByText(JSON.stringify(updatedAuth))
            ).toBeInTheDocument();

            await userEvent.click(screen.getByTestId(/update/));
            expect(
                screen.getByText(JSON.stringify(updatedAuth))
            ).toBeInTheDocument();

            await userEvent.click(screen.getByTestId(/friend/));
            expect(
                screen.getByText(JSON.stringify(friendState))
            ).toBeInTheDocument();

            await userEvent.click(screen.getByTestId(/enemy/));
            expect(
                screen.getByText(JSON.stringify(enemyState))
            ).toBeInTheDocument();
            await userEvent.click(screen.getByTestId(/logout/));
            expect(screen.getByText(JSON.stringify({}))).toBeInTheDocument();
        });
    });
});
