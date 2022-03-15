import { Character } from './character.js';
export class Adviser extends Character {
    constructor(name, family, age, patron) {
        super(name, family, age);
        this.patron = patron;
        this.message = 'No se por que...';
    }
}
