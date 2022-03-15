import { Character } from './personaje.js';
export class King extends Character {
  constructor(name, family, age, status = 'live', reignYears) {
    super(name, family, age, status);
    this.reignYears = reignYears;
    this.message = 'Vais a morir todos';
  }
}
