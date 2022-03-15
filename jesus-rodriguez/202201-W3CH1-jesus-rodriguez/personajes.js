import { Advisor } from './asesor.js';
import { King } from './rey.js';
import { Squire } from './escudero.js';
import { Fighter } from './luchador.js';

const rey = new King('Joffrey Baratheon', 'Targaryen ', 28, 'live', 15);
const luchadorJaime = new Fighter(
  'Jaime',
  'Lannister',
  58,
  'alive',
  'espada',
  5
);
const luchadorTargaryen = new Fighter(
  'Daenerys',
  'Targaryen',
  25,
  'alive',
  'Dragon',
  '10'
);
const asesor = new Advisor(
  'Tyrion',
  'Lannister',
  28,
  'Daenerys Targaryen',
  'alive'
);
const escudero = new Squire(
  'Bronn',
  ' Casa Stokeworth de Stokeworth ',
  29,
  'alive',
  'Jaime Lannister',
  10
);

export const characterArray = [
  rey,
  luchadorJaime,
  luchadorTargaryen,
  asesor,
  escudero,
];
