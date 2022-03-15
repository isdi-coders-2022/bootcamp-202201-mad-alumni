export class Character {
    constructor(name, family, age) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.state = 'alive';
    }

    series = 'Game of Thrones';

    comunicate() {
        return this.phrase;
    }

    kill() {
        this.state = 'dead';
    }
}
