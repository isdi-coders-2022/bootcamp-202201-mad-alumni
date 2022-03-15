import { mockRobot, robotsForTesting } from '../test-utils/test-robots';
import { robotsConnect } from './db.js';
import * as crud from './robots-crud';

describe('Given the functions of our CRUD', () => {
    let Robot;
    let insertResponse;
    let sampleId = '';
    let botToDeleteId = '';
    beforeAll(async () => {
        Robot = await robotsConnect();
        await Robot.collection.drop();
        insertResponse = await Robot.insertMany(robotsForTesting, {
            rawResult: true,
        });
        sampleId = insertResponse.insertedIds[0].toString();
        botToDeleteId = insertResponse.insertedIds[3].toString();
    });
    describe('Once a connection to the DB is established', () => {
        test('We should be able to connect to our collection', () => {
            expect(Robot.collection.name).toBe('robots');
        });
        test('We should be able to insert a number of articles', () => {
            expect(insertResponse.acknowledged).toBe(true);
        });
    });
    describe('Once or collection is populated', () => {
        test('The function getAllRobots should fetch all robots', async () => {
            await expect(await crud.getAllRobots(Robot)).toHaveLength(4);
        });
        test('The function getRobot should one robot  by id', async () => {
            await expect((await crud.getRobot(sampleId, Robot)).robotName).toBe(
                'Jhonny Slow'
            );
        });
        test('The function insertRobot should add a robot', async () => {
            await expect(
                (
                    await crud.insertRobot(mockRobot, Robot)
                ).robotName
            ).toBe(mockRobot.robotName);
        });
        test('The function updateRobot should update the robot of the given id', async () => {
            await expect(
                (
                    await crud.updateRobot(sampleId, mockRobot, Robot)
                ).robotName
            ).toBe(mockRobot.robotName);
        });
        test('The function deleteRobot should delete the robot of the given id', async () => {
            await expect(
                (
                    await crud.deleteRobot(botToDeleteId, Robot)
                ).robotName
            ).toBe('Test Crusher');
        });
    });
});
