import { Personaje } from "./personaje.js";
export class King extends Personaje{
    constructor(nombre,familia,edad,estado,kingYears){
      super(nombre,familia,edad,estado);
      this.kingYears = kingYears;
      this.message = 'Vais a morir todos';
    }
  }