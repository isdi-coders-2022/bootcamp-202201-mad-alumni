class Number {
  number;

  isCallActive;

  constructor() {
    this.number = [];
  }
}

export function setNewNumber() {
  // eslint-disable-next-line no-new-wrappers
  return new Number();
}
