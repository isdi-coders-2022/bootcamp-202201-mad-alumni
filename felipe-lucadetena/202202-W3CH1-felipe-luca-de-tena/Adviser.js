import { Person } from './Person.js';

export class Adviser extends Person {
    constructor(name, family, age, patron) {
        super(name, family, age);
        this.patron = patron;
        this.message = 'no se por que....';
        this.status = 'live';
    }
}
