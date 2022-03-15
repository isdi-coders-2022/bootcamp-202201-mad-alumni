export class Component {
    template;
    renderOuter(selector) {
        const element = document.querySelector(selector);
        element.outerHTML = this.template;
    }
    renderInner(selector) {
        const element = document.querySelector(selector);
        element.innerHTML = this.template;
    }
}
