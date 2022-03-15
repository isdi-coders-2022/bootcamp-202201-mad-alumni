import { Component } from './Component.js';
import { heroes } from '../js/mock-heroes.js';

export class Hero extends Component {
    constructor() {
        super();
        this.location = window.location.search || '?hero=11';
        this.heroes = JSON.parse(localStorage.getItem('heroes'))
            ? JSON.parse(localStorage.getItem('heroes'))
            : heroes;
        this.hero = this.findHero();
        this.template = this.generateTemplate(this.hero);
        this.render('#hero');
        this.manageComponent();
    }

    findHero() {
        const heroIdSearched = this.location.split('=')[1];
        const hero = this.heroes.filter(
            (item) => item.id === Number(heroIdSearched)
        );
        return hero[0];
    }

    generateTemplate(hero) {
        let template = `
            <section id='hero' class="hero">
                <h2 class="hero__title">${hero.name.toUpperCase()} Details</h2>
                <span class="hero__id">id: ${hero.id}</span>
                <form class="hero__form">
                    <div class="hero__input-container">
                        <label class="hero__input-label">Hero name:</label>
                        <input class="hero__input" value="${hero.name}">
                    </div>
                    <div class="hero__button-container">
                        <button class="hero__button hero__button--back">Go Back</button>
                        <button class="hero__button hero__button--save">Save</button>
                    </div>
                </form>
            </section>
        `;
        return template;
    }

    manageComponent() {
        const backBtn = document.querySelector('.hero__button--back');
        const saveBtn = document.querySelector('.hero__button--save');
        const inputNode = document.querySelector('.hero__input');

        saveBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const newName = inputNode.value;
            const id = this.hero.id;
            const index = this.heroes.findIndex((hero) => hero.id === id);
            this.heroes[index].name = newName;
            localStorage.setItem('heroes', JSON.stringify(this.heroes));
            this.hero = this.heroes[index];
            this.template = this.generateTemplate(this.hero);
            this.render('#hero');
            this.manageComponent();
        });

        backBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.replace('/pages/heroes.html');
        });
    }
}
