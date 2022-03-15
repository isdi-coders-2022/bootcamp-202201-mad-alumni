export class Personaje {
    constructor(nombre, familia, edad, estado = 'vivo') {
        this.nombre = nombre;
        this.familia = familia;
        this.edad = edad;
        this.estado = estado;
    }
    comunicate() {
        return this.message;
    }
    morir() {
        this.status = 'muerto';
    }
}

Personaje.staticSeries = 'GoT';
Personaje.prototype.series = 'GoT';

// import { Rey } from './rey.js';
// import { Luchador } from './luchador.js';
// import { Asesor } from './asesor.js';
// import { Escudero } from './escudero.js';
