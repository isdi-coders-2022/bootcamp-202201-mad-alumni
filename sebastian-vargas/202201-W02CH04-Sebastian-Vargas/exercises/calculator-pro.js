function calculatorPro() {
    let nuevoNum;
    let listaNum = [];
    let resultados = [];
    let suma = 0;
    let resta = 0;
    let multi = 1;
    let div = 1;
    let res;

    function pregunta() {
        res = prompt(
            '¿Quiere realizar más operaciones?\nEscriba "s" o "n", y pulse "Aceptar".'
        );
        switch (res) {
            case 'n':
            case null:
                console.log('No opera más.');
                alert('Hasta otra.');
                break;
            case 's':
            case '':
                console.log('Sigue operando.');
                return calculatorPro();
        }
    }
    // Inserción de números.
    do {
        nuevoNum = prompt('Escriba un número o pulse cancelar.');
        if (nuevoNum === null) {
            if (listaNum.length === 0) {
                console.log('No ha insertado ningún número.');
                alert('No ha insertado ningún número.');
                return pregunta();
            } else {
                console.log(`Los números insertados son: ${listaNum}.`);
            }
        } else if (isNaN(parseFloat(nuevoNum))) {
            console.log('No insertó un numero.');
            alert('Eso no es un número. Inténtelo de nuevo.');
        } else {
            console.log(`Número insertado: ${parseFloat(nuevoNum)}.`);
            listaNum.push(parseFloat(nuevoNum));
        }
    } while (nuevoNum !== null);
    // Operación con los números insertados.
    for (let i = 0; i < listaNum.length; i++) {
        if (listaNum.length === 1) {
            console.log(
                `Se pasó la raíz cuadrada de ${listaNum} a "resultados".`
            );
            resultados.push(Math.sqrt(listaNum[i]));
        } else {
            suma += listaNum[i];
            resta -= listaNum[i];
            multi *= listaNum[i];
            div /= listaNum[i];
            if (i === listaNum.length - 1) {
                console.log(`Se pasaron las operaciones a "resultados".`);
                resultados.push(suma);
                resultados.push(resta);
                resultados.push(multi);
                resultados.push(div);
            }
        }
    }
    // Ajuste de los números decimales resultantes.
    let i = 0;
    while (i < resultados.length) {
        if (!resultados[i] % 1 === 0) {
            resultados[i] = resultados[i].toFixed(3);
        }
    }
    // Presentación de los resultados de las operaciones.
    if (resultados.length === 1) {
        alert(`La raíz cuadrada de ${listaNum[0]} es: ${resultados[0]}.`);
    } else {
        console.log(`Resultado de la suma: ${resultados[0]}.`);
        console.log(`Resultado de la resta: ${resultados[1]}.`);
        console.log(`Resultado de la multiplicación: ${resultados[2]}.`);
        console.log(`Resultado de la división: ${resultados[3]}.`);
        alert(`El resultado de la suma es: ${resultados[0]}.
El resultado de la resta es: ${resultados[1]}.
El resultado de la multiplicación es ${resultados[2]}.
El resultado de la división es ${resultados[3]}.`);
    }

    pregunta();
}
calculatorPro();
