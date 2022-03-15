export class Character {
  constructor(name, family, age, status) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.status = status;
  }
  communicate() {
    return this.message;
  }
  die() {
    this.status = 'dead';
  }
}
