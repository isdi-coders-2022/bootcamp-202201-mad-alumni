import { Heroes } from './heroes-list.js';
import { Component } from './componente.js';

export class Dashboard extends Component {
    //Basarse en el proyecto de Angular que nos dieron
    template;
    constructor(title = 'Top Heroes', subTitle = 'Hero Search') {
        super();
        this.template = `
        <body>
        <h2>${title}</h2>
        <div>
        `;
        let randomHero = Heroes.slice(0, 4);
        randomHero.forEach((item) => {
            this.template += `<a>${item.name} </a>`;
        });
        this.template += `</div>`;
        this.template += `
        <div>
        <label for = "search-box">${subTitle}</label>
        <input type="text" />
        </div>
        </body>
         `;

        // this.selectedHeroes.forEach((hero) => {
        //     template += `
        //     <p href="/detail.htmlhero=HeroID, HeroName"></p>
        //     `;
        // });
        // console.log('Probando erroes en Dashboard');
    }
}
