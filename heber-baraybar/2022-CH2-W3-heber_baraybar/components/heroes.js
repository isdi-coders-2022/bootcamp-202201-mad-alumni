import { Component } from './component.js';
import { HEROES } from './heroes-array.js';

export class Heroes extends Component {
  template;
  constructor(
    title = 'My Heroes',
    titleLabel = 'Hero name',
    titleButton = 'Add hero'
  ) {
    super();
    this.template = `
    <div>
    <h2>${title}</h2>
    <label>${titleLabel}</label>
    <input>
    <button>${titleButton}</button>
    </div>`;
    this.template = '<ul><li>';
    HEROES.forEach((item) => {
      this.template += `<a href ='../pages/details.html' >${item.id}${item.name}</a>`;
    });
    this.template += `<button>X</button>`;
    this.template += `</li></ul>`;
  }
}
