import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { prettyDOM, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as service from '../../services/apiRequest';
import * as actions from './action-creators';
import { render } from '../../utils/test-utils';

jest.mock('../../services/apiRequest');

describe('Given the action creators', () => {
    beforeEach(() => {
        service.getAllRobots.mockResolvedValue({
            data: [{ _id: 1, name: 'test1' }],
        });
        service.addRobot.mockResolvedValue({
            data: { _id: 2, name: 'test2' },
        });
        service.updateRobot.mockResolvedValue({
            data: { _id: 2, name: 'test2-update' },
        });
        service.deleteRobot.mockResolvedValue({
            data: { _id: 2, name: 'test2-update' },
            status: 200,
        });
    });
    describe('When calling the actions', () => {
        test('They interact with the redux store', async () => {
            function TestComponent() {
                const stateLog = useSelector((state) => state);
                const dispatch = useDispatch();
                useEffect(() => {
                    dispatch(actions.loadRobots());
                }, []);

                return (
                    <div>
                        <p>{JSON.stringify(stateLog)}</p>
                        <button
                            type="button"
                            data-testid="add"
                            onClick={() => {
                                dispatch(
                                    actions.addRobot({
                                        _id: 2,
                                        name: 'test-2',
                                    })
                                );
                            }}
                        >
                            Add Robot
                        </button>
                        <button
                            type="button"
                            data-testid="update"
                            onClick={() => {
                                dispatch(
                                    actions.updateRobot(2, {
                                        name: 'test2-update',
                                    })
                                );
                            }}
                        >
                            Update Robot
                        </button>
                        <button
                            type="button"
                            data-testid="delete"
                            onClick={() => {
                                dispatch(actions.deleteRobot(2));
                            }}
                        >
                            Delete Robot
                        </button>
                    </div>
                );
            }
            await render(<TestComponent />);
            expect(
                screen.getByText(/\[{"_id":1,"name":"test1"}\]/)
            ).toBeInTheDocument();

            await userEvent.click(screen.getByTestId(/add/));
            expect(
                screen.getByText(
                    /\[{"_id":1,"name":"test1"},{"_id":2,"name":"test2"}\]/
                )
            ).toBeInTheDocument();

            await userEvent.click(screen.getByTestId(/update/));
            expect(
                screen.getByText(
                    /\[{"_id":1,"name":"test1"},{"_id":2,"name":"test2-update"}\]/
                )
            ).toBeInTheDocument();

            await userEvent.click(screen.getByTestId(/delete/));
            expect(
                screen.getByText(/\[{"_id":1,"name":"test1"}\]/)
            ).toBeInTheDocument();

            // testing status code
            service.deleteRobot.mockResolvedValue({
                data: { _id: 1, name: 'test1-update-fail' },
                status: 404,
            });

            await userEvent.click(screen.getByTestId(/delete/));
            expect(
                screen.getByText(/\[{"_id":1,"name":"test1"}\]/)
            ).toBeInTheDocument();
        });
    });
});
