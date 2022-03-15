import { myPush } from "./metodos.js";
import { myPop } from "./metodos.js";
import { myShift } from "./metodos.js";
import { myUnshift } from "./metodos.js";

describe('Given the funtion myPush',()=> {
describe('When it receives the parameters 1 and 1',() =>{
    test('Then it should return 4', () => {
        expect(myPush(['Juan','Miguel','Luis'],'paco')).toStrictEqual(["Juan", "Miguel", "Luis", "paco"]);
    });
});
});
describe('Given the funtion myPop',()=> {
    describe('When it receives the parameters 1 and 1',() =>{
        test('Then it should return 4', () => {
            expect(myPop(['Juan','Miguel','Luis'])).toStrictEqual(["Juan", "Miguel"]);
        });
    });
    });

    