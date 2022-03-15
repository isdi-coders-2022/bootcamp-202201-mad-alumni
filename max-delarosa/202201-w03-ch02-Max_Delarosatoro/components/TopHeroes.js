import { Component } from './Component.js';
import { heroes } from '../js/mock-heroes.js';

export class TopHeroes extends Component {
    constructor() {
        super();
        this.heroes = JSON.parse(localStorage.getItem('heroes'))
            ? JSON.parse(localStorage.getItem('heroes'))
            : heroes;
        this.topHeroes = this.chooseHeroes();
        this.template = this.generateTemplate(this.topHeroes);
        this.render('#top-heroes');
    }
    chooseHeroes() {
        const sortedArr = this.heroes.sort((a, b) => b.id - a.id);
        const biggestId = sortedArr[0].id + 1;
        const smallestId = sortedArr[sortedArr.length - 1].id;
        const randomNumbers = [];
        const maxLength = this.heroes.length < 4 ? this.heroes.length : 4;
        while (randomNumbers.length < maxLength) {
            const newNumber = Math.floor(
                smallestId + Math.random() * (biggestId - smallestId)
            );
            if (!randomNumbers.includes(newNumber)) {
                randomNumbers.push(newNumber);
            }
        }
        const chosenHeroes = this.heroes.filter((hero) =>
            randomNumbers.includes(hero.id)
        );
        return chosenHeroes;
    }

    generateTemplate(topHeroes) {
        let template = `
        <section class="top-heroes">
            <h2 class="top-heroes__title">Top Heroes</h2>
            <div class="top-heroes__container">
        `;
        topHeroes.forEach((topHero) => {
            template += `<a href="./pages/hero.html?hero=${topHero.id}"><button class="top-heroes__button">${topHero.name}</button></a>`;
        });
        template += `
            </div>
        </section>
        `;

        return template;
    }
}
