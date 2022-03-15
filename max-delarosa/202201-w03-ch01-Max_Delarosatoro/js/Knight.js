import { Character } from './Character.js';

export class Knight extends Character {
    constructor(name, family, age, weapon, dexterity) {
        super(name, family, age);
        this.weapon = weapon;
        this.dexterity = dexterity;
    }
    phrase = 'First I hit, then I ask';
}
