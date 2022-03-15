
let num1 = Number(prompt("Escoja un numero "));
let num2 = Number(prompt("Escoja otro numero"));
if (isNaN(num1) || isNaN(num2)){
    alert("No es un numero, intentalo otra vez")
}

const suma = num1 + num2;
const resta = num1 - num2;
const multiplica = num1 * num2;
const divide =  num1 / num2;

let result = [];



if (!num1 && num2){
    alert(`La raiz cuadrada del numero introducido es:  ${Math.sqrt(num2).toFixed(3)}`)
}else if(!num2 && num1){
   alert(`La raiz cuadrada del numero es: ${Math.sqrt(num1).toFixed(3)}`)
   
}else if(!num1 && !num2){
    alert('esbribe al menos un numero')
}else{

        result = [`El resultado de la suma es: ${(num1 + num2).toFixed(3)}`,
                `El resultado de la resta es ${resta.toFixed(3)}`,
                `El resultado de la multiplicacion es ${multiplica.toFixed(3)}`,
                `El resultado de la divide es ${divide.toFixed(3)}`];
    }
 for(let i = 0; i < result.length; i++){
     console.log(result[i]);
 }

