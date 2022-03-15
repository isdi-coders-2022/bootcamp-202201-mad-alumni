import { Component } from "../components/component.js";
import { Heroes } from "../heroes.js";

export class Topheroes extends Component {
  template;
  heroes;
  constructor(title = "Top Heroes") {
    super();
    this.heroes = JSON.parse(localStorage.getItem("heroes"));

    this.template = `
      <h2>${title}</h2>
      <div>
      <a href="/pages/details.html?id=${this.heroes[1].id}">${this.heroes[1].name}</a>
      <a href="/pages/details.html?id=${this.heroes[2].id}">${this.heroes[2].name}</a>
      <a href="/pages/details.html?id=${this.heroes[3].id}">${this.heroes[3].name}</a>
      <a href="/pages/details.html?id=${this.heroes[4].id}">${this.heroes[4].name}</a>
      </div>
    `;
  }
}
