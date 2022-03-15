class Character {
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

Character.prototype.series = "GoT";

class King extends Character {
    constructor(name, family, age, kingYears) {
        super(name, family, age);
        this.kingYears = kingYears;
        this.message = "Vais a morir todos";
    }
    communicate() {
        return this.message;
    }
    morir() {
        this.status = "dead";
    }
}

class Knight extends Character {
    constructor(name, family, age, weapon, skill) {
        super(name, family, age);
        this.weapon = weapon;
        this.skill = skill;
        this.message = "Primero pego, luego pregunto";
    }
    communicate() {
        return this.message;
    }
    morir() {
        this.status = "dead";
    }
}

class Advisor extends Character {
    constructor(name, family, age, patron) {
        super(name, family, age);
        this.patron = patron;
        this.message = "No sé por qué, pero creo que voy a morir pronto";
    }
    communicate() {
        return this.message;
    }
    morir() {
        this.status = "dead";
    }
}

class Squire extends Character {
    constructor(name, family, age, patron, servility) {
        super(name, family, age);
        this.patron = patron;
        this.servility = servility;
        this.message = "Soy un loser";
    }
    communicate() {
        return this.message;
    }
    morir() {
        this.status = "dead";
    }
}

// En buenas practicas, cada clase iría en un fichero, estos se exportarían, importarían entre ellos.

// 2. Una vez hecha toda la estructura, crea a Joffrey Baratheon (rey), Jaime Lannister (luchador),
// a Daenerys Targaryen (luchadora), a Tyrion Lannister (asesor de Daenerys) y a Bronn (escudero de Jaime).

const joffrey = new King("Joffre", "Baratheon"); //el resto de parámetros, al no estar puestos darán undefined
const jaime = new Knight("Jaime", "Lannister");
const danny = new Knight("Daenerys", "Targaryen");
const tyrion = new Advisor("Tyrion", "Lannister");
tyrion.patron = danny;
const bronn = new Squire("Bronn");
bronn.patron = jaime;

// 3. Crea un array con todos los personajes.
const characters = [joffrey, jaime, danny, tyrion, bronn];

// 4. Haz una función que tenga como entrada dicho array y devuelva un array con los mensajes que comunican los luchadores.
function showMessages(characters) {
    return characters
        .filter((item) => item instanceof Knight)
        .map((item) => item.message);
}

console.log(showMessages(characters));

// 5. Imprime por consola el nombre de la serie a la que pertenecen los personajes.

console.log(joffrey.series);

// 6. Recorre el array de mensajes e imprímelos por consola.

characters.forEach((item) => console.log(item.message));

// 7. Mata a Jaime y a Tyrion.

jaime.morir();
