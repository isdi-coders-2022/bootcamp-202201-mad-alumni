export class Personaje{
    constructor(nombre,familia,edad,estado){
      this.nombre = nombre;
      this.familia = familia;
      this.edad = edad;
      this.estado = 'vivo';  
    }
    hablar(){
      return this.message
    }
    morir(){
      this.estado = 'muerto'; 
       }
}