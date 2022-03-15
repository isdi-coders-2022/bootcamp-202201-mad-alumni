import * as mockingoose from 'mockingoose';
import robotsConnect from './../services/db.js';
import {
    getAllRobots,
    // getRobot,
    // insertRobot,
} from './robots.controllers.js';

describe('robot service', () => {
    describe('fetchRobots', () => {
        it('should return the list of robots', async () => {
            mockingoose(robotsConnect()).toReturn(
                [
                    {
                        Name: 'R2D2',
                        Speed: 1,
                        Defense: 7,
                        DateofCreation: 1977,
                        Img: '',
                    },
                    {
                        Name: 'EVA',
                        Speed: 10,
                        Defense: 10,
                        DateofCreation: 2805,
                        Img: '',
                    },
                ],
                'find'
            );
            const results = await getAllRobots();
            expect(results[0].Name).toBe('R2D2');
        });
    });
});
