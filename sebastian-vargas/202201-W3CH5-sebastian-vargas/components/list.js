import { Component } from './component.js';

export class List extends Component {
  // template;
  constructor(dato, title = 'Poke List') {
    super();
    console.log(dato.results);
    this.template = `
      <h2>${title}</h2>
      <ul>
      `;
    dato.results.forEach(
      (item) =>
        (this.template += `
          <li id=""><a href="details.html?id=${item.name}">${item.name}</a></li>
        `)
    );
    this.template += `
    </ul>
    `;
    // document.querySelector('#list').innerHTML = this.template;
  }
}
