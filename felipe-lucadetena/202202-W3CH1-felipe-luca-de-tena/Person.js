export class Person {
    #status = 'live';
    constructor(name, family, age) {
        this.name = name;
        this.family = family;
        this.age = age;
    }
    Greeting() {
        return this.message;
    }
    Die() {
        return (this.#status = 'Death');
    }
}
