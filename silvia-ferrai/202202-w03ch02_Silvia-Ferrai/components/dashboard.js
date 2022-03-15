import { Component } from './component.js';
import { HEROES } from './heroes-list.js';

export class Dashboard extends Component {
    template;
    constructor(title = 'Top Heroes', search = 'Hero search') {
        super();

        this.template = `
        <h2>${title}</h2>
            <div id="heroes">`;
        const heroesFiltered = HEROES.splice(0, 4);
        heroesFiltered.forEach((element) => {
            this.template += `<a>${element.name}</a>`;
        });
        this.template += `</div>`;

        this.template += `
        <div class="search">
        <label for="search-box">${search}</label>
        <input type="text"  id="search-box"/>
        <button></button>
        </div>
        `;
    }
}
