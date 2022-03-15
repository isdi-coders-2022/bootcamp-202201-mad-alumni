import { Component } from './component.js';

export class HeroSearch extends Component {
    constructor() {
        super();
        this.template = this.generateTemplate();
        this.render('#hero-search');
    }

    generateTemplate() {
        const template = `
        <div id="search-component">
            <label for="search-box">Hero Search</label>
            <input #searchBox id="search-box" (input)="search(searchBox.value)" />

            <ul class="search-result">
            </ul>
        </div>`;
        return template;
    }
}
