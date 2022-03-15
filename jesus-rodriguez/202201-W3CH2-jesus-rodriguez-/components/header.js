import { Components } from '../components/components.js';

export class Header extends Components {
  template;
  constructor(title = 'Tour of Heroes') {
    super();
    this.template = `
        <header>
        <h1>${title}</h1>
        <div id="nav"></div>
        </header>`;
  }
}
