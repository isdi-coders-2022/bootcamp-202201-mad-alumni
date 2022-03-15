import { Personaje } from "./personaje.js";
export class Knight extends Personaje{
    constructor(nombre,familia,edad,estado,weapon,skill){ 
      super(nombre,familia,edad,estado);
      this.weapon = weapon;
      this.skill = skill;
      this.message = 'Primero pego y luego pregunto';
    }
  }