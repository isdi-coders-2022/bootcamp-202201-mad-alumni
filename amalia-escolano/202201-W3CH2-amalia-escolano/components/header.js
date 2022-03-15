import { Component } from "./component.js";

export class Header extends Component {
  template;

  constructor(title = "Tour of Heroes") {
    super();

    this.template = `
      <header id="header">
        <h1 class="header__title">${title}</h1>
        <ul>
        <li><a href="/index.html">Dashboard</a></li>
        <li><a href="/pages/heroes.html">Heroes</a></li>
        </ul>
      </header>
    `;
  }
}
