import { myPush } from "./push.js";

describe("Give the function myPush", () => {
    describe("When it receives the parameters testPush and 1", () => {
        test("should return true", () => {
            const testPush = ["queso", "casa", "chozas", "jefe"];
            expect(myPush(testPush, "esto")).toEqual([
                "queso",
                "casa",
                "chozas",
                "jefe",
                "esto",
            ]); // test es una variable aquí, puede llamarse de cualquier forma
        });
    });
});

import { myPop } from "./pop.js";

describe("Give the function myPush", () => {
    describe("When it receives the parameters testPush and 1", () => {
        test("should return true", () => {
            const testPop = ["queso", "casa", "chozas", "jefe"];
            expect(myPop(testPop, "esto")).toEqual(["queso", "casa", "chozas"]); // test es una variable aquí, puede llamarse de cualquier forma
        });
    });
});
