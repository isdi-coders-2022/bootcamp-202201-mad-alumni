let expresion = [];
let sign;
let oneComma = true;

let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#zero");

let comma = document.querySelector("#comma");
let minus = document.querySelector("#minus");
let plus = document.querySelector("#plus");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");

let equal = document.querySelector("#equal");
let clear = document.querySelector("#clear");
let result = document.querySelector("#result");

one.addEventListener("click", () => {
  result.innerText += "1";
  expresion.push("1");
});
two.addEventListener("click", () => {
  result.innerText += "2";
  expresion.push("2");
});
three.addEventListener("click", () => {
  result.innerText += "3";
  expresion.push("3");
});
four.addEventListener("click", () => {
  result.innerText += "4";
  expresion.push("4");
});
five.addEventListener("click", () => {
  result.innerText += "5";
  expresion.push("5");
});
six.addEventListener("click", () => {
  result.innerText += "6";
  expresion.push("6");
});
seven.addEventListener("click", () => {
  result.innerText += "7";
  expresion.push("7");
});
eight.addEventListener("click", () => {
  result.innerText += "8";
  expresion.push("8");
});
nine.addEventListener("click", () => {
  result.innerText += "9";
  expresion.push("9");
});
zero.addEventListener("click", () => {
  result.innerText += "0";
  expresion.push("0");
});

comma.addEventListener("click", showComma);
clear.addEventListener("click", allClear);

plus.addEventListener("click", () => {
  result.innerText += "+";
  sign = "+";
  expresion.push("+");
  clearComma();
});
multiply.addEventListener("click", () => {
  result.innerText += "*";
  sign = "*";
  expresion.push("*");
  clearComma();
});
minus.addEventListener("click", () => {
  result.innerText += "-";
  sign = "-";
  expresion.push("-");
  clearComma();
});
divide.addEventListener("click", () => {
  result.innerText += "/";
  sign = "/";
  expresion.push("/");
  clearComma();
});
equal.addEventListener("click", total);

function clearComma() {
  oneComma = true;
}

function showComma() {
  let display = result.innerText;
  if (display === "") {
    result.innerText += "0.";
    expresion.push("0.");
  } else if (oneComma) {
    result.innerText += ".";
    expresion.push(".");
  }
  oneComma = false;
}
function allClear() {
  expresion = [];
  sign = "";
  result.innerText = "";
  oneComma = true;
}

function total() {
  let resultExpresion = "";
  let runExpresion = 0;
  runExpresion = expresion.join("");
  let regExp = /([-+]?[0-9]*\.?[0-9]+[\/\+\-\*])+([-+]?[0-9]*\.?[0-9]+)/;
  if (runExpresion.match(regExp)) {
    resultExpresion = eval(runExpresion);
  }
  allClear();
  result.innerText = resultExpresion;
}
