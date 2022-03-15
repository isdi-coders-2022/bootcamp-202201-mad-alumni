import { Character } from "./Personaje.js";
import { Advisor } from "./Asesor.js";
import { Squire } from "./Escudero.js";
import { Knight } from "./Luchador.js";
import { King } from "./Rey.js";

const joffrey = new King("Joffrey", "Baratheon", 22, 1); //el resto de parámetros, al no estar puestos darán undefined
const jaime = new Knight("Jaime", "Lannister", 45);
const danny = new Knight("Daenerys", "Targaryen", 24);
const tyrion = new Advisor("Tyrion", "Lannister", 46);
const bronn = new Squire("Bronn", "", 40);

tyrion.patron = danny;
bronn.patron = jaime;

joffrey.image = "./img/joffrey.jpg";
danny.image = "./img/daenerys.jpg";
jaime.image = "./img/jaime.jpg";
bronn.image = "./img/bronn.jpg";
tyrion.image = "./img/tyrion.jpg";

export const characters = [joffrey, jaime, danny, tyrion, bronn];
