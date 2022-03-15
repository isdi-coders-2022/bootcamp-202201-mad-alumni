
let display = document.querySelector('.display');
let displaytop = document.querySelector('.displaytop');
let clear = document.querySelector('.clear');
let del = document.querySelector('.delete');
let equal = document.querySelector('.equal');
let operators = document.querySelectorAll('.operation');
let numbers = document.querySelectorAll('.number');

let prev = '';
let current = '';
let previousOperation = "";
let dot = false;
let result = null;
display.innerText = '0';

numbers.forEach((number) => {
 number.addEventListener('click', (e) => {
    if(e.target.innerText === "." && !dot) {
        dot = true;
    } else if(e.target.innerText === "." && dot) {
        return;
    }
    current  += e.target.innerText;
    display.innerText = current;
 });
});

operators.forEach((operation) => {
    operation.addEventListener('click', (e) => {
    if(!current) return;
    dot = false;
    const operator = e.target.innerText;
    if(prev && current && previousOperation) {
        operations();
    } else {
        result = parseFloat(current)
    }
    clearVar(operator);
    previousOperation = operator;
   })
});

function clearVar(symbol = "") {
    prev += current + " " + symbol + " ";
    displaytop.innerText = prev;
    display.innerText = "";
    current = "";
}

function operations() {
    if (previousOperation === "x") {
      result = parseFloat(result) * parseFloat(current);
    } else if (previousOperation === "+") {
      result = parseFloat(result) + parseFloat(current);
    } else if (previousOperation === "-") {
      result = parseFloat(result) - parseFloat(current);
    } else if (previousOperation === "÷") {
      result = parseFloat(result) / parseFloat(current);
    } 
}
  
  equal.addEventListener("click", () => {
    if (!current || !prev) return;
    dot = false;
    operations();
    clearVar();
    display.innerText = result;
    current = result;
    prev = "";
  });
  
  clear.addEventListener("click", () => {
    prev = "";
    current = "";
    displaytop.innerText = "0";
    display.innerText = "0";
    result = "";
  });
  
  del.addEventListener("click", () => {
    display.innerText = display.innerText.slice(0, -1);
    current = current.slice(0, -1);
  });