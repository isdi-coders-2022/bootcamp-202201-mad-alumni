import { Component } from './Component.js';
import { heroes } from '../js/mock-heroes.js';

export class HeroSearch extends Component {
    constructor() {
        super();
        this.template = this.generateTemplate();
        this.render('#hero-search');
        this.manageComponent();
        this.heroes = JSON.parse(localStorage.getItem('heroes'))
            ? JSON.parse(localStorage.getItem('heroes'))
            : heroes;
    }

    generateTemplate() {
        let template = `
        <div class="hero-search">
            <h3 class="hero-search__title">Hero Search</h3>
            <input type="text" class="hero-search__input">
        </div>
        `;
        return template;
    }

    manageComponent() {
        document
            .querySelector('.hero-search__input')
            .addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.handleEnter(e.target.value);
                }
            });
    }

    handleEnter(query) {
        const result = this.heroes.filter((hero) =>
            hero.name.toLowerCase().includes(query)
        );
        if (result !== undefined) {
            let template = `<div id="search-result" class="search-result">`;
            result.forEach((item) => {
                template += `<a class="search-result__link" href="./pages/hero.html?hero=${item.name}"><p class="search-result__item">${item.name}</p></a>`;
            });
            template += `</div>`;
            document.querySelector('#search-result').outerHTML = template;
        } else if (result === undefined)
            document.querySelector(
                '#search-result'
            ).innerHTML = `<div id="search-result"></div>`;
    }
}
