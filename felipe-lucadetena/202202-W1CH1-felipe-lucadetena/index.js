let currentValue = [];
let lastValue;
let currentOperation;
let clearScreen = false;
let valueToAdd;
let newInput = false;
let operationValue;
let fullOperations = [];
//declaring number buttons
const screen = document.querySelector('.results-container');
const one = document.querySelector('.one-button');
const two = document.querySelector('.two-button');
const three = document.querySelector('.three-button');
const four = document.querySelector('.four-button');
const five = document.querySelector('.five-button');
const six = document.querySelector('.six-button');
const seven = document.querySelector('.seven-button');
const eight = document.querySelector('.eight-button');
const nine = document.querySelector('.nine-button');
const zero = document.querySelector('.zero-button');

//declaring operation buttons
const add = document.querySelector('.add-button');
const substraction = document.querySelector('.substraction-button');
const multiplication = document.querySelector('.multiplication-button');
const division = document.querySelector('.division-button');
const equal = document.querySelector('.equal-button');

//other buttons
const ac = document.querySelector('.ac-button');
const coma = document.querySelector('.coma-button');
const back = document.querySelector('.back-button');

const currentOperationDOM = document.querySelector('.current-operation');

//inicializar el valor en 0
screen.textContent = '0';

//add event listeners to each button
//number buttons
one.addEventListener('click', () => {
    debugger;
    newInput = true;
    handleScreenClear();
    currentValue.push('1');
    showCurrentValue(currentValue);
})

two.addEventListener('click', () => {
    debugger;
    newInput = true;
    handleScreenClear();
    currentValue.push('2');
    showCurrentValue(currentValue);
})

three.addEventListener('click', () => {
    debugger;
    newInput = true;
    handleScreenClear();
    currentValue.push('3');
    showCurrentValue(currentValue);
})

four.addEventListener('click', () => {
    debugger;
    newInput = true;
    handleScreenClear();
    currentValue.push('4');
    showCurrentValue(currentValue);
})

five.addEventListener('click', () => {
    debugger;
    newInput = true;
    handleScreenClear();
    currentValue.push('5');
    showCurrentValue(currentValue);
})

six.addEventListener('click', () => {
    debugger;
    newInput = true;
    handleScreenClear();
    currentValue.push('6');
    showCurrentValue(currentValue);
})

seven.addEventListener('click', () => {
    debugger;
    newInput = true;
    handleScreenClear();
    currentValue.push('7');
    showCurrentValue(currentValue);
})

eight.addEventListener('click', () => {
    debugger;
    newInput = true;
    handleScreenClear();
    currentValue.push('8');
    showCurrentValue(currentValue);
})

nine.addEventListener('click', () => {
    debugger;
    newInput = true;
    handleScreenClear();
    currentValue.push('9');
    showCurrentValue(currentValue);
})

zero.addEventListener('click', () => {
    debugger;
    newInput = true;
    handleScreenClear();
    if (currentValue !== ['0']) {
        currentValue.push('0');
        showCurrentValue(currentValue);
    }
})

//operation symbols
add.addEventListener('click', () => {
    //store the last number in a variable
    debugger;
    lastValue = parseFloat(currentValue.join(''));
    currentOperation = '+';
    clearScreen = true;
    fullOperations.push(lastValue, currentOperation)
    currentOperationDOM.textContent = fullOperations.join(' ');
});

substraction.addEventListener('click', () => {
    debugger;
    if (screen.textContent === '0') {
        handleScreenClear();
        currentValue = ['-']
        showCurrentValue(currentValue);
    } else {
        //store the last number in a variable
        
        if (
            fullOperations[fullOperations.length - 1] === '+' ||
            fullOperations[fullOperations.length - 1] === '-' ||
            fullOperations[fullOperations.length - 1] === '*' ||
            fullOperations[fullOperations.length - 1] === '/'
            ) {
            handleScreenClear();
            currentValue = ['-']
            showCurrentValue(currentValue);
        } else {
            lastValue = parseFloat(currentValue.join(''));
            currentOperation = '-';
            clearScreen = true;
            fullOperations.push(lastValue, currentOperation)
            currentOperationDOM.textContent = fullOperations.join(' ');
        }
    }
});

multiplication.addEventListener('click', () => {
    //store the last number in a variable
    debugger;
    lastValue = parseFloat(currentValue.join(''));
    currentOperation = '*';
    clearScreen = true;
    fullOperations.push(lastValue, currentOperation)
    currentOperationDOM.textContent = fullOperations.join(' ');
});

division.addEventListener('click', () => {
    debugger;
    //store the last number in a variable
    lastValue = parseFloat(currentValue.join(''));
    currentOperation = '/';
    clearScreen = true;
    fullOperations.push(lastValue, currentOperation)
    currentOperationDOM.textContent = fullOperations.join(' ');
});

ac.addEventListener('click', () => {
    //change currentvalue to 0
    currentValue = ['0'];
    lastValue = 0;
    showCurrentValue(currentValue);
    clearScreen = true;
    currentOperationDOM.textContent = '';
    fullOperations = []
})

coma.addEventListener('click', () => {
    debugger;
    if (!currentValue.some(value => value === '.')) {
        currentValue.push('.')
    }
    showCurrentValue(currentValue);
})

back.addEventListener('click', () => {
    if (currentValue.length > 0) {
        currentValue.pop();
        showCurrentValue(currentValue);
    }
})

equal.addEventListener('click', () => {
    debugger;
    fullOperations.push(parseFloat(screen.textContent))
    currentOperationDOM.textContent = fullOperations.join(' ');
    console.log(fullOperations)

    let currentValueOp
    for (let i = 1; i < fullOperations.length; i+=2) {
        if (i === 1) {
            currentValueOp = fullOperations[i-1]
        }
        if (fullOperations[i] === '+') {
            currentValueOp = currentValueOp + fullOperations[i+1];
        } else if (fullOperations[i] === '-') {
            currentValueOp = currentValueOp - fullOperations[i+1];
        }
        else if (fullOperations[i] === '*') {
            currentValueOp = currentValueOp * fullOperations[i+1];
        }
        else if (fullOperations[i] === '-') {
            currentValueOp = currentValueOp / fullOperations[i+1];
        }
    }

    console.log(currentValueOp)
    currentValue = currentValueOp.toString().split('');
    showCurrentValue(currentValue);
    fullOperations = []

    // switch (currentOperation) {
    //     case '+':
    //         if (newInput === true) {
    //             operationValue = parseFloat(screen.textContent);
    //             newInput = false;
    //         } 
    //         currentValue = (lastValue + operationValue).toString().split('');
    //         lastValue = parseFloat(currentValue.join(''));
    //         showCurrentValue(currentValue);
    //         clearScreen = false;
    //         break;
    //     case '-':
    //         if (newInput === true) {
    //             operationValue = parseFloat(screen.textContent);
    //             newInput = false;
    //         }
    //         currentValue = (lastValue - operationValue).toString().split('');
    //         lastValue = parseFloat(currentValue.join(''));
    //         showCurrentValue(currentValue);
    //         break;
    //     case '*':
    //         if (newInput === true) {
    //             operationValue = parseFloat(screen.textContent);
    //             newInput = false;
    //         } 
    //         currentValue = (lastValue * operationValue).toString().split('');
    //         lastValue = parseFloat(currentValue.join(''));
    //         showCurrentValue(currentValue);
    //         break;
    //     case '/':
    //         if (newInput === true) {
    //             operationValue = parseFloat(screen.textContent);
    //             newInput = false;
    //         }
    //         if (operationValue != 0) {
    //             currentValue = (lastValue / operationValue).toString().split('');
    //             lastValue = parseFloat(currentValue.join(''));
    //             showCurrentValue(currentValue);
    //         } else {
    //             currentValue = 'Error'.split('')
    //             showCurrentValue(currentValue);
    //             clearScreen = true;
    //         }
    //         break;
    //     default:
    //         currentValue = screen.textContent.split('');
    //         showCurrentValue(currentValue);
    //         break;
    // }
});

const showCurrentValue = (currentValue) => {
    screen.textContent = currentValue.join('');
    if (screen.textContent.length > 8) {
        screen.classList.add('smaller-text')
        screen.classList.remove('smallest-text')
    }
    if (screen.textContent.length <= 8) {
        screen.classList.remove('smaller-text')
        screen.classList.remove('smallest-text')
    }
    if (screen.textContent.length > 14) {
        screen.classList.add('smallest-text')
        screen.classList.remove('smaller-text')
    }
}

const handleScreenClear = () => {
    if (clearScreen === true) {
        currentValue = [];
        clearScreen = false;
    }
}