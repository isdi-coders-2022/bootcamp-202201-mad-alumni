import { Component } from './component.js';

export class Header extends Component {
  template;
  constructor(title = 'PokeApi') {
    super();
    this.template = `
    <header>
      <img src="./img/pokemon-logo.svg" alt="pokemon-logo" />
      <h1>${title}</h1>
    </header>
    `;
  }
}
