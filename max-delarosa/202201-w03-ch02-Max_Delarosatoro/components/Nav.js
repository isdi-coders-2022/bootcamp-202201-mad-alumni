import { Component } from './Component.js';

export class Nav extends Component {
    constructor(navOptions) {
        super();
        this.template = this.generateTemplate(navOptions);
        this.render('#header__nav');
    }

    generateTemplate(navOptions) {
        let template = `<nav class="header__nav" id="menu">`;
        navOptions.forEach((option) => {
            template += `<a href="${option.path}" class="header__link"><span class="header__link-text">${option.label}</span></a>`;
        });
        template += `</nav>`;

        return template;
    }
}
