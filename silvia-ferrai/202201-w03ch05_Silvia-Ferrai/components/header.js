import { Component } from './component.js';

export class Header extends Component {
    template;
    constructor() {
        super();
        this.template = '';
        this.generateTemplate();
        this.render('#header');
    }
    generateTemplate() {
        this.template += `
        <h1 class="title">Pokémon</h1>
        <div class="logo-img">
         <img src="/pokemon-logo.svg" alt="pokemon logo"  /></div>
            <nav class="nav-bar">
                <ul class="nav-bar__list">
                    <li ><a class=" nav-bar__list nav-bar__list--button" href="/web/index.html">Home</a></li>
                    <li ><a class=" nav-bar__list nav-bar__list--button" href="/web/favorite.html">Favorite</a></li>
                </ul>
            </nav>

        `;
    }
}
