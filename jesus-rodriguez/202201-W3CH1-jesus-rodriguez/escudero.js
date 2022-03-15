import { Character } from './personaje.js';
export class Squire extends Character {
  constructor(name, family, age, status, client, servility) {
    super(name, family, age, status);
    this.client = client;
    this.message = 'Soy un loser';
    this.servility = servility;
  }
}
