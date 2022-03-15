import { Components } from '../components/components.js';

export class ListHeroes extends Components {
  template;
  constructor(list) {
    super();
    this.template = this.createTemplate(list);
    this.render('#list-heroes');
  }

  createTemplate(list) {
    let template = `<div class="container-list" ><ul class="list-heroes-container">`;
    list.forEach((heroe) => {
      template += `
     
        <li class="">
          <a class="list-heroes-container__item" href="/details.html?hero=${heroe.id}">
            <span class="list-heroes-container__item-id">${heroe.id}</span>
            <span class="list-heroes-container__item-name">${heroe.name}</span>
          </a>
        </li>
   
`;
    });

    template += `</ul></div>`;

    return template;
  }
}
