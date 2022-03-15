import { Component } from './component.js';

export class Detail extends Component {
    constructor(HEROES) {
        super();
        this.template = this.generateTemplate({ name: 'soler', id: 12 });
        this.render('#detail');
    }

    generateTemplate(hero) {
        const template = `
        <div *ngIf="hero">
            <h2>${hero.name.toUpperCase()} Details</h2>
            <div><span>id: </span>${hero.id}</div>
            <div>
                <label for="hero-name">Hero name: </label>
                <input id="hero-name" placeholder="${hero.name}"/>
            </div>
            <button href="/heroes.html">go back</button>
            <button >save</button>
        </div>`;
        return template;
    }
}
