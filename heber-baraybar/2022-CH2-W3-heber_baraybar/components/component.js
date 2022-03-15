export class Component {
  template;
  render(selector) {
    document.querySelector(selector).inn = this.template;
  }
}
