let questions = [
    {
        letter: "a",
        possibilities: [
            { answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
            { answer: "arreglar", status: 0, question: "CON LA A. Poner cosas en orden."},
            { answer: "aire", status: 0, question: "CON LA A. Mezcla de gases conformado primordialmente por Oxígeno."},
        ]
    },
    {
        letter: "b",
        possibilities: [
            { answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
            { answer: "boca", status: 0, question: "CON LA B. Parte del cuerpo por donde empieza la digestión."},
            { answer: "baño", status: 0, question: "CON LA B. Lugar en el cual uno se ducha."},
        ]
    },
    {
        letter: "c",
        possibilities: [
            { answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
            { answer: "coche", status: 0, question: "CON LA C. Vehículo de cuatro ruedas."},
            { answer: "copa", status: 0, question: "CON LA C. Envase normalmente de cristal para tomar vino."},
        ]
    },
    {
        letter: "d",
        possibilities: [
            { answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
            { answer: "dado", status: 0, question: "CON LA D. Cubo con números en cada cara"},
            { answer: "dueño", status: 0, question: "CON LA D. Propietario de algo."},
        ]
    },
    { 
        letter: "e",
        possibilities: [
            { answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
            { answer: "errar", status: 0, question: "CON LA E. Equivocarse, fallar."},
            { answer: "era", status: 0, question: "CON LA E. Periodo de tiempo muy largo."},
        ]
    },
    { 
        letter: "f",
        possibilities: [
            { answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
            { answer: "feo", status: 0, question: "CON LA F. Que no es atractivo."},
            { answer: "fierro", status: 0, question: "CON LA F. Metal."}, 
        ]
    },
    { 
        letter: "g",
        possibilities: [
            { answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
            { answer: "germen", status: 0, question: "CON LA G. Ser microscópico, capaz de causar enfermedad."},
            { answer: "gorro", status: 0, question: "CON LA G. Prenda utilizada en la cabeza para protegerse del sol."},
        ]
    },
    { 
        letter: "h",
        possibilities: [
            { answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
            { answer: "hambre", status: 0, question: "CON LA H. Sentimiento al no comer por mucho tiempo."},
            { answer: "huerto", status: 0, question: "CON LA H. Lugar donde se plantan y cosechan alimentos."},
        ]
    },
    { 
        letter: "i",
        possibilities: [
            { answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
            { answer: "introduccion", status: 0, question: "CON LA I. Inicio de un libro"},
            { answer: "ira", status: 0, question: "CON LA I. Molestia, rabia."},
        ]
    },
    { 
        letter: "j",
        possibilities: [
            { answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
            { answer: "jerga", status: 0, question: "CON LA J. Forma de hablar coloquial específica a un lugar geográfico."},
            { answer: "jardin", status: 0, question: "CON LA J. Lugar donde crece césped y plantas."},
        ]
    },
    { 
        letter: "k",
        possibilities: [
            { answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
            { answer: "kimono", status: 0, question: "CON LA K. Traje de origen japonés, utilizado por los geishas."},
            { answer: "karma", status: 0, question: "CON LA K. Creencia en que todo lo que haces vuelve hacia ti."},
        ]
    },
    { 
        letter: "l",
        possibilities: [
            { answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},
            { answer: "larva", status: 0, question: "CON LA L. Insecto recién nacido."},
            { answer: "luego", status: 0, question: "CON LA L. Más tarde, después."},
        ]
    },
    { 
        letter: "m",
        possibilities: [
            { answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
            { answer: "malandro", status: 0, question: "CON LA M. Persona de mal vivir."},
            { answer: "marmol", status: 0, question: "CON LA M. Tipo de piedra, normalmente utilizada en cocinas o pisos."},
        ]
    },
    { 
        letter: "n",
        possibilities: [
            { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},
            { letter: "n", answer: "nuevo", status: 0, question: "CON LA N. Contrario a antiguo."},
            { letter: "n", answer: "nocivo", status: 0, question: "CON LA N. Que hace daño."},
        ]
    },
    { 
        letter: "ñ",
        possibilities: [
            { answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
            { answer: "año", status: 0, question: "CONTIENE LA Ñ. Periodo de tiempo que dura 365 días."},
            { answer: "sueño", status: 0, question: "CONTIENE LA Ñ. Experiencia subconciente que se da al dormir."},
        ]
    },
    { 
        letter: "o",
        possibilities: [
            { answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
            { answer: "oro", status: 0, question: "CON LA O. Metal precioso de color amarillo."},
            { answer: "oslo", status: 0, question: "CON LA O. Ciudad capital de Noruega."},
        ]
    },
    { 
        letter: "p",
        possibilities: [
            { answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
            { answer: "parir", status: 0, question: "CON LA P. Dar a luz."},
            { answer: "pais", status: 0, question: "CON LA P. Ubicación geográfica con un cuerpo de gobierno y población."},
        ]
    },
    { 
        letter: "q",
        possibilities: [
            { answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
            { answer: "quilla", status: 0, question: "CON LA Q. Utilizadas para dar dirección a las embarcaciones"},
            { answer: "quiñe", status: 0, question: "CON LA Q. Golpe que deja una marca."},
        ]
    },
    { 
        letter: "r",
        possibilities: [
            { answer: "raton", status: 0, question: "CON LA R. Roedor"},
            { answer: "raiz", status: 0, question: "CON LA R. Parte inferior de la planta en contacto con la tierra."},
            { answer: "ramo", status: 0, question: "CON LA R. Conjunto de flores, normalmente usado como regalo."},
        ]
    },
    { 
        letter: "s",
        possibilities: [
            { answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
            { answer: "serpiente", status: 0, question: "CON LA S. Animal largo y sin piernas que se desliza por el suelo y es venenoso."},
            { answer: "sal", status: 0, question: "CON LA S. Utilizada para aumentar el sabor en la comida."},
        ]
    },
    { 
        letter: "t",
        possibilities: [
            { answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
            { answer: "tarea", status: 0, question: "CON LA T. Quehacer."},
            { answer: "tren", status: 0, question: "CON LA T. Vehículo compuesto por locomotora y vagones."},
        ]
    },
    { 
        letter: "u",
        possibilities: [
            { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
            { letter: "u", answer: "urbe", status: 0, question: "CON LA U. Lugar donde viven muchas personas."},
            { letter: "u", answer: "uña", status: 0, question: "CON LA U. Estructura de colágeno que protege los dedos."},
        ]
    },
    { 
        letter: "v",
        possibilities: [
            { answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
            { answer: "verdad", status: 0, question: "CON LA V. Opuesto a mentira."},
            { answer: "vaso", status: 0, question: "CON LA V. Contenedor con el cual se puede beber líquidos."},
        ]
    },
    { 
        letter: "w",
        possibilities: [
            { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
            { letter: "w", answer: "whisky", status: 0, question: "CON LA W. Bebida alcohólica perteneciente a Escocia."},
            { letter: "w", answer: "washington", status: 0, question: "CON LA W. Capital de USA."},
        ]
    },
    { 
        letter: "x",
        possibilities: [
            { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
            { letter: "x", answer: "asfixia", status: 0, question: "CONTIENE LA X. Ahogo, pérdida de aire."},
            { letter: "x", answer: "xilofono", status: 0, question: "CON LA X. Instrumento musical con placas metálicas."},
        ]
    },
    { 
        letter: "y",
        possibilities: [
            { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
            { letter: "y", answer: "yugular", status: 0, question: "CON LA Y. Vaso sanguíneo importante ubicado en la región de la garganta."},
            { letter: "y", answer: "yema", status: 0, question: "CON LA Y. Parte amarilla del huevo."},
        ]
    },
    { 
        letter: "z",
        possibilities: [
            { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},
            { letter: "z", answer: "zarzamora", status: 0, question: "CON LA Z. Bayas rojizas."},
            { letter: "z", answer: "zorro", status: 0, question: "CON LA Z. Animal parecido al perro, pero salvaje."},
        ]
    },
];

questions = questions.map((question, index) => ({...question, index}));

export default questions;