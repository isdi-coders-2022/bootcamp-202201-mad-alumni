import { Character } from './character.js';
export class Knight extends Character {
  constructor(name, family, age, bravery, weapons) {
    super(name, family, age);
    this.bravery = bravery;
    this.weapons = weapons;
    this.message = 'Soy el mas fuerte';
  }
}
