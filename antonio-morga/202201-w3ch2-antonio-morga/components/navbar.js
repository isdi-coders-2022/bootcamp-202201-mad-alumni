import { Component } from './component.js';

export class Navbar extends Component {
    constructor() {
        super();
        this.template = this.generateTemplate();
        this.render('.header');
    }

    generateTemplate() {
        const template = `<header class="header">
            <h1 class="header__title">Tour of Heroes</h1>
            <nav class="nav">
                <a class="nav__item" href="./index.html"><h2>Dashboard</h2></a>
                <a class="nav__item" href="./heroes.html"><h2>Heroes</h2></a>
            </nav>
        </header>`;

        return template;
    }
}
