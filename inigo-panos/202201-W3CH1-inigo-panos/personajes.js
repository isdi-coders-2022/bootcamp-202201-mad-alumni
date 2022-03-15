import { Personaje } from './personaje.js';
import { Rey } from './rey.js';
import { Escudero } from './escudero.js';
import { Luchador } from './luchador.js';
import { Asesor } from './asesor.js';

const jB = new Rey('Joffrey', 'Baratheon', 18);
const jL = new Luchador('Jamie', 'Lannister', 30);
const dT = new Luchador('Daenerys', 'Targaryen', 26);
const tL = new Asesor('Tyrion', 'Lannister', 30);
tL.patron = dT;
const B = new Escudero('Bronn', '', 69);
B.patron = jL;

jB.imagen = 'img/joffrey.jpg';
jL.imagen = 'img/jaime.jpg';
dT.imagen = 'img/daenerys.jpg';
tL.imagen = 'img/tyrion.jpg';
B.imagen = 'img/bronn.jpg';

export const characters = [jB, jL, dT, tL, B];
