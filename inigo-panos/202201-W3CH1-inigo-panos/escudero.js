import { Personaje } from './personaje.js';

export class Escudero extends Personaje {
    constructor(nombre, familia, edad, estado = 'vivo', patron, servilismo) {
        super(nombre, familia, edad, estado);
        this.patron = patron;
        this.servilismo = servilismo;
        this.message = 'No sé por qué, creo que voy a morir pronto';
    }
}
