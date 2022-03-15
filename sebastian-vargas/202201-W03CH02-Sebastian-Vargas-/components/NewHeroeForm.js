import { Component } from './component.js';

export class NewHeroForm extends Component {
    template;
    constructor(title = 'My Heroes') {
        super();
        this.template = `
            <h2>${title}</h2
            <form>
                <label></label>
                <input type=""></input>
                <button></button>
            </form>
        `;
    }
}
