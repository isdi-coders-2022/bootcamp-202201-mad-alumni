import { Component } from "../components/component.js";

export class Detail extends Component {
  template;

  constructor() {
    super();

    this.heroes = JSON.parse(localStorage.getItem("heroes"));
    let hero = this.wichHero();

    this.template = `
      <h2>${hero.name} details</h2>
      <div>
      <span>id: ${hero.id}</span>
      </div>
      <div>
      <label htmlFor="hero-name"></label>
      <input type="text" value="${hero.name}"/>
      </div>
      <button>Go back</button>
      <button>save</button>
    `;
  }
  wichHero() {
    //Cogemos el ID de la url, filtramos con ese ID devolviendo el objeto
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const heroId = parseInt(urlParams.get("id"), 10);
    console.log(heroId);
    let filteredHeroes = this.heroes.filter((element) => {
      return element.id === heroId;
    });
    return filteredHeroes[0];
  }
}
