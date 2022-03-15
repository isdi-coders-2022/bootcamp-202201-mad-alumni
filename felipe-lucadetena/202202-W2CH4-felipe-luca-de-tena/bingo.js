let playerScore = 3000;
const randomNumArr = [];
let straightLine = false;
let playerDataBase = [
    { name: 'Athena', score: 840 },
    { name: 'Zeus', score: 920 },
    { name: 'Hestia', score: 650 },
    { name: 'Dionysus', score: 210 },
];
let turns = 0;
let userName;
let userScore = { name: userName, score: playerScore };

const table = (rows, cols) =>
    Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => Math.ceil(Math.random() * 90))
    );
let bingoTable = table(3, 5);

const greetings = () => {
    userName = prompt(
        'Welcome to javascript bingo. Enter a username to start.'
    );

    if (userName === '' || userName === null) {
        userName = 'guest';
    }
    console.log(
        `Hi ${userName}. In this game of bingo you will be given a card with 15 numbers. You will start with a score of 3000 which decreases by 10 every turn. Match all numbers to get BINGO!`
    );
    console.table(playerDataBase);
    startGame();
};
const getRandomNum = () => {
    let randomNumber = Math.ceil(Math.random() * 90);
    if (randomNumArr.indexOf(randomNumber) === -1) {
        randomNumArr.push(randomNumber);
        console.log(`You have drawn number ${randomNumber}.`);
        console.table(bingoTable);
    } else {
        getRandomNum();
    }

    playerScore -= 10;
    turns += 1;
};
const matchingNumIsX = () => {
    for (let i = 0; i < bingoTable.length; i++) {
        let row = bingoTable[i];
        for (let j = 0; j < row.length; j++) {
            for (let k = 0; k < randomNumArr.length; k++) {
                if (row[j] === randomNumArr[k]) {
                    row[j] = 'X';
                }
            }
        }
    }
};

const straightLineBingo = () => {
    if (!straightLine) {
        if (
            bingoTable[0].every((e) => e === 'X') ||
            bingoTable[1].every((e) => e === 'X') ||
            bingoTable[2].every((e) => e === 'X')
        ) {
            console.log('STRAIGHT LINE BINGOO! Lets keep playing!');
            straightLine = true;
            playGame();
        }
    }
};

const fullBingo = () => {
    if (
        bingoTable[0].every((e) => e === 'X') &&
        bingoTable[1].every((e) => e === 'X') &&
        bingoTable[2].every((e) => e === 'X')
    ) {
        console.log('BINGOOOOOO!!!!! YOU WIN!!!!');
        console.log(
            `It took you ${turns} turns to complete. That leaves you ith a score of:${playerScore}`
        );
        console.table(playerDataBase.push(userScore));
        if (confirm('would you like to play again?')) {
            greetings();
        } else {
            alert('Bye! Play again soon!');
        }
    }
};

const startGame = () => {
    console.table(bingoTable);
    if (!confirm('would you like to play with this bingo card?')) {
        bingoTable = table(3, 5);
        console.table(bingoTable);
        startGame();
    } else {
        playGame();
    }
};

const playGame = () => {
    if (confirm('Lets start! Press ok to draw a number or cancel to stop.')) {
        getRandomNum();
        matchingNumIsX();
        straightLineBingo();
        fullBingo();
        playGame();
    } else {
        alert('Bye! Play again soon!');
    }
};
greetings();
