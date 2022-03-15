import { Component } from './component.js';

export class NavBar extends Component {
    template;
    constructor(title = 'Tour of Heroes') {
        super();
        this.template = `
        <header>
            <h1>${title}</h1>
            <nav>
                <a href="">Dashboard</a>
                <a href="">Heroes</a>
            </nav>
        </header>
        `;
    }
}
// <a class="button">Narco</a>
// <a class="button">Bombasto</a>
// <a class="button">Celetitas</a>
// <a class="button">Magneta</a>
