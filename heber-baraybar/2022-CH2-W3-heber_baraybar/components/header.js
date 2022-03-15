import { Component } from './component.js';

export class Header extends Component {
  template;

  constructor(title = 'Tour of heroes') {
    super();
    this.template = `
      <header>
        <h1>${title}</h1>
        <nav>
         <a href="#home">Dashboard</a>
          <a href="#heroes.html">Heroes</a>
          
          </ul>
          </nav>
      </header> 
`;
  }
}
