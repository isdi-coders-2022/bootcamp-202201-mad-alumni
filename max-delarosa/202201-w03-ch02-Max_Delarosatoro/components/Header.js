import { Component } from './Component.js';

export class Header extends Component {
    constructor(title = 'Tour of Heroes') {
        super();
        this.template = `
            <header id="header" class="header">
                <h1 class="header__title">${title}</h1>
                <div id="header__nav"></div>
            </header>
        `;
        this.render('#header');
    }
}
