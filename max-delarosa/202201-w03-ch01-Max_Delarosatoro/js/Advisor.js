import { Character } from './Character.js';

export class Advisor extends Character {
    constructor(name, family, age, advises) {
        super(name, family, age);
        this.advises = advises;
    }
    phrase = "I don't know why, but I think I will die soon";
}
