import { Character } from './Character.js';
export class Adviser extends Character {
    constructor(name, family, age, status = 'alive', patron) {
        super(name, family, age, status);
        this.patron = patron;
        this.message = 'No sé por que...';
    }
}
