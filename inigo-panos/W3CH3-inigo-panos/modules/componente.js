export class Component {
    template;
    render(selector) {
        document.querySelector(selector).innerHTML = this.template;
    }
}
