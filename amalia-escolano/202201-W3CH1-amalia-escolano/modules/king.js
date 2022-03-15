import { Character } from './character.js';

export class King extends Character {
  constructor(name, family, age, kingYears, emoji) {
    super(name, family, age, emoji);
    this.kingYears = kingYears;
    this.message = 'Vais a morir todos';
    this.emoji = '👑';
  }
}
