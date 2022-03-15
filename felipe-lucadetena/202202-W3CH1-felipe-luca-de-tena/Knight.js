import { Person } from './Person.js';
export class Knight extends Person {
    constructor(name, family, age, weapon, skill) {
        super(name, family, age);
        this.weapon = weapon;
        this.skill = skill;
        this.message = 'primero pego y luego pregunto';
        this.status = 'live';
    }
}
