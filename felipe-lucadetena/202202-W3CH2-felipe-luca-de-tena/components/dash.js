import { Component } from './component.js';

export class Heroeslist extends Component {
    template;
    heroes;
    constructor() {
        super();
        this.heroes = [];
        this.template = this.generateTemplate();
        this.render('#heroes-search');
        this.manageComponent();
    }

    generateTemplate() {
        let template = `
        <div id = "heroes-search">
        <h2>My Heroes</h2>
        <h3>
       Hero name:
       </h3>
        <form>
        <input type="text"  id="new-hero" placeholder="Add hero">
        <button type="submit">Add hero</button>
       </form>
       <ul>
       <a _ngcontent-hdw-c50="" ng-reflect-router-link="/detail/11" href="/detail/11"><span _ngcontent-hdw-c50="" class="badge">11</span> Dr Nice </a>
       <button _ngcontent-hdw-c50="" title="delete hero" class="delete">x</button>`;
        this.heroes.forEach((item) => {
            template += `<li>${item}</li>`;
        });
        template += `
       </ul>  </div> `;
        return template;
    }
    manageComponent() {
        const component = document.querySelector('#heroes-search');
        component.querySelector('form').addEventListener('submit', (ev) => {
            ev.preventDefault();
            this.heroes.push(component.querySelector('input').value);
            component.querySelector('input').value = '';
            this.template = this.generateTemplate();
            this.render('#heroes-search');
            this.manageComponent();
        });
    }
}
