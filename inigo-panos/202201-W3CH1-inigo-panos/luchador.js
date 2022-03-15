import { Personaje } from './personaje.js';
export class Luchador extends Personaje {
    constructor(nombre, familia, edad, estado = 'vivo', arma, destreza) {
        super(nombre, familia, edad, estado);
        this.arma = arma;
        this.destreza = destreza;
        this.message = 'Primero pego y luego pregunto';
    }
}
