export class Components {
  template;
  render(selector) {
    const element = document.querySelector(selector);
    element.outerHTML = this.template;
  }
}
