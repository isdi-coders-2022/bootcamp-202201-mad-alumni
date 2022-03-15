import { Component } from './component.js';

export class Herosearch extends Component {
    template;
    constructor(title = 'Hero Search') {
        super();
        this.template = `
            <section>
                <h2>${title}</h2>
                    <form >
                            <input type="text" >
                    </form>
            </section>`;
    }
}
