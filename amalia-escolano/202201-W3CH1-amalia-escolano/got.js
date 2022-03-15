class Character {
  constructor(name, family, age) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.status = 'alive';
  }
  comunicate() {
    return this.message;
  }
  morir() {
    this.status = 'death';
  }
}

Character.staticSeries = 'GoT';
Character.prototype.series = 'GoT';

class King extends Character {
  constructor(name, family, age, kingYears) {
    super(name, family, age);
    this.kingYears = kingYears;
    this.message = 'Vais a morir todos';
  }
}

class Knight extends Character {
  constructor(name, family, age, weapon, skill) {
    super(name, family, age);
    this.weapon = weapon;
    this.skill = skill;
    this.message = 'Primero pego y luego pregunto';
  }
}

class Advaiser extends Character {
  constructor(name, family, age, patron) {
    super(name, family, age);
    this.patron = patron;
    this.message = 'No se por que...';
  }
}

class Squire extends Character {
  constructor(name, family, age, patron, servility) {
    super(name, family, age);
    this.patron = patron;
    this.servility = servility;
    this.message = 'No se por que...';
  }
}

const jB = new King('Joffrey', 'Baratheon');
const jL = new Knight('Jaime', 'Lannister');
const dT = new Knight('Daenerys', 'Targaryen');
const tL = new Advaiser('Tyrion', 'Lannister');
tL.patron = dT;
const b = new Squire('Bronn');
b.patron = jL;

const characters = [jB, jL, dT, tL, b];

function showMessages(characters) {
  // const knigths = characters.filter((item) => item instanceof Knight);
  // const messages = knigths.map((item) => item.message);
  return characters.filter((item) => item instanceof Knight).map((item) => item.message);
}

console.log(showMessages(characters));
console.log(Character.staticSeries);
console.log(jB.series);
characters.forEach((item) => console.log(item.message));

jL.morir();
