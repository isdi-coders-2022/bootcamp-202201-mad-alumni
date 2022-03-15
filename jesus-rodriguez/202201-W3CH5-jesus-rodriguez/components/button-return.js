import { Components } from './components.js';

export class ButtonReturn extends Components {
  template;
  constructor() {
    super();
    this.template = this.createTemplate();
    this.render('.button-content-return');
    this.managementComponent();
  }

  createTemplate() {
    this.template = `

         <button class="button-content-return__button-return"><a>Volver</a></button>

    `;
    return this.template;
  }

  managementComponent() {
    let buttonReturn = document.querySelector('.button-content-return');

    buttonReturn.addEventListener('click', () => {
      window.location.href = './index.html';
    });
  }
}
