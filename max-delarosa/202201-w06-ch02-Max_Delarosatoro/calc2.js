const inquirer = require('inquirer');
async function calculator(args) {
    let a, b;
    if (args.length == 2) {
        a = args[0];
        b = args[1];
    } else {
        const answer = await inquirer.prompt([
            { name: 'number1', message: 'Enter number 1', type: 'number' },
            { name: 'number2', message: 'Enter number 2', type: 'number' },
        ]);
        a = answer.number1;
        b = answer.number2;
    }
    if (isNaN(a) || isNaN(b)) {
        throw new Error('Invalid arguments');
    }
    return `
        ${a} + ${b} = ${a + b}
        ${a} - ${b} = ${a - b}
        ${a} * ${b} = ${a * b}
        ${a} / ${b} = ${a / b}`;
}

module.exports = { calculator };
