import { Personaje } from "./personaje.js";
export class Consejero extends Personaje{
    constructor(nombre,familia,edad,estado,patron){
      super(nombre,familia,edad,estado);
      this.patron = patron;
      this.message = "No se por que...";
   }
  }