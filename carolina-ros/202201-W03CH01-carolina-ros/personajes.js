import { King } from './Rey.js';
import { Advisor } from './Asesor.js';
import { Squire } from './Escudero.js';
import { Knight } from './Luchador.js';

const nameKing = new King('Joffrey', 'Baratheon');
const nameKnight = new Knight('Jamie', 'Lannister');
const nameKnightD = new Knight('Daenerys', 'Targaryen');
const nameAdvisor = new Advisor('Tyrion', 'Lannister');
const newSquire = new Squire('Bronn');

export const characters = [
  nameKing,
  nameKnight,
  nameKnightD,
  nameAdvisor,
  newSquire,
];

nameKnight.age = 35;
nameKnight.weapon = 'Sword';
nameKnight.skill = 'Handicap';

nameKnightD.age = 25;
nameKnightD.weapon = 'Dragons';
nameKnightD.skill = 'Mother Of Dragons';
nameKnightD.emoji = '🗡';

console.log(characters);
