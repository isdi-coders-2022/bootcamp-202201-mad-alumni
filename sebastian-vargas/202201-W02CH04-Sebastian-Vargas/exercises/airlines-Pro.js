let vuelos = [
    { id: 0, hasta: 'Bilbao', desde: 'Barcelona', coste: 1600, escala: false },

    {
        id: 1,
        hasta: 'Nueva York',
        desde: 'Barcelona',
        coste: 700,
        escala: false,
    },

    { id: 2, hasta: 'Los Ángeles', desde: 'Madrid', coste: 1100, escala: true },

    { id: 3, hasta: 'París', desde: 'Barcelona', coste: 210, escala: false },

    { id: 4, hasta: 'Roma', desde: 'Barcelona', coste: 150, escala: false },

    { id: 5, hasta: 'Londres', desde: 'Madrid', coste: 200, escala: false },

    { id: 6, hasta: 'Madrid', desde: 'Barcelona', coste: 90, escala: false },

    { id: 7, hasta: 'Tokio', desde: 'Madrid', coste: 1500, escala: true },

    { id: 8, hasta: 'Shanghái', desde: 'Barcelona', coste: 800, escala: true },

    { id: 9, hasta: 'Sídney', desde: 'Barcelona', coste: 150, escala: true },
];

function airlinesPro() {
    let nombreUsuario;
    let disponibilidad = '';
    let costeMedio = 0;
    let escala = 'Los siguientes vuelos realizan escala:\n\n';
    let ultVuelos = `En este momento los únicos vuelos por efectuarse tienen como destino:\n\n`;

    for (let i = 0; i < vuelos.length; i++) {
        disponibilidad += `El vuelo con origen: ${
            vuelos[i].desde
        }, y destino: ${vuelos[i].hasta} tiene un coste de ${
            vuelos[i].coste
        } € y ${
            vuelos[i].escala
                ? 'realiza una escala'
                : 'no realiza ninguna escala'
        }.\n\n`;

        costeMedio += vuelos[i].coste;

        if (vuelos[i].escala) {
            escala += `Origen ${vuelos[i].desde} y destino ${vuelos[i].hasta}.\n\n`;
        }

        if (i > vuelos.length - 6) {
            ultVuelos += `${vuelos[i].hasta}.\n\n`;
        }
    }

    costeMedio = (costeMedio / vuelos.length - 1).toFixed(2);

    nombreUsuario = nombreUser();

    while (nombreUsuario === '') {
        console.log('No escribió un nombre.');
        alert('Debe escribir un nombre.');
        nombreUsuario = nombreUser();
    }

    if (nombreUsuario === null) {
        return cancelar();
    } else {
        alert(`Bienvenido/a, ${nombreUsuario}.`);
        console.log(`Se le dio la bienvenida al usuario ${nombreUsuario}.`);
        alert(
            `La disponibilidad de vuelos para hoy es la siguiente:\n\n${disponibilidad}`
        );
        console.log('Se le mostró la disponibilidad de los vuelos.');
        alert(`El coste medio de los vuelos es de ${costeMedio} €.`);
        console.log(
            `Se le mostró el coste medio del precio de los vuelos: ${costeMedio}.`
        );
        alert(escala);
        console.log(
            `Se le mostró la lista de vuelos que hacen escala: ${escala}`
        );
        alert(ultVuelos);
        console.log(
            `Se le mostraron los últimos vuelos disponibles: ${ultVuelos}`
        );
    }

    identificar();
}

function cancelar() {
    console.log('Decidió abandonar.');
    return alert('Hasta otra.');
}

function nombreUser() {
    let nombre = prompt(
        'Escriba su nombre, por favor.\nO pulse cancelar para salir.'
    );
    return nombre;
}

function identificar() {
    let expRegId = /\buser\b|\badmin\b/i;
    let adminUser = prompt(
        'Escriba si es ADMIN o USER.\nO pulse cancelar para salir.'
    );

    if (adminUser === null) {
        cancelar();
    } else if (
        expRegId.test(adminUser) &&
        adminUser.toUpperCase() === 'ADMIN'
    ) {
        console.log('Accedió como administrador.');
        opcionesAdmin();
    } else if (expRegId.test(adminUser) && adminUser.toUpperCase() === 'USER') {
        console.log('Accedió como usuario.');
        funComprar();
    } else {
        console.log('No se identificó correctamente.');
        alert('Identificación no válida. Inténtelo de nuevo.');
        identificar();
    }
}

function opcionesAdmin() {
    let expRegAdmin = /\bcrear\b|\beliminar\b/i;
    let tarea = prompt(
        '¿Quiere "crear" o "eliminar" vuelos?\nSi no, pulse cancelar para salir.'
    );

    if (tarea === null) {
        cancelar();
    } else if (expRegAdmin.test(tarea) && tarea.toUpperCase() === 'CREAR') {
        console.log('Decidió crear.');
        if (vuelos.length === 15) {
            console.log('Error: número máximo de vuelos alcanzado.');
            alert(
                `ERROR. No se pueden agregar más de 15 vuelos.\nLa lista de vuelos actual es:\n${JSON.stringify(
                    vuelos
                )}.`
            );
            return opcionesAdmin();
        }
        funCrear();
    } else if (expRegAdmin.test(tarea) && tarea.toUpperCase() === 'ELIMINAR') {
        console.log('Decidió eliminar.');
        funEliminar();
    } else {
        console.log('No escribió bien "eliminar" ni "crear".');
        alert('No escribió correctamente. Vuelva a intentarlo.');
        opcionesAdmin();
    }
}

function funCrear() {
    let info;
    let infoDiv;
    let infoConfirm;

    alert(
        `Tenga en cuenta los ID que ya existen para no repetirlos:\n\n${JSON.stringify(
            vuelos
        )}.`
    );

    info = prompt(
        'Escriba la información del vuelo separada por comas y un espacio en este orden:\nid, destino, origen, precio, sin/con escala.\nO pulse cancelar para salir.',
        'Ej.: 15, Mánchester, Madrid, 450, sin escala.'
    );

    if (info === null) {
        return cancelar();
    } else if (info === '') {
        console.log('No escribió información.');
        alert('Debe escribir información. Inténtelo de nuevo.');
        return funCrear();
    } else {
        infoDiv = info.split(/\s*,\s*/);
        if (isNaN(infoDiv[0])) {
            console.log(
                `El ID que proporcionó no es un número: ${infoDiv[0]}.`
            );
            alert(
                `El ID introducido, ${infoDiv[0]}, no es un número.\nInténtelo de nuevo.`
            );
            return funCrear();
        }
        for (let i = 0; i < vuelos.length; i++) {
            if (parseInt(infoDiv[0]) === vuelos[i].id) {
                console.log(
                    `Intentó agregar un vuelo con un ID ya existente: ${infoDiv[0]}.`
                );
                alert(
                    `Error. El vuelo con ID ${parseInt(
                        infoDiv[0]
                    )} ya existe.\nInténtelo de nuevo.`
                );
                return funCrear();
            }
        }
        infoConfirm = confirm(
            `Confirme los datos del vuelo pulsando aceptar:\n\nID: ${parseInt(
                infoDiv[0]
            )}; origen: ${infoDiv[1]}; destino: ${
                infoDiv[2]
            }; precio: ${infoDiv[3].replace(
                /[ €$]/g,
                ''
            )} €; ${infoDiv[4].replace(/\./, '')}.`
        );
        if (infoConfirm === true) {
            vuelos[vuelos.length] = {
                id: parseInt(infoDiv[0]),
                hasta: infoDiv[1],
                desde: infoDiv[2],
                precio: parseFloat(infoDiv[3].replace(/[€$]/g, '')),
                escala:
                    infoDiv[4].replace(/\./, '') === 'con escala'
                        ? true
                        : false,
            };
            vuelos.sort((a, b) => a.id - b.id);
            console.log(
                'Se añadió la información del vuelo y reorganizaron todos los vuelos por ID ascendente.'
            );
            alert(
                `Vuelo añadido.\nLos vuelos actuales son:\n${JSON.stringify(
                    vuelos
                )}`
            );
            opcionesAdmin();
        } else {
            console.log('Repite la introducción de datos.');
            funCrear();
        }
    }
}

function funEliminar() {
    let idVuelo;

    alert(
        `Tenga en cuenta los ID de los vuelos exitentes para borrar uno:\n\n${JSON.stringify(
            vuelos
        )}.`
    );

    idVuelo = prompt(
        'Escriba el ID del vuelo que desea eliminar.\nO pulse cancelar para salir.'
    );

    if (idVuelo === null) {
        return cancelar();
    } else if (idVuelo === '') {
        console.log('No escribió el ID del vuelo que quiere eliminar.');
        alert(
            'Debe escribir el ID del vuelo que desea eliminar. Inténtelo de nuevo.'
        );
        funEliminar();
    } else if (isNaN(parseInt(idVuelo))) {
        console.log(`El ID que proporcionó no es un número: ${idVuelo}`);
        alert(`Error. El ID debe ser un número.\nInténtelo de nuevo.`);
        funEliminar();
    } else {
        for (let i = 0; i < vuelos.length; i++) {
            if (parseInt(idVuelo) === vuelos[i].id) {
                vuelos.splice(i, 1);
                console.log(`Se eliminó el vuelo con el ID ${idVuelo}.`);
                alert(
                    `Vuelo eliminado.\nLos vuelos actuales son:\n${JSON.stringify(
                        vuelos
                    )}`
                );
                return opcionesAdmin();
            }
        }
        console.log(
            `Error. Intentó eliminar un vuelo con un ID inexistente: ${idVuelo}.`
        );
        alert(
            `Error. El ID ${idVuelo} no se corresponde con ningún vuelo.\nInténtelo de nuevo.`
        );
        funEliminar();
    }
}

function funComprar() {
    let precioUsuario;
    let listaPrecios;
    let idVuelo;

    precioUsuario = prompt(
        'Escriba su presupuesto para la compra de un billete de vuelo, por favor.'
    );
    precioUsuario.replace(/[ €$]/g, '');

    if (precioUsuario === null) {
        return cancelar();
    } else if (precioUsuario === '') {
        console.log('No escribió ningún precio.');
        alert('Debe escribir un precio.\nInténtelo de nuevo.');
        return funComprar();
    } else if (isNaN(parseInt(precioUsuario))) {
        console.log('El precio introducido no es un número.');
        alert('El precio introducido no es un número.\nInténtelo de nuevo');
        return funComprar();
    } else {
        listaPrecios = vuelos.filter((a) => precioUsuario >= a.coste);
    }

    if (listaPrecios.length === 0) {
        console.log(
            'El presupuesto no alcanza un mínimo para comprar un vuelo.'
        );
        alert(
            'No tenemos vuelos que se ajusten a su presupuesto.\nInténtelo de nuevo.'
        );
        return funComprar();
    } else {
        idVuelo = prompt(
            `Estos vuelos se encuentran dentro de su presupuesto.\nEscriba el ID del vuelo que desea comprar.\nO pulse cancelar para salir.\n${JSON.stringify(
                listaPrecios
            )}`
        );

        if (idVuelo === null) {
            return cancelar();
        } else if (idVuelo === '') {
            console.log('No escribió ningún precio.');
            alert(
                'Debe escribir el ID del vuelo que desea comprar.\nInténtelo de nuevo.'
            );
            return funComprar();
        } else if (isNaN(idVuelo)) {
            console.log('El ID de vuelo que proporcionó no es un número.');
            alert(
                'Error. El ID del vuelo debe ser un número.\nInténtelo de nuevo.'
            );
            return funComprar();
        } else {
            for (let i = 0; i < listaPrecios.length; i++) {
                if (parseInt(idVuelo) === listaPrecios[i].id) {
                    console.log(`Compró el vuelo con el ID ${idVuelo}.`);
                    console.log('Fin del programa.');
                    alert('Gracias por su compra. Vuelva pronto.');
                    return;
                }
            }
            console.log(`El ID ${idVuelo} no se corresponde con ningún vuelo.`);
            alert(
                `El ID ${idVuelo} no se encontraba entre las opciones.\nEmpiece el proceso de compra de nuevo.`
            );
            return funComprar();
        }
    }
}

airlinesPro();
