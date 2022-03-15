export class Component {
  template;
  render(selector) {
    const element = document.querySelector(selector);
    element.outerHTML = this.template;
    // document.querySelector(selector).outerHTML(this.template);
  }
}
