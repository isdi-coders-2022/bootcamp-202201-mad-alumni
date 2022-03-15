let flights = [
    { id: 0, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 1, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 2, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 3, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 4, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 5, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 6, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 7, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 8, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 9, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false },
];

const airlinesPro = () => {
    let userName = prompt('Please enter username');
    console.log(`Welcome aboard ${userName}`);
    let lastFlights = [];

    let average = flights.reduce((a, { cost }) => a + cost, 0) / flights.length;
    let numFlightsScale = flights.filter((item) => item.scale === true);

    for (let j = 0; j < flights.length; j++) {
        if (j >= 6) {
            lastFlights.push(flights[j].to);
        }
    }
    printFlights();
    console.log(`The average cost of flights is : ${Math.floor(average)}`);
    console.log(
        `The number of flights with a scale is : ${numFlightsScale.length}`
    );
    console.log(`The last flights have a destination : ${lastFlights}`);
    userOrAdmin();
};

let printFlights = () => {
    let flightsArray = [];
    for (let i = 0; i < flights.length; i++) {
        flightsArray.push(
            `The flight departing from ${flights[i].from} with destination to ${
                flights[i].to
            } has a cost of ${flights[i].cost}and has ${
                flights[i].scale ? ' a ' : ' no '
            } scale`
        );
    }
    console.log(flightsArray.join('\n'));
};

const userOrAdmin = () => {
    let ifUserOrAdmin = prompt('Are you: USER/ADMIN ?').toUpperCase();
    if (ifUserOrAdmin === 'ADMIN') {
        admin();
    } else if (ifUserOrAdmin === 'USER') {
        user();
    } else {
        console.log('Wrong input, please specify if USER or ADMIN');
        userOrAdmin();
    }
};
const admin = () => {
    let createOrDelete = prompt(
        'Do you wish to create/delete a flight?'
    ).toUpperCase();
    if (createOrDelete == 'DELETE') {
        deleteFlight();
    } else if (createOrDelete == 'CREATE') {
        createFlight();
    } else {
        console.log('Invalid input, please enter delete/create');
        admin();
    }
};

const user = () => {
    let filteredFlights = [];
    let price = parseInt(prompt('Enter price to filter through flights'));
    if (price > 0 && !isNaN(price)) {
        let sortOperator = prompt('Enter <,> or = to sort through flights');
        if (sortOperator === '<') {
            for (let i = 0; i < flights.length; i++) {
                if (flights[i].cost < price) {
                    filteredFlights.push(
                        `The flight departing from ${
                            flights[i].from
                        } with destination to ${flights[i].to} has a cost of ${
                            flights[i].cost
                        }and has ${flights[i].scale ? ' a ' : ' no '} scale`
                    );
                }
            }
            if (filteredFlights.length === 0) {
                console.log(
                    'No existing flights with price smaller than introduced'
                );
                user();
            }
        } else if (sortOperator === '>') {
            for (let i = 0; i < flights.length; i++) {
                if (flights[i].cost > price) {
                    filteredFlights.push(
                        `The flight departing from ${
                            flights[i].from
                        } with destination to ${flights[i].to} has a cost of ${
                            flights[i].cost
                        }and has ${flights[i].scale ? ' a ' : ' no '} scale`
                    );
                }
            }
            if (filteredFlights.length === 0) {
                console.log(
                    'NO existing flights with price greater than introduced'
                );
                user();
            }
        } else if (sortOperator === '=') {
            for (let i = 0; i < flights.length; i++) {
                if ((flights[i].cost = price)) {
                    filteredFlights.push(
                        `The flight departing from ${
                            flights[i].from
                        } with destination to ${flights[i].to} has a cost of ${
                            flights[i].cost
                        }and has ${flights[i].scale ? ' a ' : ' no '} scale`
                    );
                }
            }
            if (filteredFlights.length === 0) {
                console.log(
                    'No existing flights with price equal to introduced'
                );
                user();
            }
        } else {
            console.log('Please enter valid mathematical operator');
        }
        console.log(filteredFlights.join('\n'));
    } else {
        console.log('Please enter valid number');
        user();
    }
    purchaseFlight();
};
const purchaseFlight = () => {
    let buyId = parseInt(prompt('Enter flight ID to purchase'));
    for (let i = 0; i < flights.length; i++) {
        if (buyId === flights[i].id) {
            console.log(
                'Flight ID: ' +
                    buyId +
                    ' purchased succesfully, come again soon'
            );
            airlinesPro();
        }
    }
    if (idCheck(buyId) === false) {
        console.log('Please enter valid ID');
        purchaseFlight();
    }
};
const createFlight = () => {
    if (flights.length < 15) {
        let scaleBooleaan = () => {
            let ifScale = prompt(
                'Enter if there will be a scale as truth/false'
            );
            if (ifScale === 'true' || ifScale === 'false') {
                return ifScale;
            } else {
                console.log('Please enter true/false');
                scaleBooleaan();
            }
        };

        let newDestination = prompt('Enter a new destination');
        let newFlight = { to: newDestination };
        newFlight.id = flights.length;
        newFlight.from = prompt('Enter a new location of departure');
        newFlight.cost = prompt('Enter the cost of the flight');
        newFlight.scale = scaleBooleaan();
        flights.push(newFlight);
        console.log('Current flights:');
        printFlights();
        createFlight();
    } else {
        console.log('Maximum flights reached');
        admin();
    }
};

const deleteFlight = () => {
    let deleteId = parseInt(prompt('Enter ID of flight you wish to remove'));
    for (let i = 0; i < flights.length; i++) {
        if (deleteId === parseInt(flights[i].id)) {
            flights.splice(i, 1);
            console.log(`Flight was sucessfully deleted`);
            if (confirm('Would you like to keep deleting flights?')) {
                deleteFlight();
            } else {
                console.log('Current flights:');
                printFlights();
                admin();
            }
        }
    }
    if (idCheck(deleteId) === false) {
        console.log('Please enter valid id');
        deleteFlight();
    }
};
let idCheck = (a) => {
    for (let i = 0; i < flights.length; i++) {
        if (a !== parseInt(flights[i].id)) {
            return false;
        }
    }
};
