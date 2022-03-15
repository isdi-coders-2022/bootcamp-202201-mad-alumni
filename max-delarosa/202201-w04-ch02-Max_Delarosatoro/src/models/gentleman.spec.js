import { Gentleman } from './gentleman';

describe('Given the Gentleman class model', () => {
    describe('When given the correct parameters', () => {
        test('Creates a Gentleman object instance', () => {
            // eslint-disable-next-line no-new
            const john = new Gentleman(
                1,
                'John',
                'Alive',
                'Doctor',
                'Twitter',
                'index.jpg',
                'You shall not pass'
            );

            expect(john.name).toBeDefined();
            expect(john.status).toBeDefined();
            expect(john.profession).toBeDefined();
            expect(john.twitter).toBeDefined();
        });
    });
});
