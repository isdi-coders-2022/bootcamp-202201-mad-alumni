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

const airlines = () => {
    let user = prompt('please enter username');
    alert(`Welcome aboard ${user}`);
    let lastFlights = [];

    for (let i = 0; i < flights.length; i++) {
        console.log(
            `The flight departing from ${flights[i].from} with destination to ${
                flights[i].to
            } has a cost of ${flights[i].cost}and has ${
                flights[i].scale ? ' a ' : ' no '
            } scale`
        );
    }
    let average = flights.reduce((a, { cost }) => a + cost, 0) / flights.length;
    let numFlightsScale = flights.filter((item) => item.scale === true);

    for (let j = 0; j < flights.length; j++) {
        if (j >= 6) {
            lastFlights.push(flights[j].to);
        }
    }
    console.log(`the average cost of flights is : ${Math.floor(average)}`);
    console.log(
        `the number of flights with a scale is : ${numFlightsScale.length}`
    );
    console.log(`The last flights have a destination : ${lastFlights}`);
};
airlines();
