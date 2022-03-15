import { Character } from './personaje.js';
export class Advisor extends Character {
  constructor(name, family, age, client, status) {
    super(name, family, age, status);
    this.client = client;
    this.message = 'No sé por qué, pero creo que voy a morir pronto';
  }
}
