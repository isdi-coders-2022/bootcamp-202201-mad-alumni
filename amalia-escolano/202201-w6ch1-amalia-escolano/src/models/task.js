export class Task {
  id;

  name;

  responsible;

  isCompleted;

  constructor(name = "", responsible = "") {
    this.id = parseInt(Math.random() * 1_000_000_000, 10);
    this.name = name;
    this.responsible = responsible;
    this.isCompleted = false;
  }
}
