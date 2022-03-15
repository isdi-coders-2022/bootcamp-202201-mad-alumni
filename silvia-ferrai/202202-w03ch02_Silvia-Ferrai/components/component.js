export class Component {
    template;
    renderI(selector) {
        const element = document.querySelector(selector);
        element.innerHTML = this.template;
    }
}
