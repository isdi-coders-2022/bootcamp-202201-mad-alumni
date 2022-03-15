export class Robot {
  name;

  image;

  speed;

  endurance;

  date;

  constructor(name = "", image = "", speed = "", endurance = "", date = "") {
    this.name = name;
    this.image = image;
    this.speed = speed;
    this.endurance = endurance;
    this.date = date;
  }
}
