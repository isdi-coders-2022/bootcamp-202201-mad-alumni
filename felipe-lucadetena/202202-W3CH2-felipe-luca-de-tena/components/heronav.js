import { Component } from './component.js';

export class Heronav extends Component {
    template;
    constructor(options) {
        super();
        this.template = this.createTemplate(options);
    }
    createTemplate(options) {
        let template = `<h2>Top Heroes</h2><div> `;
        options.forEach((item) => {
            template += `<a href="${item.path}">${item.label}</a>`;
        });
        template += `</div>`;
        return template;
    }
}
