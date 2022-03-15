import { Personaje } from "./personaje.js";
export class Escudero extends Personaje{
    constructor(nombre,familia,edad,estado,patron,servilismo){
      super(nombre,familia,edad,estado);
      this.patron = patron;
      this.servilismo = servilismo;
      this.message = "No se por que...";
   }
  }