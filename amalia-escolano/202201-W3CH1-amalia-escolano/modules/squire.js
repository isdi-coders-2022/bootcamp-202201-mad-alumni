import { Character } from './character.js';

export class Squire extends Character {
  constructor(name, family, age, patron, servility) {
    super(name, family, age);
    this.patron = patron;
    this.servility = servility;
    this.message = 'Soy un loser';
    this.emoji = '🛡';
  }
}
