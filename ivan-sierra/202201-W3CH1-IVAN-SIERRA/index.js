import { Personaje } from "./personaje.js";
import { Consejero } from "./asesor.js";
import { Escudero } from "./escudero.js";
import { Knight } from "./luchador.js";
import { King } from "./rey.js";

const jB = new King('Joefreey', 'Baratheon', 25 , 'vivo');
const jL = new Knight('Jamie' ,'Lanister',36,'vivo');
const dT = new Knight('Daenerys', 'Targarean',26,'vivo');
const tL = new Consejero('Tyrion', 'Lanister', 30, 'vivo');
const b = new Escudero('Bronn','gitano', 37,'vivo');
b.patron = jL;
tL.patron = dT;
const personajes = [jB,jL,dT,tL,b];


const plantilla =
    `<li class="character col">
    <div class="card character__card">
      <img
        src="img/no-one.jpg"
        alt="Nombre y familia del personaje"
        class="data-name character__picture card-img-top"
      />
      <div class="card-body">
        <h2 class="character__name card-title h4">${this.nombre} ${this.familia}</h2>
        <div class="character__info">
          <ul class="data-age list-unstyled">
            <li>Edad: ${this.edad} años</li>
            <li>
              Estado:
              <i class="fas fa-thumbs-down"></i>
              <i class="fas fa-thumbs-up"></i>
            </li>
          </ul>
        </div>
        <div class="character__overlay">
          <ul class="data-dates list-unstyled">
            <li>Años de reinado: ${this.kingYears}</li>
            <li>Arma: ${this.weapon}</li>
            <li>Destreza: ${this.skill}</li>
            <li>Peloteo: </li>
            <li>Asesora a: </li>
            <li>Sirve a: ${this.servilismo}</li>
          </ul>
          <div class="character__actions">
            <button class="character__action btn onclick='hablar()'">habla</button>
            <button class="character__action btn onclick='morir()'">muere</button>
          </div>
        </div>
      </div>
      <i class="emoji"></i>
    </div>
  </li>`;


for (let i = 0; i < personajes.length; i++) {
   document.body.innerHTML = plantilla; 
    
}

