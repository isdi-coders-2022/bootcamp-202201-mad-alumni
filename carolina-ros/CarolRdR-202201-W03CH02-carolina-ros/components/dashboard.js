import { HEROES } from '../heroes.data.js';
import { Component } from './component.js';

export class Dashboard extends Component {
    template;
    heroes;
    constructor(title = 'Top Heroes') {
        super();

        this.template = `
        <h2>${title}</h2>
        <div>
           <a>${HEROES[1].name}</a>
           <a>${HEROES[2].name}</a>
           <a>${HEROES[3].name}</a>
           <a>${HEROES[4].name}</a>
         </div>
         `;
    }
}
