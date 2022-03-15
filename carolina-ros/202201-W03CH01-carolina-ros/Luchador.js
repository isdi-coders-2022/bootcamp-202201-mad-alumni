import { Character } from './Personaje.js';

export class Knight extends Character {
  constructor(name, family, age, status, weapon, skill) {
    super(name, family, age, status, weapon, skill);
    this.age = 35;
    this.weapon = weapon;
    this.skill = skill;
    this.message = 'Hit first, then ask';
    this.emoji = '🗡';
  }
}
