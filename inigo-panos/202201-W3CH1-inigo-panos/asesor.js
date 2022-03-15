import { Personaje } from './personaje.js';

export class Asesor extends Personaje {
    constructor(nombre, familia, edad, estado = 'vivo', patron) {
        super(nombre, familia, edad, estado);
        this.patron = patron;
        this.message = 'No sé por qué, creo que voy a morir pronto';
    }
}
