import * as mockingoose from 'mockingoose';

import { Robot } from '../services/db.js';
const express = require('express');
import * as api from './robots.controller.js';
const app = express();
describe('Books service', () => {
    describe('fetchBooks', () => {
        afterEach(() => {
            server.close();
        });
        it('should return the list of books', async () => {
            mockingoose(Robot).toReturn(
                [
                    {
                        speed: '100',
                        resistance: '100',
                        creation_date: '2002-12-10',
                    },
                    {
                        speed: '200',
                        resistance: '200',
                        creation_date: '2002-12-10',
                    },
                ],
                'find'
            );
            const results = await api.getAllRobots();
            expect(results[0].speed).toBe('100');
        });
    });
});

const server = app.listen(3600, () => {
    console.log('Listening on 3600');
});
