import { Character } from './Character.js';
export class King extends Character {
    constructor(name, family, age, reigningYears, status = 'alive') {
        super(name, family, age, status);
        this.reigningYears = reigningYears;
        this.message = 'You will die!';
    }
}
