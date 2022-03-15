import { Adviser } from './classes/Adviser.js';
import { King } from './classes/King.js';
import { Knight } from './classes/Knight.js';
import { Squire } from './classes/Squire.js';
import { Character } from './classes/Character.js';

const joffrey = new King('Joffrey', 'Baratheon', 77, 8);
const jaime = new Knight('Jaime', 'Lannister', 55, 'Knife', 7);
const daenerys = new Knight('Daenerys', 'Targaryen', 35, 'Running', 8);
const tyrion = new Knight('Tyrion', 'Lannister', 44, 'Sword', 10);
const bronn = new Squire('Bronn', 'Peterson', 33, 9);

tyrion.patron = daenerys;
bronn.patron = jaime;

export const chars = [joffrey, jaime, daenerys, tyrion, bronn];

console.log(chars);
