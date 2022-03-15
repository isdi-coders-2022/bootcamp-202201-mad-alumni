let newNumber;
const numbersList = [];
const results = [];
const sum = (arr) => arr.reduce((a, b) => a + b);
const sub = (arr) => arr.reduce((a, b) => a - b);
const mult = (arr) => arr.reduce((a, b) => a * b);
const div = (arr) => arr.reduce((a, b) => a / b);
const fixDecimals = (a) => {
    if (a % 1 !== 0) {
        return a.toFixed(3);
    } else {
        return a;
    }
};
const calculatorPro = () => {
    do {
        newNumber = parseFloat(
            prompt('Welcome. Enter a number to start calculating')
        );
        numbersList.push(newNumber);
        if (isNaN(newNumber)) {
            alert('Invalid input, please enter a number');
            calculatorPro();
        }
    } while (!isNaN(newNumber));
    {
        if (confirm('Would you like to keep on adding numbers?')) {
            calculatorPro();
        } else {
            calculate();
        }
    }
};
const calculate = () => {
    if (numbersList.length >= 1)
        if (numbersList.length === 1) {
            results.push(Math.sqrt(numbersList[0]));
            alert(`The result of your square root is: ${results[0]}`);
        } else {
            results.push(
                `The result of your sum is: ${fixDecimals(sum(numbersList))}`
            );
            results.push(
                `The result of your sub is: ${fixDecimals(sub(numbersList))}`
            );
            results.push(
                `The result of your div is: ${fixDecimals(div(numbersList))}`
            );
            results.push(
                `The result of your mult is: ${fixDecimals(mult(numbersList))}`
            );
            alert('The numbers you introduced are: ' + numbersList);
            alert(results.join('\n'));
        }
};
do {
    calculatorPro();
} while (confirm('Would you like to start over?'));
