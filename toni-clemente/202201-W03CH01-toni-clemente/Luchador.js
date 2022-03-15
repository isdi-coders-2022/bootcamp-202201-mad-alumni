import { Character } from "./Personaje.js";

export class Knight extends Character {
    constructor(name, family, age, weapon, skill) {
        super(name, family, age);
        this.weapon = weapon;
        this.skill = skill;
        this.message = "Primero pego, luego pregunto";
    }
    communicate() {
        return this.message;
    }
    morir() {
        this.status = "dead";
    }
}
