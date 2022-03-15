/* eslint-disable no-underscore-dangle */
import dotenv from 'dotenv';
import * as services from './robots-crud.js';

dotenv.config();
let deleteId;

describe('Given the robots-crud', () => {
    describe('When calling getAllRobots', () => {
        test('Returns an array of robots', async () => {
            process.env.DB_NAME = 'robots-test';
            const robots = await services.getAllRobots();
            expect(robots).toBeTruthy();
        });
    });
    describe('When calling getRobot', () => {
        test('Returns a robot', async () => {
            process.env.DB_NAME = 'robots-test';
            const mockRobot = {
                name: 'TestName',
                image: 'https://media.istockphoto.com/photos/ai-robot-thinking-picture-id1029035836?k=20&m=1029035836&s=612x612&w=0&h=uLxGJ9Y-Q6dP840LmH6jIt0ns7az5_4uke98dn5833A=',
                characteristics: {
                    speed: 7,
                    resistance: 2,
                    created_at: '432434232',
                },
            };
            const testId = '621a2a878d75fd7bb09701bc';
            const robot = await services.getRobot(testId);
            expect(robot).toBeTruthy();
            expect(robot.name).toBe(mockRobot.name);
            expect(robot.image).toBe(mockRobot.image);
            expect(robot.characteristics.speed).toBe(
                mockRobot.characteristics.speed
            );
            expect(robot.characteristics.resistance).toBe(
                mockRobot.characteristics.resistance
            );
        });
    });
    describe('When calling addRobot', () => {
        test('Returns the added robot', async () => {
            process.env.DB_NAME = 'robots-test';
            const mockRobot = {
                name: 'Oscura',
                image: 'https://media.istockphoto.com/photos/ai-robot-thinking-picture-id1029035836?k=20&m=1029035836&s=612x612&w=0&h=uLxGJ9Y-Q6dP840LmH6jIt0ns7az5_4uke98dn5833A=',
                characteristics: {
                    speed: 7,
                    resistance: 2,
                    created_at: '432434232',
                },
            };
            const robot = await services.addRobot(mockRobot);
            deleteId = robot._id;
            expect(robot.name).toBe(mockRobot.name);
            expect(robot.image).toBe(mockRobot.image);
            expect(robot.characteristics.speed).toBe(
                mockRobot.characteristics.speed
            );
            expect(robot.characteristics.resistance).toBe(
                mockRobot.characteristics.resistance
            );
        });
    });
    describe('When calling updateRobot', () => {
        test('Returns the updated robot', async () => {
            process.env.DB_NAME = 'robots-test';
            const mockPartialRobot = {
                name: 'TestName',
            };
            const testId = '621a2a878d75fd7bb09701bc';
            const updatedRobot = await services.updateRobot(
                testId,
                mockPartialRobot
            );

            expect(updatedRobot.name).toBe(mockPartialRobot.name);
        });
    });
    describe('When calling delete Robot', () => {
        test('Returns an empty object', async () => {
            process.env.DB_NAME = 'robots-test';
            const deleteResponse = await services.deleteRobot(deleteId);

            expect(deleteResponse).toBeTruthy();
        });
    });
});
