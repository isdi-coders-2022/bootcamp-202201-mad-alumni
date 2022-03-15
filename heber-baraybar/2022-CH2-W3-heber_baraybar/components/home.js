import { Component } from './component.js';
import { HEROES } from './heroes-array.JS';

export class Home extends Component {
  template;

  constructor(title = 'Top Heroes', subTitle = 'Hero Search') {
    super();
    this.template = `
    <body>
      <h2>${title}</h2>
      <div>`;
    let randomHero = HEROES.slice(0, 4);
    randomHero.forEach((item) => {
      this.template += `<a>${item.name}</a>`;
    });
    this.template += `</div>`;
    this.template += `
  <div>
    <label for = "search-box">${subTitle}</label>
    <input type="text" />
  </div>
</body>
`;
  }
}
