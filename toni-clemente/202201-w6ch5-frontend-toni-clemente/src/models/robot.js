export class Robot {
  name;
  image;
  speed;
  stamina;
  date;

  constructor(name = "", image = "", speed = "", stamina = "", date = "") {
    //this.id = parseInt(Math.random() * 1_000_000_000, 10);
    this.name = name;
    this.image = image;
    this.speed = speed;
    this.stamina = stamina;
    this.date = date;
  }
}
