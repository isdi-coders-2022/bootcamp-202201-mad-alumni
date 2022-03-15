export class Components {
  template;
  render(selector) {
    const element = document.querySelector(selector);
    element.innerHTML = this.template;
  }
}
