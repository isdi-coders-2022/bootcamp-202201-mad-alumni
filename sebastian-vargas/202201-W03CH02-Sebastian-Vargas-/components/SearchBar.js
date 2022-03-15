import { Component } from './component.js';

export class SearchBar extends Component {
    template;
    constructor(title = 'Heroe Search') {
        super();
        this.template = `
            <form>
                <label for="search-box">${title}</label>
                <input id="search-box"></input>
            </form>
        `;
    }
}
