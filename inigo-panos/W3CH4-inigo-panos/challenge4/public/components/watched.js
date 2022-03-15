import { Component } from './componente.js';
import { app } from '../app.js';
import { getData } from '../app.js';

let datos = app();
console.log(arrayOfMovies);

export class Watched extends Component {
  #template;
  constructor() {
    super();

    this.#template = `
            <li class="serie">
                <img
                  class="serie__poster"
                  src="${this.poster}"
                  alt="The Sopranos poster"
                />
                <h4 class="serie__title">${this.name}</h4>
                <p class="serie__info">${this.creator} (${this.year}) (1999)</p>
                <ul class="score">
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="${this.score}"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="${this.score}"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="${this.score}"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="${this.score}"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="${this.score}"></i>
                  </li>
                </ul>
                <i class="fas fa-times-circle icon--delete"></i>
              </li>
        `;
  }
  render(selector) {
    const element = document.querySelector(selector);
    element.outerHTML = this.#template;

    app.moviesArray;
  }
}
