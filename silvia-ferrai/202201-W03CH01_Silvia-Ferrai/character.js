export class Character {
    #status = 'live';
    constructor(name, family, age) {
        this.name = name;
        this.family = family;
        this.age = age;
    }
    comunicate() {
        return this.message;
    }
    morir() {
        this.#status = 'dead';
    }
}
