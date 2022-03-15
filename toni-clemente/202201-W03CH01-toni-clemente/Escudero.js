import { Character } from "./Personaje.js";

export class Squire extends Character {
    constructor(name, family, age, patron, servility) {
        super(name, family, age);
        this.patron = patron;
        this.servility = servility;
        this.message = "Soy un loser";
    }
    communicate() {
        return this.message;
    }
    morir() {
        this.status = "dead";
    }
}
