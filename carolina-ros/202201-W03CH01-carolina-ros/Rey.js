import { Character } from './Personaje.js';

export class King extends Character {
  constructor(name, family, age, status, yearsRuling, message) {
    super(name, family, age, status, yearsRuling, message);
    this.age = 14;
    this.yearsRuling = 1;
    this.message = 'You are all going to die!';
    this.emoji = '👑';
  }
}
