export class Character {
  constructor(name, family, age, emoji) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.status = 'alive';
    this.emoji = emoji;
  }
  comunicate() {
    return this.message;
  }
  morir() {
    this.status = 'death';
  }
}
