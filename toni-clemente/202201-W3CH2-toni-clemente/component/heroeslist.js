import { Component } from './component.js';
import { heroes } from '../heroes.data.js';

export class Heroeslist extends Component {
    template;
    constructor(title = 'Tour of Heroes') {
        super();
        this.template = `
            <section>
                <h2>${title}</h2>
                <nav>
                    <ul>`;
        heroes.forEach((item) => {
            this.template += `<li><span>${item.id}</span><span>${item.name}</span></li>`;
        });
        `</ul>
                </nav>
            </section>`;
    }
}

/*

        <ul>`;
        this.tasks.forEach((item) => {
            template += `<li>${item}</li>`;
        });
        template += `
        </ul>

*/
