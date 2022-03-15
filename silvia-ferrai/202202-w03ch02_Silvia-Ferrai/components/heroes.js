import { Component } from './component.js';
import { HEROES } from '../components/heroes-list.js';

export class Heroes extends Component {
    template;
    constructor(title = 'My Heroes') {
        super();

        this.template = `
        <h2>${title}</h2>
        <div>
        <label for="new-hero">Hero name: </label>
        <input type="text" id="new-hero" />
        <button class="add-button"> Add hero </button>
        </div>
        `;
        this.template += `<ul>`;
        HEROES.forEach((element) => {
            this.template += `<a href="../pages/details.html"> ${element.id} ${element.name}</a>
            <button class="delete">x</button>`;
        });
        this.template += `</ul>`;
    }
}
