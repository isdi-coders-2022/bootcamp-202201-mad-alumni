import { Person } from './Person.js';
export class King extends Person {
    constructor(name, family, age, yearsasking) {
        super(name, family, age);
        this.yearsasking = yearsasking;
        this.message = 'Vais a morir';
        this.status = 'live';
    }
}
