// import { HEROES } from '../heroes.data';
// import { Component } from './component.js';

export class Detail extends Component {
    #template;
    constructor(selector) {
        super();
        this.heroeId = Number(location.search.split('=')[1]);

        this.selectedHeroe = HEROES.find((item) => item.id === this.heroId);
        this.#template = this.#createTemplate();
        this.render(selector, this.#template);
    }

    #createTemplate() {
        let template = `
             <h2>${this.selectedHeroe.name.toUpperCase()} Details</h2>
             <div>
                 <span>id: </span>${this.heroeId}
             </div>`;

        template += `
            <div>
                <label for="hero-name">Hero name: </label>
                <input id="hero-name" placeholder="Hero name/>
            </div>

            <button (click)="goBack()">go back</button>
            <button (click)="save()">save</button>`;

        return template;
    }
}
