import { Character } from './personaje.js';

export class Fighter extends Character {
  constructor(name, family, age, status, weapon, skill) {
    super(name, family, age, status);
    this.weapon = weapon;
    this.skill = skill;
    this.message = 'Primero pego y luego pregunto';
  }
}
