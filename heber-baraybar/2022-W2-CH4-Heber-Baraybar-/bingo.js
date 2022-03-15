let playerName = "";
let numeros = new Array(3);  // creo un array con 3 filas 
let numerosYaSalidos = [];
let pointsCounter = 100;
let reapeatNumbers = [];
let pointsPlayers = [
    {name: "Juan", points: 45},
    {name: "Pedro", points: 25 },
    {name: "Adrian", points: 55 },
    {name: "julia", points: 15 }
];

for (let i = 0; i < 3; i++) {
    numeros[i] = new Array(5);   // A cada una de las tres filas le creamos cinco columnas.
    for (let j = 0; j < 5; j++) {
        numeros[i][j] = 0;
    }
}

playerName = prompt("Ingrese su nombre");
let player = {name:playerName, points: 100};


do{
carton();
}while(confirm("Desea cambiar de carton?"));

let lineaCantada = false;
do {
    
    if (confirm("Deseas otro numero")) {
        gamble();
        console.table(numeros);
        if(!lineaCantada){
            lineaCantada = verifyLine();
        }
        verifyBingo();
    
    } else {
        break;
    }
} while (!verifyBingo()); 
player.points = pointsCounter;
pointsPlayers.push(player);

//console.table(pointsPlayers);
showResults();


function carton() {
    for (let fila = 0; fila < 3; fila++) {
        for (let columna = 0; columna < 5; columna++) {
            let repetido = false;
            let numero = 0;
            do {
                numero = parseInt(Math.random() * 98 + 1);
                repetido = false;
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 5; j++) {
                        if (numeros[i][j] === numero) {
                            repetido = true;
                            break;
                        }
                    }
                    if (repetido) {
                        break;
                    }
                }
            } while (repetido);
            numeros[fila][columna] = numero;
        }

    }
    console.table(numeros);
}
function gamble(){
    
    let foundNumber = false;
    let numero = 0;
    
    do{
        numero = parseInt(Math.random() * 98 + 1);
        //Si el número ya ha salido en tiradas anteriores (está en repeatNumbers) lo ignoramos y generamos otro
        //sin preguntar al usuario.
        foundNumber = false;
        for(let j = 0; j < reapeatNumbers.length; j++){
            //if(numero ===j){    //Estaba asi originalmente.
            if(numero === reapeatNumbers[j]){
                    foundNumber = true;
                break;   //Como se ha encontrado no tiene sentido seguir en el for j y salimos.
            }
        }
    }while(foundNumber);
    reapeatNumbers.push(numero);
    pointsCounter--;
    for(let fila = 0; fila < 3; fila++){
        for(let columna = 0; columna < 5; columna++){
            if(numeros[fila][columna] === numero){   
                numeros[fila][columna] = "X" 
            }
        }
    }
    
}
function verifyLine(){
    console.log(lineaCantada);
    let i = 0;
    for(i = 0; i < numeros.length; i++){
        let flag = false;
        for(let j = 0; j < numeros[i].length; j++){
            if(numeros[i][j] != "X"){
                flag = true;
                break;
            }
        }
        if(!flag){
            alert("Linea !!!!");
            break;
        }
    }
    if(i === numeros.length){ // si i alcanza nummeros.length significa q el for termino todas sus vueltas sin cantar linea
        return false;
    }else{
        return true;
    }
}
function verifyBingo(){
    
    for (let i = 0; i < numeros.length; i++) {
        for(let j = 0; j < numeros[i].length; j++){
            if(numeros[i][j] != "X"){
                return false;
            }
        }
        
    }
    alert("Bingo!!!!!!!");
    return true;   
}
function verifyNumber(number){
    let yaSalido = numerosYaSalidos.forEach((num) =>{
        return num === number;
    });
}
function showResults() {
    pointsPlayers.sort(function (playerA, playerB) {
        return playerA.points - playerB.points;
    });

    let lastResults = "";
    pointsPlayers.forEach((player) => {
        lastResults += `El resultado para el jugador ${player.name} es ${player.points} puntos\n`;
    });
    console.log(lastResults);
};

