import { Character } from './Personaje.js';

export class Advisor extends Character {
  constructor(name, family, age, status, patron) {
    super(name, family, age, status, patron);
    this.age = 30;
    this.patron = 'Daenerys Targaryen';
    this.message = "I'am not sure why, but I believe I am going to die soon";
    this.emoji = '🎓';
  }
}
