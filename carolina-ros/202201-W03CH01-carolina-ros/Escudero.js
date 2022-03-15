import { Character } from './Personaje.js';

export class Squire extends Character {
  constructor(name, family, age, status, patron, skill) {
    super(name, family, age, status, patron, skill);
    this.age = 40;
    this.family = 'Unknown';
    this.patron = 'Jamie Lannister';
    this.skill = 'Sword and machete';
    this.message = 'I am a loser';
    this.emoji = '🛡';
  }
}
