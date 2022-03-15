export class Character {
    constructor(name, family, age, status) {
        (this.name = name),
            (this.family = family),
            (this.age = age),
            (this.state = status);
    }
    communicate() {}
    dies() {
        this.status = 'dead';
    }
}
