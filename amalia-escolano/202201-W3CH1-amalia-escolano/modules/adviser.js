import { Character } from './character.js';

export class Advaiser extends Character {
  constructor(name, family, age, patron, emoji) {
    super(name, family, age, emoji);
    this.patron = patron;
    this.message = 'No sé por qué, pero creo que voy a morir pronto';
    this.emoji = '🎓';
  }
}
