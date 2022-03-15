import axios from 'axios';
import * as services from './apiRequest';

jest.mock('axios');

describe('Given the apiRequest service', () => {
    describe('Calling load robot', () => {
        test('It should call axios', () => {
            services.getAllRobots();
            expect(axios.get).toHaveBeenCalled();
        });
    });
    describe('Calling delete robot', () => {
        test('It should call axios', () => {
            services.deleteRobot();
            expect(axios.delete).toHaveBeenCalled();
        });
    });
    describe('Calling add robot', () => {
        test('It should call axios', () => {
            services.addRobot();
            expect(axios.post).toHaveBeenCalled();
        });
    });
    describe('Calling update robot', () => {
        test('It should call axios', () => {
            const id = 1;
            const partialRobot = {
                name: 'James',
                speed: 10,
                resistance: 10,
                created_at: 543154325234,
            };
            services.updateRobot(id, partialRobot);
            expect(axios.patch).toHaveBeenCalled();
        });
    });
});
