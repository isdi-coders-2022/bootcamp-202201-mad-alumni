let currentValue = [];

let num1 = 0;
let num2 = 0;
let resultado = 0;

let currOperation;
let previousOperation;
let lastOperation;
let paso2 = false;
let prueba;

const screen = document.getElementById("valorPro");
const previousNumber = document.getElementById("valorPre");

const erase = document.querySelector(".erase");

const tdNumber = document.querySelectorAll(".num");
const tdOperation = document.querySelectorAll(".operacion");

let clearScreen = document.getElementById("c");
let coma = document.querySelector(".coma");

screen.textContext = "0";

function showScreen() {
    screen.textContent = " ";
    previousNumber.textContent = " ";
}

showScreen();

// Si se pulsa C
clearScreen.addEventListener("click", emptyScreen);

// Coma
coma.addEventListener("click", () => {
    if (!currentValue.includes(".")) {
        currentValue.push(coma.innerHTML);
        console.log(currentValue);
        screen.textContent = currentValue.join("");
    } else {
        console.log("Ya hay una coma!");
    }
});

//Eventos de números
tdNumber.forEach((td) => {
    td.addEventListener("click", () => {
        currentValue.push(parseFloat(td.innerHTML));
        screen.textContent = currentValue.join("");
        console.log("Actualizada la pantalla");
    });
});

//Eventos de operaciones
tdOperation.forEach((td) => {
    td.addEventListener("click", () => {
        prueba = td.innerHTML;
        setOperation();
    });
});

function setOperation() {
    if (/*resultado == 0 &&*/ !paso2) {
        //Si no hay un resultado anterior, se ejecuta normal
        checkOperation(prueba);
        console.log("1");
        paso2 = true;
    } else if (paso2) {
        //Si hay un resultado anterior, el resultado tiene que ser num1
        console.log("2");
        console.log("Num1 = " + num1);
        Operate(currOperation);
        previousOperation = currOperation;
        currOperation = prueba;

        //Se cambia el num1 por resultado, resultado igual a 0 y se vacía num2 para que se actualice con los nuevos números
        previousNumber.textContent =
            num1 + " " + previousOperation + " " + num2;
        num1 = resultado;
        num2 = 0;
    } else {
        alert("Algo pasa");
    }
}

function checkOperation(operativo) {
    //Aquí se guarda num1
    if (resultado === 0) {
        //Si no hay un resultado anterior, es decir, es la primera vez que se introduce un número
        num1 = currentValue.join("");
        num1 = Number.parseFloat(num1);
        currentValue.splice(0, currentValue.length);
        previousNumber.textContent = num1;
    } //Si hay un resultado anterior, es decir, después de una operación se busca hacer otra.
    switch (operativo) {
        case "+":
            currOperation = "+";
            previousNumber.textContent = num1 + " " + currOperation;
            break;

        case "-":
            currOperation = "-";
            previousNumber.textContent = num1 + " " + currOperation;
            break;

        case "*":
            currOperation = "*";
            previousNumber.textContent = num1 + " " + currOperation;
            break;

        case "/":
            currOperation = "/";
            previousNumber.textContent = num1 + " " + currOperation;
            break;

        case "=": // = Hecho
            if (currOperation == undefined) {
                return num1;
            } else {
                console.log("Se ha elegido mostrar el resultado");
                Operate(currOperation);
                showResults();
            }
            break;

        default:
            alert("Error 404: Este operativo no existe :(");
    }
}

//OPERACIONES

function Operate(operar) {
    //Resultado, PASO 4
    num2 = currentValue.join("");
    num2 = Number.parseFloat(num2);
    currentValue.splice(0, currentValue.length);

    switch (operar) {
        case "+":
            resultado = num1 + num2;
            console.log("Resultado: " + resultado);
            break;

        case "-":
            resultado = num1 - num2;
            console.log("Resultado: " + resultado);
            break;

        case "*":
            resultado = num1 * num2;
            console.log("Resultado: " + resultado);
            break;

        case "/":
            resultado = num1 / num2;
            console.log("Resultado: " + resultado);
            break;
    }

    lastOperation = num1 + " " + currOperation + " " + num2 + " = " + resultado;
    console.log(lastOperation);
    screen.textContent = resultado;
    paso2 = false;
}

function showResults() {
    previousNumber.textContent = " ";
    screen.textContent = resultado.toFixed(2);
    currOperation = undefined;
}

function emptyScreen() {
    currentValue.splice(0, currentValue.length);
    num1 = 0;
    num2 = 0;
    resultado = 0;
    previousNumber.textContent = " ";
    screen.textContent = " ";
}

erase.addEventListener("click", deleteLastNumber);

function deleteLastNumber() {
    console.log(currentValue);
    currentValue.pop();
    screen.textContent = currentValue.join("");
}
