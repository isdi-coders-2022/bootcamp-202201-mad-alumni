import { Character } from './character.js';

export class Counselor extends Character {
    constructor(name, family, age, patron) {
        super(name, family, age);
        this.counseled = patron;
    }

    phrase = 'No sé por qué, pero creo que voy a morir pronto';
}
