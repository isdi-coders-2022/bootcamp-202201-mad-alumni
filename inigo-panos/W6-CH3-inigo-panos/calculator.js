import inquirer from 'inquirer';

// function args(args) {
//     return args.slice(2);
// }

// export function checkNumbers(args) {
//     const [a, b] = [...args];
//     console.log(args.length);
//     if (args.length < 2) {
//         inquirer
//             .prompt([
//                 {
//                     name: 'numberA',
//                     message: 'Introduzca un primer número',
//                     type: 'number',
//                 },
//                 {
//                     name: 'numberB',
//                     message: 'Introduzca un segundo número',
//                     type: 'number',
//                 },
//             ])
//             .then((resp) =>
//                 console.log(calculator2(resp.numberA, resp.numberB))
//             );
//     }
// }

export function calculator2(a, b) {
    // const [a, b] = [...args];

    const result = ` ${a} + ${b} = ${+a + +b}
    ${a} - ${b} = ${+a - +b}
    ${a} * ${b} = ${+a * +b}
    ${a} / ${b} = ${+a / +b}`;
    return result;
}

// checkNumbers(args(process.argv));
