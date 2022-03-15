/*
TEMA 7 - JAVASCRIPT & DOM
Proyecto Calculadora HTML + CSS + JS ➗➕
Mediante HTML y CSS realizar una calculadora convencional. Importante NO utilizar el método eval():
*/


// Esta función se activa al pulsar el botón "AC"
// Borra toda la pantalla


function deleteAll(){
    pantalla.value = parseInt(0);    
}


// Esta función se activa al pulsar el botón "←"
// Borra un caracter de la pantalla.
// Si en la pantalla hay solo un "0", no lo borrará.

function deleteCh(){
        if (pantalla.value === '0' || pantalla.value === ''){
            pantalla.value = '0';
        } else {
        pantalla.value = pantalla.value.substring(0, pantalla.value.length - 1); //borra el último caracter
        if (pantalla.value === '0' || pantalla.value === ''){
            pantalla.value = '0';
        }
        }
}


// Esta función se activa al pulsar cualquier botón de número o carácter aritmético.
// Con esta función añadimos un caracter a la pantalla de la calculadora.
function add(key){
    let contenido;

    // Convertimos los números introducidos en tipo número. El resto de caracteres los dejamos igual:    
    if (isNaN(key)){
        contenido = key;
    } else {
        contenido = parseFloat(key);
    }

    // Nos aseguramos que se borra al 0 inicial al empezar a introducir números en la calculadora.
    // Únicamente se borrará la pantalla en caso de que esté en 0 y se pulsen números.
    if (pantalla.value === '0' && !(isNaN(key))){
        pantalla.value = '';
    }
    console.log(contenido)
    pantalla.value = pantalla.value + contenido;
}


// Esta función se activa al pulsar el botón "="
// Con esta función calculamos las operaciones que tengamos en pantalla.
function calculate(){
    // Se comprueba a través de una expresión regular que la operación que hay en pantalla
    // no contiene ningún caracter alfabético. Si es así mostrará "error" en pantalla.    
    if (pantalla.value.match(/[a-zA-Z]+$/)){    //
        pantalla.value = 'error';
    } else {
        var func = new Function("return " + pantalla.value);    
        pantalla.value = func();  
    }
}


// He creado varios eventos para que se activen las funciones al pulsarse los botones de
// la calculadora

let deleteAllButton = document.querySelector("#boton_borrar");
deleteAllButton.addEventListener('click', deleteAll )

let deleteChButton = document.querySelector("#boton_borrar_Ch")
deleteChButton.addEventListener('click', deleteCh)

let calculateButton = document.querySelector("#boton_calcular")
calculateButton.addEventListener('click', calculate)


// Aquí los botones para meter números y valores aritméticos:
let addButton1 = document.querySelector("#boton_1")
addButton1.addEventListener('click', function() {
    add(this.value);
});

let addButton2 = document.querySelector("#boton_2")
addButton2.addEventListener('click', function() {
    add(this.value);
});

let addButton3 = document.querySelector("#boton_3")
addButton3.addEventListener('click', function() {
    add(this.value);
});

let addButton4 = document.querySelector("#boton_4")
addButton4.addEventListener('click', function() {
    add(this.value);
});

let addButton5 = document.querySelector("#boton_5")
addButton5.addEventListener('click', function() {
    add(this.value);
});

let addButton6 = document.querySelector("#boton_6")
addButton6.addEventListener('click', function() {
    add(this.value);
});

let addButton7 = document.querySelector("#boton_7")
addButton7.addEventListener('click', function() {
    add(this.value);
});

let addButton8 = document.querySelector("#boton_8")
addButton8.addEventListener('click', function() {
    add(this.value);
});

let addButton9 = document.querySelector("#boton_9")
addButton9.addEventListener('click', function() {
    add(this.value);
});

let addButton0 = document.querySelector("#boton_0")
addButton0.addEventListener('click', function() {
    add(this.value);
});

let addButtonPlus = document.querySelector("#boton_Plus")
addButtonPlus.addEventListener('click', function() {
    add(this.value);
});

let addButtonMinus = document.querySelector("#boton_Minus")
addButtonMinus.addEventListener('click', function() {
    add(this.value);
});

let addButtonMult = document.querySelector("#boton_Mult")
addButtonMult.addEventListener('click', function() {
    add('*');
});

let addButtonDiv = document.querySelector("#boton_Div")
addButtonDiv.addEventListener('click', function() {
    add(this.value);
});

let addButtonComma = document.querySelector("#boton_Comma")
addButtonComma.addEventListener('click', function() {
    add('.');
});

