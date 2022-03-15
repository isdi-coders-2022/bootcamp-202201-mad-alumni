export class Character {
  #status = 'alive';
  constructor(name, family, age) {
    this.name = name;
    this.family = family;
    this.age = age;
  }
  communicate() {
    return this.message;
  }
  morir() {
    this.status = 'death';
  }
}

Character.prototype.series = 'GoT';
