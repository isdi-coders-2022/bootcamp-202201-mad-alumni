import { Person } from './Person.js';
export class Squire extends Person {
    constructor(name, family, age, patron, skill) {
        super(name, family, age);
        this.patron = patron;
        this.skill = skill;
        this.message = 'no se por que....';
        this.status = 'live';
    }
}
