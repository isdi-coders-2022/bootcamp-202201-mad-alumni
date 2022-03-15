export class Character {
    constructor(name, family, age) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.status = 'alive';
    }

    talk() {
        return this.phrase;
    }

    die() {
        this.status = 'dead';
    }
}
