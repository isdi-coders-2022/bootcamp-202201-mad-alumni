let numUser = [];
let valorActual = 0;
let valorAnterior = 0;

valorActual = document.querySelector("#valor-actual");
valorAnterior = document.querySelector("#valor-anterior");

//BUTTONS
let numButtons = document.querySelectorAll(".numero");

numButtons.forEach(function (e) {
  e.addEventListener("click", () => {
    addNum(e.innerHTML);
  });
});

let operButtons = document.querySelectorAll(".operator");

operButtons.forEach(function (e) {
  e.addEventListener("click", () => {
    operar(e.innerHTML);
  });
});

let deleteButton = document.querySelector(".delete");
deleteButton.addEventListener("click", () => {
  deleteLast();
});

let cleanButtons = document.querySelector("#clean");

cleanButtons.addEventListener("click", () => {
  clean();
});

let resultButtons = document.querySelector("#result");

resultButtons.addEventListener("click", () => {
  result();
});

//OPERATIONS
function sumar(num1, num2) {
  return Number(num1) + Number(num2);
}

function restar(num1, num2) {
  return Number(num1) - Number(num2);
}
function divi(num1, num2) {
  return Number(num1) / Number(num2);
}

function multi(num1, num2) {
  return Number(num1) * Number(num2);
}

//BUTTON FUNCION
function clean() {
  valorActual.textContent = "";
  valorAnterior.textContent = "";
  numUser = [];
}

function deleteLast() {
  let valorNum = document.querySelector("#valor-actual").innerText;
  let valorNumSub = valorNum.substring(0, valorNum.length - 1);
  document.querySelector("#valor-actual").innerText = valorNumSub;
}

function addNum(num) {
  valorActual.textContent = valorActual.textContent + num;
}

function operar(opp) {
  valorActual.textContent = valorActual.textContent + opp;
  valorAnterior.textContent = valorActual.textContent;
  let valorNum = document.querySelector("#valor-actual").innerText;
  let valorNumSub = valorNum.substring(0, valorNum.length - 1);
  numUser.push(valorNumSub);
  valorActual.textContent = "";
  numUser.push(opp);
}

function result() {
  let opeTrue = 0;
  let valueStored = 0;
  let valorNum = document.querySelector("#valor-actual").innerText;
  valorAnterior.textContent =
    valorAnterior.textContent + valorActual.textContent;
  numUser.push(valorNum);

  valorActual.textContent = "";

  numUser.forEach((e, i) => {
    if (opeTrue === 0) {
      if (e === "+") {
        let valor = sumar(numUser[i - 1], numUser[i + 1]);
        valorActual.textContent = valor;
        opeTrue = 1;
        valueStored = valor;
      }

      if (e === "-") {
        let valor = restar(numUser[i - 1], numUser[i + 1]);
        valorActual.textContent = valor;
        opeTrue = 1;
        valueStored = valor;
      }

      if (e === "x") {
        let valor = multi(numUser[i - 1], numUser[i + 1]);
        valorActual.textContent = valor;
        opeTrue = 1;
        valueStored = valor;
      }

      if (e === "/") {
        let valor = divi(numUser[i - 1], numUser[i + 1]);
        valorActual.textContent = valor;
        opeTrue = 1;
        valueStored = valor;
      }
    } else {
      if (e === "+") {
        let valor = sumar(valueStored, numUser[i + 1]);
        valorActual.textContent = valor;
        opeTrue = 1;
        valueStored = valor;
      }

      if (e === "-") {
        let valor = restar(valueStored, numUser[i + 1]);
        valorActual.textContent = valor;
        opeTrue = 1;
        valueStored = valor;
      }

      if (e === "x") {
        let valor = multi(valueStored, numUser[i + 1]);
        valorActual.textContent = valor;
        opeTrue = 1;
        valueStored = valor;
      }

      if (e === "/") {
        let valor = divi(valueStored, numUser[i + 1]);
        valorActual.textContent = valor;
        opeTrue = 1;
        valueStored = valor;
      }
    }
  });
}
