import { compare } from "./w2ch2_moduleOP.js";

console.log(compare(1, 1));
console.log(compare(NaN, NaN));
console.log(compare(0, -0));
console.log(compare(-0, 0));
console.log(compare(1, "1"));
console.log(compare(true, false));
console.log(compare(false, false));
console.log(compare("water", "oil"));
