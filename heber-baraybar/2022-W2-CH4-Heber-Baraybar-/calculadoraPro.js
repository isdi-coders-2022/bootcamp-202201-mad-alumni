let resultadoSuma = 0;
let resultadoResta = 0;
let resultadoMultiplica = 0;
let resultadoDivide = 0;

function calculatorPro() {
  let valorIngresado;
  let numeroIngresado;
  let listaNumeros = [];
  do {
    valorIngresado = prompt('Ingrese un numero o cancele');
    if (valorIngresado != null && valorIngresado != '') {
      numeroIngresado = Number(valorIngresado);
      if (isNaN(numeroIngresado)) {
        alert('Ingrese un parametro correcto');
      } else {
        listaNumeros.push(numeroIngresado);
      }
    }
  } while (valorIngresado != '' && valorIngresado != null);

  if (listaNumeros.length >= 2) {
    // Recorrer la variable si tiene al menos dos numero para poder hacer calculos

    for (let i = 0; i < listaNumeros.length; i++) {
      resultadoSuma += listaNumeros[i];
    }

    for (let i = 0; i < listaNumeros.length; i++) {
      if (i === 0) {
        resultadoResta = listaNumeros[0];
      } else {
        resultadoResta -= listaNumeros[i];
      }
    }
    resultadoMultiplica = 1;
    for (let i = 0; i < listaNumeros.length; i++) {
      resultadoMultiplica *= listaNumeros[i];
    }

    for (let i = 0; i < listaNumeros.length; i++) {
      if (i === 0) {
        resultadoDivide = listaNumeros[0];
      } else {
        resultadoDivide /= listaNumeros[i];
      }
    }

    console.log(`El resultado de la suma es : ${resultadoSuma.toFixed(3)}`);
    console.log(`El resultado de la resta es : ${resultadoResta.toFixed(3)}`);
    console.log(
      `El resultado de la Multiplicacion es : ${resultadoMultiplica.toFixed(3)}`
    );
    console.log(
      `El resultado de la Division es : ${resultadoDivide.toFixed(3)}`
    );
  } else if (listaNumeros.length === 1) {
    let raiz = Math.sqrt(listaNumeros[0]);
    console.log(`El resultado de la raiz cuadrada es : ${raiz.toFixed(3)}`);
  }
}
do {
  calculatorPro();
} while (confirm('Deseas hacer otra operacion?'));
