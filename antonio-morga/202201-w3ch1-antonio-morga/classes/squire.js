import { Character } from './character.js';

export class Squire extends Character {
    constructor(name, family, age, peloteo, patron) {
        super(name, family, age);
        this.peloteoLevel = peloteo;
        this.patron = patron;
    }

    phrase = 'Soy un loser';
}
