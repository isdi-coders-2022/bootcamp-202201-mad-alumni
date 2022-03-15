import { Component } from "./component.js";


export class Details extends Component {
    template;

    constructor(HeroDetails,id,HeroNameForm){
        super();
  
        this.template = `
       
        <h2>${HeroDetails}</h2>
        <h3>${id}</h3>
        
        <div class="flex">
            <label>Hero name:</label>
            <input type="text" placeholder="${HeroNameForm}">
        </div>
        <div class="flex">
            <button><a href="">go Back</a></button>
            <button><a href="">save</a></button>
        </div>
      `;
    }


}