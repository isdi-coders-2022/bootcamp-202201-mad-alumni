export class Character {
  constructor(name, family, age, status) {
    this.name = name;
    this.age = age;
    this.family = family;
    this.status = 'Alive';
  }

  comunicate() {
    return this.message;
  }
  die() {
    this.status = 'isDeath';
  }
}

Character.prototype.series = 'GoT';
