import { Component } from './component.js';

export class Newheroeform extends Component {
    template;
    constructor(title = 'Hero Name') {
        super();
        this.template = `
            <section>
                <h2>${title}</h2>
                    <form >
                            <input type="text" id="addheroe" placeholder="Add heroe" />
                            <button type="submit">Add</button>
                    </form>
            </section>`;
    }
}
