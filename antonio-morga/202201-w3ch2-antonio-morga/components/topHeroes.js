import { Component } from './component.js';

export class TopHeroes extends Component {
    constructor(HEROES) {
        super();
        this.heroesArray = HEROES.splice(0, 4);
        this.template = this.generateTemplate();
    }

    generateTemplate() {
        let template = '';
        this.heroesArray.forEach((hero) => {
            template += `<a href="">${hero.name}</a>`;
        });
        return template;
    }
}
