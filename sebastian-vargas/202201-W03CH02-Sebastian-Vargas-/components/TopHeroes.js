import { Component } from './component.js';

export class TopHeroes extends Component {
    template;
    constructor(title = 'Top Heroes') {
        super();
        this.template = `
        <h2>${title}</h2>
        <nav>
            <a class="button">Narco</a>
            <a class="button">Bombasto</a>
            <a class="button">Celeritas</a>
            <a class="button">Magneta</a>
        </nav>
        `;
    }
}
