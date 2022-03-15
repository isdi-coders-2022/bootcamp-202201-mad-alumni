import { Components } from '../components/components.js';

export class Nav extends Components {
  template;
  constructor(options) {
    super();
    this.template = this.createTemplate(options);
  }

  createTemplate(options) {
    let template = `<nav ><ul class="nav">`;
    options.forEach((element) => {
      template += `<li class="nav__item"><a href="${element.path}">${element.label}</a></li>`;
    });

    template += `</nav></ul>`;

    return template;
  }
}
