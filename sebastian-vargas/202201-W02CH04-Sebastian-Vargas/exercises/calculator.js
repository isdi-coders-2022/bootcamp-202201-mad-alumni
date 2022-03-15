function calculator() {
    let resultado = [];

    let num1 = parseFloat(prompt('Escriba el primer número.'));

    if (isNaN(num1)) {
        console.log('No escribió números.');
        alert('No escribió un número. Inténtelo de nuevo.');
        return calculator();
    } else {
        console.log(`Primer número: ${num1}.`);
    }

    let num2 = parseFloat(
        prompt(
            'Escriba un segundo número si quiere. \nSi no, solo pulse aceptar.'
        )
    );

    if (isNaN(num2)) {
        console.log('No escribió un segundo número.');
        num1 % 2 === 0 || num1 % 2 === 1
            ? resultado.push(Math.sqrt(num1))
            : resultado.push(Math.sqrt(num1).toFixed(3));
        if (resultado[0] % 2 !== 0 || resultado[0] % 1 !== 1) {
            resultado[0] = resultado[0].toFixed(2);
        }
        console.log(
            `Resultado: la raíz cuadrada de ${num1} es ${resultado[0]}.`
        );
        return alert(`La raíz cuadrada de ${num1} es ${resultado[0]}.`);
    } else {
        console.log(`Segundo número: ${num2}.`);
        let suma = num1 + num2;
        suma % 2 === 0 || suma % 2 === 1
            ? resultado.push(suma)
            : resultado.push(suma.toFixed(3));
        let resta = num1 - num2;
        resta % 2 === 0 || resta % 2 === 1
            ? resultado.push(resta)
            : resultado.push(resta.toFixed(3));
        let multi = num1 * num2;
        multi % 2 === 0 || multi % 2 === 1
            ? resultado.push(multi)
            : resultado.push(multi.toFixed(3));
        let div = num1 / num2;
        div % 2 === 0 || div % 2 === 1
            ? resultado.push(div)
            : resultado.push(div.toFixed(3));
        console.log(`Suma de ${num1} y ${num2}: ${resultado[0]}.`);
        console.log(`Resta de ${num1} y ${num2}: ${resultado[1]}.`);
        console.log(`Multiplicación de ${num1} y ${num2}: ${resultado[2]}.`);
        console.log(`División de ${num1} y ${num2}: ${resultado[3]}.`);
    }
    return alert(`El resultado de la suma de ${num1} y ${num2} es ${resultado[0]}.
El resultado de la resta de ${num1} y ${num2} es ${resultado[1]}.
El resultado de la multiplicación de ${num1} y ${num2} es ${resultado[2]}.
El resultado de la división entre ${num1} y ${num2} es ${resultado[3]}.`);
}

calculator();
