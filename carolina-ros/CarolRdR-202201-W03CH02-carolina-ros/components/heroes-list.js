import { HEROES } from '../heroes.data.js';
import { Component } from './component.js';

export class HeroesList extends Component {
    template;
    constructor() {
        super();
        this.heroes = HEROES;

        let template = `<ul>`;
        this.heroes.forEach((item) => {
            template += `<a>${item.name}</a>`;
        });
        template += `</ul>`;

        this.template = template;
    }
}
