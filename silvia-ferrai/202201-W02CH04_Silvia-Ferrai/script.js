let expression = [];
let oneComma = true;

let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');
let nine = document.querySelector('#nine');
let zero = document.querySelector('#zero');

let comma = document.querySelector('#comma');
let minus = document.querySelector('#minus');
let plus = document.querySelector('#plus');
let multiply = document.querySelector('#multiply');
let divide = document.querySelector('#divide');

let equal = document.querySelector('#equal');
let clear = document.querySelector('#clear');
let result = document.querySelector('#result');

one.addEventListener('click', () => {
    result.innerText += '1';
    expression.push('1');
});
two.addEventListener('click', () => {
    result.innerText += '2';
    expression.push('2');
});
three.addEventListener('click', () => {
    result.innerText += '3';
    expression.push('3');
});
four.addEventListener('click', () => {
    result.innerText += '4';
    expression.push('4');
});
five.addEventListener('click', () => {
    result.innerText += '5';
    expression.push('5');
});
six.addEventListener('click', () => {
    result.innerText += '6';
    expression.push('6');
});
seven.addEventListener('click', () => {
    result.innerText += '7';
    expression.push('7');
});
eight.addEventListener('click', () => {
    result.innerText += '8';
    expression.push('8');
});
nine.addEventListener('click', () => {
    result.innerText += '9';
    expression.push('9');
});
zero.addEventListener('click', () => {
    result.innerText += '0';
    expression.push('0');
});

comma.addEventListener('click', showComma);
clear.addEventListener('click', allClear);

plus.addEventListener('click', () => {
    result.innerText += '+';
    expression.push('+');
    clearComma();
});
multiply.addEventListener('click', () => {
    result.innerText += '*';

    expression.push('*');
    clearComma();
});
minus.addEventListener('click', () => {
    result.innerText += '-';
    expression.push('-');
    clearComma();
});
divide.addEventListener('click', () => {
    result.innerText += '/';
    expression.push('/');
    clearComma();
});
equal.addEventListener('click', total);

function clearComma() {
    oneComma = true;
}

function showComma() {
    let display = result.innerText;
    if (display === '') {
        result.innerText += '0.';
        expression.push('0.');
    } else if (oneComma) {
        result.innerText += '.';
        expression.push('.');
    }
    oneComma = false;
}
function allClear() {
    expression = [];
    result.innerText = '';
    oneComma = true;
}

function total() {
    let resultExpression = '';
    let runExpression = 0;
    runExpression = expression.join('');
    let regExp = /([-+]?\d*\.?\d+[\/\+\-\*])+([-+]?\d*\.?\d+)/;
    if (runExpression.match(regExp)) {
        resultExpression = eval(runExpression);
    }
    allClear();
    result.innerText = resultExpression;
}
