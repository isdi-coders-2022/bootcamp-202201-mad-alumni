export class Component {
    template;

    async renderInner(selector) {
        document.querySelector(selector).innerHTML = await this.template;
    }

    async renderOuter(selector) {
        document.querySelector(selector).outerHTML = await this.template;
    }
}
