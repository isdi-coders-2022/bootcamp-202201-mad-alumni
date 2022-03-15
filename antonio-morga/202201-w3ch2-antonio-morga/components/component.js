export class Component {
    template;

    render(selector) {
        document.querySelector(selector).outerHTML = this.template;
    }

    renderInner(selector) {
        document.querySelector(selector).innerHTML = this.template;
    }
}
