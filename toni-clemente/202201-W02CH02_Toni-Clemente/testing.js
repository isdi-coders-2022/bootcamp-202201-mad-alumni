import { strictEquals } from "./function.js";

console.log("1/1", strictEquals(1, 1));

console.log("isNaN/IsNaN", strictEquals(NaN, NaN));

console.log("0/-0", strictEquals(0, 0));

console.log("-0/0", strictEquals(-0, 0));

console.log("1/'1'", strictEquals(1, "1"));

console.log("true/false", strictEquals(true, false));

console.log("false/false", strictEquals(false, false));

console.log("water/oil", strictEquals("water", "oil"));
