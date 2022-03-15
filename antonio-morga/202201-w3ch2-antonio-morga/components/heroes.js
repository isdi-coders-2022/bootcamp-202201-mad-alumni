import { Component } from './component.js';

export class Heroes extends Component {
    constructor(heroList) {
        super();
        this.storeName = 'Heroes';
        this.heroList = heroList;
        this.template = this.generateTemplate(this.heroList);
        this.renderInner('#heroes');
        this.addHero(this.heroList);
        this.deleteHero(this.heroList);
    }

    generateTemplate(heroList) {
        let template = `
        <h2>My Heroes</h2>

        <div>
            <label for="new-hero">Hero name: </label>
            <form action="">
                <input id="new-hero" required/>
                <button type="submit" class="add-button">
                    Add hero
                </button>
            </form>
        </div>`;

        heroList.forEach((hero, index) => {
            template += `
            <ul class="heroes">
                <li class="hero heroes">
                    <a routerLink="/detail/${hero.id}">
                        <span class="badge">${hero.id}</span> ${hero.name}
                    </a>
                    <button class="delete ${index}" title="delete hero">x</button>
                </li>
            </ul>`;
        });
        return template;
    }

    addHero(heroList) {
        const element = document.querySelector('form');
        element.addEventListener('submit', (ev) => {
            ev.preventDefault();

            this.heroList.push({
                id: heroList[heroList.length - 1].id + 1,
                name: document.querySelector('#new-hero').value,
            });
            localStorage.setItem(this.storeName, JSON.stringify(this.heroList));
            document.querySelector('#new-hero').value = '';

            this.template = this.generateTemplate(this.heroList);
            this.renderInner('#heroes');
            this.addHero(heroList);
            this.deleteHero(heroList);
        });
    }

    deleteHero(heroList) {
        const elements = document.querySelectorAll('.delete');
        elements.forEach((button) => {
            button.addEventListener('click', () => {
                this.heroList.splice(button.classList[1], 1);
                localStorage.setItem(
                    this.storeName,
                    JSON.stringify(this.heroList)
                );

                this.template = this.generateTemplate(this.heroList);
                this.renderInner('#heroes');
                this.deleteHero(heroList);
            });
        });
    }
}
