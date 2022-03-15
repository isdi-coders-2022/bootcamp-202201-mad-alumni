import strictEquals from "./functions.js";

let a;
let b;

a = 1;
b = 1;
console.log(
    `
    a = ${a}
    b = ${b}
    result = ${strictEquals(a, b)} 
    expected = true
    `
);

a = NaN;
b = NaN;
console.log(
    `
    a = ${a}
    b = ${b}
    result = ${strictEquals(a, b)} 
    expected = false
    `
);

a = 0;
b = -0;
console.log(
    `
    a = ${a}
    b = -${b}
    result = ${strictEquals(a, b)} 
    expected = true
    `
);

a = -0;
b = 0;
console.log(
    `
    a = -${a}
    b = ${b}
    result = ${strictEquals(a, b)} 
    expected = true
    `
);

a = 1;
b = "1";
console.log(
    `
    a = ${a}
    b = "${b}"
    result = ${strictEquals(a, b)} 
    expected = false
    `
);

a = true;
b = false;
console.log(
    `
    a = ${a}
    b = ${b}
    result = ${strictEquals(a, b)} 
    expected = false
    `
);

a = false;
b = false;
console.log(
    `
    a = ${a}
    b = ${b}
    result = ${strictEquals(a, b)} 
    expected = true
    `
);

a = "Water";
b = "oil";
console.log(
    `
    a = ${a}
    b = ${b}
    result = ${strictEquals(a, b)} 
    expected = false
    `
);
