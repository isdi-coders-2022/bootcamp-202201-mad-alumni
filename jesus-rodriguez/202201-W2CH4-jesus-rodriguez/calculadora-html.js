let numUser = [];
let currentValor = 0;
let lastValor = 0;

currentValor = document.querySelector('#valor-actual');
lastValor = document.querySelector('#valor-anterior');

let numButtons = document.querySelectorAll('.number');

numButtons.forEach(function (e) {
    e.addEventListener('click', () => {
        addNum(e.innerHTML);
    });
});

const operationButtons = document.querySelectorAll('.operator');

operationButtons.forEach(function (e) {
    e.addEventListener('click', () => {
        operation(e.innerHTML);
    });
});

let deleteButton = document.querySelector('.delete');
deleteButton.addEventListener('click', () => {
    deleteLast();
});

let cleanButtons = document.querySelector('#clean');

cleanButtons.addEventListener('click', () => {
    clean();
});

let resultButtons = document.querySelector('#result');

resultButtons.addEventListener('click', () => {
    result();
});

function sum(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}
function divide(num1, num2) {
    return Number(num1) / Number(num2);
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

function clean() {
    currentValor.textContent = '';
    lastValor.textContent = '';
    numUser = [];
}

function deleteLast() {
    let valorNum = document.querySelector('#valor-actual').innerText;
    let valorNumSub = valorNum.substring(0, valorNum.length - 1);
    document.querySelector('#valor-actual').innerText = valorNumSub;
}

function addNum(num) {
    currentValor.textContent = currentValor.textContent + num;
}

function operation(opp) {
    currentValor.textContent = currentValor.textContent + opp;
    lastValor.textContent = currentValor.textContent;
    let valorNum = document.querySelector('#valor-actual').innerText;
    let valorNumSub = valorNum.substring(0, valorNum.length - 1);
    numUser.push(valorNumSub);
    currentValor.textContent = '';
    numUser.push(opp);
}

function result() {
    let opeTrue = 0;
    let valueStored = 0;
    let valorNum = document.querySelector('#valor-actual').innerText;
    lastValor.textContent = lastValor.textContent + currentValor.textContent;
    numUser.push(valorNum);

    currentValor.textContent = '';

    numUser.forEach((e, i) => {
        if (opeTrue === 0) {
            if (e === '+') {
                let valor = sum(numUser[i - 1], numUser[i + 1]);
                currentValor.textContent = valor;
                opeTrue = 1;
                valueStored = valor;
            }

            if (e === '-') {
                let valor = subtract(numUser[i - 1], numUser[i + 1]);
                currentValor.textContent = valor;
                opeTrue = 1;
                valueStored = valor;
            }

            if (e === 'x') {
                let valor = multiply(numUser[i - 1], numUser[i + 1]);
                currentValor.textContent = valor;
                opeTrue = 1;
                valueStored = valor;
            }

            if (e === '/') {
                let valor = divide(numUser[i - 1], numUser[i + 1]);
                currentValor.textContent = valor;
                opeTrue = 1;
                valueStored = valor;
            }
        } else {
            if (e === '+') {
                let valor = sum(valueStored, numUser[i + 1]);
                currentValor.textContent = valor;
                opeTrue = 1;
                valueStored = valor;
            }

            if (e === '-') {
                let valor = subtract(valueStored, numUser[i + 1]);
                currentValor.textContent = valor;
                opeTrue = 1;
                valueStored = valor;
            }

            if (e === 'x') {
                let valor = multiply(valueStored, numUser[i + 1]);
                currentValor.textContent = valor;
                opeTrue = 1;
                valueStored = valor;
            }

            if (e === '/') {
                let valor = divide(valueStored, numUser[i + 1]);
                currentValor.textContent = valor;
                opeTrue = 1;
                valueStored = valor;
            }
        }
    });
}
