import { Components } from './components.js';

export class Header extends Components {
  template;
  constructor() {
    super();
    this.template = this.createTemplate();
    this.render('.header');
  }

  createTemplate() {
    this.template = `
    <img class="header__logo" src="/images/logo.svg " alt="" />
    `;
    return this.template;
  }
}
