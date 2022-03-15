import { Character } from './character.js';
export class King extends Character {
  constructor(name, family, age, kingYears) {
    super(name, family, age);
    this.kingYears = kingYears;
    this.message = 'Vais a morir todos';
  }
}
