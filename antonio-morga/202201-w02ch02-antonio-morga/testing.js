import { strictEquals } from "./function.js";

console.log(strictEquals(1, 1));
strictEquals(1, 1) == true // should be true
    ? console.log("works for 1, 1")
    : console.error("function not working for 1, 1");

console.log(strictEquals(NaN, NaN));
strictEquals(NaN, NaN) == false //should be false
    ? console.log("works for NaN, NaN")
    : console.error("function not working for NaN, NaN");

console.log(strictEquals(0, -0));
strictEquals(0, -0) == true //should be true
    ? console.log("works for 0, -0")
    : console.error("function not working for 0, -0");

console.log(strictEquals(-0, 0));
strictEquals(-0, 0) == true //should be true
    ? console.log("works for -0, 0")
    : console.error("function not working for -0, 0");

console.log(strictEquals(1, "1"));
strictEquals(1, "1") == false //should be false
    ? console.log(`works for 1, "1"`)
    : console.error(`function not working for 1, "1"`);

console.log(strictEquals(true, false));
strictEquals(true, false) == false //should be false
    ? console.log("works for true, false")
    : console.error("function not working for true, false");

console.log(strictEquals(false, false));
strictEquals(false, false) == true //should be true
    ? console.log("works for false, false")
    : console.error("function not working for false, false");

console.log(strictEquals("water", "oil"));
strictEquals("water", "oil") == false //should be false
    ? console.log(`works for "water", "oil"`)
    : console.error(`function not working for "water", "oil"`);
