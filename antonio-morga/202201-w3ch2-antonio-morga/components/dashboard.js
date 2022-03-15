import { Component } from './component.js';
import { TopHeroes } from './topHeroes.js';

export class Dashboard extends Component {
    constructor(HEROES) {
        super();
        this.topHeroes = new TopHeroes(HEROES);
        this.template = this.generateTemplate();
        this.render('#dashboard');
    }

    generateTemplate() {
        let template = `
            <section class="top-heroes">
                <h2>Top Heroes</h2>
                <div class="heroes-menu">`;
        template += this.topHeroes.template;
        template += `</div>
            </section>
            <div id="hero-search"></div>`;

        return template;
    }
}
