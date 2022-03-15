export class Component {
  template;
  render(selector) {
    const element = document.querySelector(selector);
    element.outerHTML = this.template;
  }
  renderInner(selector) {
    const element = document.querySelector(selector);
    element.innerHTML = this.template;
  }

  // deleteHero(index) {//esta funcion tiene que se global
  //   this.heroes.splice(index, 1);
  //   localStorage.setItem("heroes", JSON.stringify(this.heroes));
  //   this.template = this.generateTemplate();
  //   this.renderInner("#heroeslist");
  // }
}
