import { Component } from './component.js';
export class Header extends Component {
    template;
    constructor(title = 'Tour of Heroes') {
        super();
        this.template = `
            <header>
                <h1>${title}</h1>
                <nav>
                <a href="../index.html">Dashboard</a>
                <a href="../pages/heroes.html">Heroes</a>
                </nav>
            </header>`;
    }
}
