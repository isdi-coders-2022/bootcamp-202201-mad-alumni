import { heroes } from '../js/mock-heroes.js';
import { Component } from './Component.js';

export class MyHeroes extends Component {
    constructor() {
        super();
        this.heroes = JSON.parse(localStorage.getItem('heroes'))
            ? JSON.parse(localStorage.getItem('heroes'))
            : heroes;
        this.template = this.generateTemplate(this.heroes);
        this.render('#my-heroes');
        this.manageComponent();
    }

    generateTemplate(heroes) {
        let template = `
        <div id="my-heroes">
        <section class="my-heroes">
            <h2 class="my-heroes__title">My Heroes</h2>
            <form class="my-heroes__input-container">
                <h3 class="my-heroes__input-title">Hero name:</h3>
                <input class="my-heroes__input" type="text">
                <button type="submit" class="my-heroes__submit-button">Add hero</button>
            </form>
            `;
        heroes.forEach((hero) => {
            template += `
            <div class="my-heroes__hero-outside-container">
                <a href="./hero.html?hero=${hero.id}" class="my-heroes__hero-link">
                <div class="my-heroes__hero-container">
                    <span class="my-heroes__hero-id">${hero.id}</span>
                    <p class="my-heroes__hero-name">${hero.name}</p>
                    </div>
                </a>
                <span id="${hero.id}" class="my-heroes__delete-button">X</span>
            </div>
            `;
        });
        template += `</section></div>`;
        return template;
    }

    manageComponent() {
        const input = document.querySelector('.my-heroes__input');
        const submitBtn = document.querySelector('.my-heroes__submit-button');
        const deleteBtn = document.querySelectorAll(
            '.my-heroes__delete-button'
        );

        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();

            let uppercaseName = input.value.split('');
            uppercaseName[0] = uppercaseName[0].toUpperCase();
            uppercaseName = uppercaseName.join('');

            const newHero = {
                id: this.heroes.sort((a, b) => b.id - a.id)[0].id + 1,
                name: uppercaseName,
            };
            this.heroes.push(newHero);
            localStorage.setItem(
                'heroes',
                JSON.stringify(this.heroes.sort((a, b) => a.id - b.id))
            );
            this.template = this.generateTemplate(
                this.heroes.sort((a, b) => a.id - b.id)
            );
            this.render('#my-heroes');
            this.manageComponent();
        });

        deleteBtn.forEach((button) => {
            button.addEventListener('click', (e) => {
                const id = e.target.getAttribute('id');
                const heroIndex = this.heroes.findIndex(
                    (hero) => hero.id === Number(id)
                );
                this.heroes.splice(heroIndex, 1);
                localStorage.setItem(
                    'heroes',
                    JSON.stringify(this.heroes.sort((a, b) => a.id - b.id))
                );
                this.template = this.generateTemplate(
                    this.heroes.sort((a, b) => a.id - b.id)
                );
                this.render('#my-heroes');
                this.manageComponent();
            });
        });
    }
}
