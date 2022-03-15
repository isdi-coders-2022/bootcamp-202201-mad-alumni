import { Component } from './Component.js';

export class Header extends Component {
    constructor() {
        super();
        this.template = this.generateTemplate();
        this.render('#header');
    }

    generateTemplate() {
        let template = `
            <div class="header__container">
                <h1 class="header__h1">
                    <img src="./images/pokemon-logo.svg" alt="Pokémon Logo" class="header__logo">
                </h1>
                <nav class="header__nav">
                    <a href="./index.html" class="header__link">
                        <span class="header__link-text">All Pokémon</span>
                    </a>
                    <a href="./my-pokemons.html" class="header__link">
                        <span class="header__link-text">My Pokémon</span>
                    </a>
                </nav>
            </div>
        `;
        return template;
    }
}
