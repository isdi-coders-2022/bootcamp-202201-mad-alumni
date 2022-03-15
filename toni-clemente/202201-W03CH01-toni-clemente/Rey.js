import { Character } from "./Personaje.js";

export class King extends Character {
    constructor(name, family, age, kingYears) {
        super(name, family, age);
        this.kingYears = kingYears;
        this.message = "Vais a morir todos";
    }
    communicate() {
        return this.message;
    }
    morir() {
        this.status = "dead";
    }
}
