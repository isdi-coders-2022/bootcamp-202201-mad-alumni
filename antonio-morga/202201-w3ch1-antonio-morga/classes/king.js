import { Character } from './character.js';

export class King extends Character {
    constructor(name, family, age, reignYears) {
        super(name, family, age);
        this.reignYears = reignYears;
    }

    phrase = 'Vais a morir todos';
}
