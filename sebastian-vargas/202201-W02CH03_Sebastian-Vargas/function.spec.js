import { myPush, myPop } from "./function.js";

describe("Given the function myPush", () => {
    test("Add the 'Last element' string at the end the given array1, and return the array1's length.", () => {
        const array1 = ["First element", "Second element", "Third element"];
        expect(myPush(array1, "Last element")).toEqual((array1.length = 4));
    });
});

describe("Given the function myPop", () => {
    test("Delete the last element of the given array2, and return that last element.", () => {
        const array2 = [2, 4, 6, 8];
        expect(myPop(array2)).toEqual(8);
    });
});
