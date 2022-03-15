import { Component } from './componente.js';

export class Detail extends Component {
    #template;

    constructor(title = 'Details') {
        super();
        this.#template = `
            <body>
                <div id="HeroDetails"></div>
                <div id="HeroNameForm"></div>
                <ul id="NavigationButtons">
                <li id="GoBack"></li>
                <li id="Save"></li>
                </ul>
            </body>
        `;
    }
}
