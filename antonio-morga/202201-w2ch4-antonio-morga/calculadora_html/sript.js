let isThereOperator = false; //global variables used on the script are defined here
let operatorSelected;
let firstOperand = 0;
const operand = document.querySelector('#display-text'); //variables hold DOM elements used by the script
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const allClear = document.querySelector('#AC');
const delNumber = document.querySelector('#DEL');
const equal = document.querySelector('#equal');
//functions
const anotherNumber = (number) => {
    //adds a number to the display when the user presses any of the number buttons
    let numberText = number;
    if (isThereOperator) operand.innerHTML = '0';
    isThereOperator = false; //clears the previous number when an operation is chosen
    switch (numberText) {
        case '0': //checks wether there is only a 0 so it is not repeated
            if (operand.innerHTML === '0') {
                return;
            } else operand.innerHTML = operand.innerHTML + numberText;
            break;
        case ',': //when the first element of the number is a ',' the 0 is maintained
            if (operand.innerHTML === '' && numberText === ',') {
                operand.innerHTML = operand.innerHTML + '0' + numberText;
            } else if (
                operand.innerHTML.split('').includes(',') === true &&
                numberText === ','
            ) {
                return;
            } else operand.innerHTML = operand.innerHTML + numberText;
            break;
        default:
            //numbers are apended to the previous ones
            if (operand.innerHTML === '0') operand.innerHTML = '';
            operand.innerHTML = operand.innerHTML + numberText;
            break;
    }
};

const selectOperator = (element) => {
    //the operation is selected by the user among the buttons provided
    cleanOperators();
    firstOperand = parseFloat(operand.innerHTML); //stores the previous number introduced to perform calculation later
    element.style.backgroundColor = '#52190c'; //changes background color to show the operation being performed
    operatorSelected = element.innerHTML; //stores the operator so the calculation will take place when pressing =
    isThereOperator = true;
};

const pressEquals = (previousNumber, operator) => {
    //the operation is performed and the result is printed on the display
    let numberOne = parseFloat(previousNumber);
    let numberTwo = parseFloat(operand.innerHTML);
    if (!numberOne) {
        //in case there is only the current value on the screen, nothing will happen
        cleanOperators();
        return;
    } else {
        switch (
            operator //performs the corresponding operation depending on the button pressed
        ) {
            case '÷':
                operand.innerHTML = (numberOne / numberTwo).toString();
                break;
            case 'x':
                operand.innerHTML = (numberOne * numberTwo).toString();
                break;
            case '-':
                operand.innerHTML = (numberOne - numberTwo).toString();
                break;

            case '+':
                operand.innerHTML = (numberOne + numberTwo).toString();
                break;
        }
    }
    cleanOperators();
    operatorSelected = undefined;
    isThereOperator = true;
};

const clearDisplay = () => {
    cleanOperators();
    operand.innerHTML = '0';
    operatorSelected = undefined;
};

const takeNumber = () => {
    //deletes the last number introduced
    let currentNumberArray = operand.innerHTML.split('');
    operand.innerHTML = currentNumberArray.slice(0, -1).join('');
    if (operand.innerHTML === '') {
        //if all numbers are deleted defaults back to 0
        operand.innerHTML = '0';
    }
};

const cleanOperators = () => {
    //brings the background color of the operator buttons back to default
    operators.forEach((operator) => {
        operator.style.backgroundColor = '#942911';
    });
};
//DOM events
numbers.forEach(() => {
    //calls the anotherNumber function when a number button is presed
    numbers.addEventListener('click', function () {
        anotherNumber(numbers.innerHTML);
    });
});

operators.forEach(() => {
    //calls the selectOperator function when an operator button is presed
    operators.addEventListener('click', function () {
        selectOperator(operators);
    });
});

allClear.addEventListener('click', function () {
    //calls the clearDisplay function when the AC button is presed
    clearDisplay();
});

delNumber.addEventListener('click', function () {
    //calls the takeNumber function when the DEL button is presed
    takeNumber();
});

equal.addEventListener('click', function () {
    //calls the pressEquals function when the = button is presed
    pressEquals(firstOperand, operatorSelected);
});
