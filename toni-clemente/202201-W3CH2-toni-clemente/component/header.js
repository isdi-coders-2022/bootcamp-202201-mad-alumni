import { Component } from './component.js';
export class Header extends Component {
    template;
    constructor(title = 'Tour of Heroes') {
        super();
        this.template = `
            <header>
                <h1>${title}</h1>
                <nav>
                    <ul>
                        <li><a href="index.html">Dashboard</a></li>
                        <li><a href="heroes.html">Heroes</a></li>
                    </ul>
                </nav>
            </header>
            `;
    }
}
