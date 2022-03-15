import { Character } from './Character.js';

export class King extends Character {
    constructor(name, family, age, yearsRuling) {
        super(name, family, age);
        this.yearsRuling = yearsRuling;
    }
    phrase = 'You will all die';
}
