import { initiatePokemon } from '../service/service-api';

describe('Given the api-services', () => {
    describe('When it will be executed ', () => {
        global.fetch = jest.fn().mockResolvedValue({
            json: () =>
                Promise.resolve([{ test: 'Test 1' }, { test: 'Test 1' }]),
        });

        let service;
        beforeEach(() => {
            service = initiatePokemon();
        });
        test('Then it should be created', () => {
            expect(service).toBeDefined();
        });
        test('Then it should be created', () => {
            expect(service).toBeDefined();
        });
    });
});
