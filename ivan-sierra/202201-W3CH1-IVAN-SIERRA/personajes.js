

export function printMensajes(personajes) {
    return personajes.filter(item => item instanceof Knight).map(item => item.message);
};
printMensajes(personajes);
console.log(jB.series);
personajes.forEach(item => console.log(item.message));
jL.morir();