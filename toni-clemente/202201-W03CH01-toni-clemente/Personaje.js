export class Character {
    #status = "alive"; // es una variable privada
    constructor(name, family, age) {
        this.name = name;
        this.family = family;
        this.age = age;
    }
    communicate() {}
    morir() {
        this.status = "dead";
    }
}
