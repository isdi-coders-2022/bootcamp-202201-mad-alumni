import { Component } from './component.js';

export class Nav extends Component {
    template;
    constructor(options) {
        super();
        this.template = this.createTemplate(options);
    }
    createTemplate(options) {
        let template = ` <h1 class="Title">Tour of Heroes</h1><nav>`;
        options.forEach((item) => {
            template += `<a href="${item.path}">${item.label}</a>`;
        });
        template += `</nav>`;
        return template;
    }
}
