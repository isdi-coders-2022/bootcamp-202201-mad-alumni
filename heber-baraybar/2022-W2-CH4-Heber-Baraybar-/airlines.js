let flights = [
    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];

let nombre = prompt("Indique su nombre por favor");
if (nombre) {
    alert(`Bienvenido ${nombre}`)
} else {
    alert("Bienvenido")
} 

function airlines(){
    let vuelosProgramdados = "";
    
    flights.forEach(function(vuelos){
        vuelosProgramdados += `El vuelo : ${vuelos["id"]}, procedente de: ${vuelos["from"]} con destino: ${vuelos["to"]}, ${vuelos["scale"] ? "realiza" : "no realiza"} escalas y tiene un coste de: ${vuelos["cost"]} euros.\n`
    })
    console.log(vuelosProgramdados);
}
function airlines2() {
    let vuelosProgramdados = "";

    for(let i = 0; i < flights.length; i++){
        vuelosProgramdados += `El vuelo : ${flights[i]["id"]}, procedente de: ${flights[i]["from"]} con destino: ${flights[i]["to"]}, ${flights[i]["scale"] ? "realiza" : "no realiza"} escalas y tiene un coste de: ${flights[i]["cost"]} euros.\n`
    }
    
    console.log(vuelosProgramdados);
}
airlines2()  
airlines()



function costoMedio(){
    
    let costeTotal = 0;
    let costeMedio = 0;
    flights.forEach(function(vuelos){
    costeTotal += vuelos["cost"];
    })
    costeMedio = costeTotal / flights.length;
    return costeMedio;
}
function vuelosConEscalas(){
    let vuelosConEscalas = 0;
    flights.forEach(function(escalas){
        if(escalas["scale"]){
            vuelosConEscalas++;
        }
    })
    return vuelosConEscalas
}
function ultimosVuelosDia2() {
    let ultimosVuelosDia = "";
    let inicio = flights.length -5 < 0 ? 0 : flights.length -5; // ? === if , : === else;
    let fin = flights.length -1;
    for(let i = inicio; i <= fin; i++){
        ultimosVuelosDia += `${flights[i]["to"]}  `;
    }
    return ultimosVuelosDia
}
function ultimosVuelosDia(){
    let destinos = [];
    let ultimosVuelosDia = [];
    for(let i = 0; i < flights.length; i++){
        destinos.push(flights[i]["to"])
        ultimosVuelosDia = destinos.slice(-5);
    }
    return ultimosVuelosDia
}
console.log(`El coste medio de los vuelos es ${costoMedio().toFixed(2)}`);
console.log(`Cantidad de vuelos con escalas ${vuelosConEscalas()}`);
console.log(`Los ultimos 5 ultimos destinos del dia son ${ultimosVuelosDia()}`);
console.log(`Los ultimos 5 ultimos destinos del dia son ${ultimosVuelosDia2()}`);


