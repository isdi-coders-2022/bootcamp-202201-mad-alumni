import { Character } from './character.js';
export class King extends Character {
    constructor(name, family, age, state = 'live', kingYears = 1) {
        super(name, family, age, state);
        this.kingYears = kingYears;
        this.message = 'Vais a morir todos';
    }
}
