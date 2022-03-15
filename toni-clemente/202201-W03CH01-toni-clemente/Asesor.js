import { Character } from "./Personaje.js";

export class Advisor extends Character {
    constructor(name, family, age, patron) {
        super(name, family, age);
        this.patron = patron;
        this.message = "No sé por qué, pero creo que voy a morir pronto";
    }
    communicate() {
        return this.message;
    }
    morir() {
        this.status = "dead";
    }
}
