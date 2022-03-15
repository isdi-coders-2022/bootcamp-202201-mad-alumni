import { Personaje } from './personaje.js';

export class Rey extends Personaje {
    constructor(nombre, familia, edad, estado = 'vivo', añosReinado) {
        super(nombre, familia, edad, estado);
        this.añosReinado = añosReinado;
        this.message = 'Vais a morir todos';
    }
}
