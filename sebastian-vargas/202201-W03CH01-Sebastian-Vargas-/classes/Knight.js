import { Character } from './Character.js';
export class Knight extends Character {
    constructor(name, family, age, weapon, skills, status = 'alive') {
        super(name, family, age, status);
        this.weapon = weapon;
        this.skills = skills;
        this.message = 'Primero pego y luego pregunto!';
    }
}
