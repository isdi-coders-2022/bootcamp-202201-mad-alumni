import { myJoin } from './arrayJoin.js';

const arrayForTest = [1, 2, 3];
const myChar = '-';

describe('Given the function myJoin', () => {
    describe("When passing the array [1, 2, 3] and the char '-'", () => {
        test("Then it should return '1-2-3'", () => {
            expect(myJoin(arrayForTest, myChar)).toEqual('1-2-3');
        });
    });
});
