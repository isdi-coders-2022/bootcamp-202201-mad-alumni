import { Component } from "./component.js";


export class Header extends Component {
    template;

    constructor(title = 'Tour of Heroes',secondTitle = 'TOP HEROES'){
        super();
  
        this.template = `
       
        <h1 class="center">${title}</h1>
        <div class="flex">
            <button><a href="">Dashboard</a></button>
            <button><a href="heroes.html">Heroes</a></button>
        </div>
        <h2 class="center">${secondTitle}</h2>
        <div class="flex">
            <button><a href="">Narco</a></button>
            <button><a href="">Bombasto</a></button>
            <button><a href="">Celeritas</a></button>
            <button><a href="">Magneta</a></button>
        </div>
      `;
    }


}