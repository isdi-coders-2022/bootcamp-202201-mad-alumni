import { Component } from './component.js';

export class Button extends Component {
  template;
  constructor() {
    super();
    this.template = `
      <form>
      <button type="button" id="prevButton">Previous</button>
      <button type="button" id="nextButton">Next</button>
      </form>
      `;
  }
  // prevButton() {
  //   console.log('FUNCIONA');
  // }
  // nextButton(info) {
  //   let url = info.next;
  //   document.querySelector('#nextButton').addEventListener('click', () => {
  //         this.template = `
  //     <h2>${title}</h2>
  //     <ul>
  //     `;
  //   dato.results.forEach(
  //     (item) =>
  //       (this.template += `
  //         <li id=""><a href="details.html?id=${item.name}">${item.name}</a></li>
  //       `)
  //   );
  //   this.template += `
  //   </ul`
  //  })
  // }
}
