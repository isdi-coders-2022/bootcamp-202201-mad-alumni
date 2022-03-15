let fixDecimals = (a) => {
    if (a % 1 !== 0) {
        return a.toFixed(3);
    }
};

let calculator = () => {
    const resultNum = [];

    let num1 = parseFloat(prompt('Enter number'));

    let num2 = parseFloat(prompt('Enter number'));

    if (!isNaN(num1) && isNaN(num2)) {
        let resultSqrt = num1 * num1;

        resultNum.push(`The result of sqrt is ${fixDecimals(resultSqrt)}`);
        alert(resultNum);
        console.log(resultNum);
    } else if (!isNaN(num1) && !isNaN(num2)) {
        let resultSum = num1 + num2;

        resultNum.push(`The result of sum is ${fixDecimals(resultSum)}, `);

        let resultSub = num1 - num2;

        resultNum.push(`The result of Sub is ${fixDecimals(resultSub)}, `);

        let resultDiv = num1 / num2;

        resultNum.push(`The result of Sub is ${fixDecimals(resultDiv)}, `);

        let resultMult = num1 * num2;

        resultNum.push(`The result of Sub is ${fixDecimals(resultMult)}.`);
        alert(resultNum);
        console.log(resultNum);
    } else {
        alert('Error, please enter a valid number');
        console.log('Error, please enter a valid number');
    }
};

calculator();
