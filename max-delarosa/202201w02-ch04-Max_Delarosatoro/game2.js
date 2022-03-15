import questions from './questions.js';

const welcomeTitleDOM = document.querySelector('.welcome-title');
const descriptionsDOM = document.querySelectorAll('.game-description');
const playButtonDOM = document.querySelector('.play-button');

const questionDOM = document.querySelector('.question');
const gameInputDOM = document.querySelector('.game-input');

const finalScoreDOM = document.querySelector('.final-score');
const replayButtonDOM = document.querySelector('.replay-button');

const timerDOM = document.querySelector('.timer');

const letters = document.querySelectorAll('.letter');
const centerLetterDOM = document.querySelector('.center-letter');

// global variables
let timeLeft;

let questionsArr;
let score;
let pasapalabraArr;

let previousLetterDOM;
let currentLetterIndex;

let currentQuestion;
let currentLetter;
let currentAnswer;

let currentLetterDOM;

const startGame = () => {
    // Reset variables
    score = 0;
    questionsArr = [...questions];
    pasapalabraArr = [];
    currentLetter = '';
    previousLetterDOM = '';
    currentLetterIndex = '';

    centerLetterDOM.textContent = '';
    centerLetterDOM.classList.remove('hide');

    currentQuestion = '';
    currentLetter = '';
    currentAnswer = '';

    timeLeft = 150;

    clearLetterStyles();

    finalScoreDOM.classList.add('hide');
    replayButtonDOM.classList.add('hide');

    startTimer();

    manageDOMGameStart();

    // Now the question and input elements are visible. Time to start the first question
    questionLoop(questionsArr);
};

const startTimer = () => {
    const interval = setInterval(() => {
        if (
            (pasapalabraArr.length === 0 && questionsArr.length === 0) ||
            timeLeft === 0
        ) {
            // Finish game
            manageDOMGameEnd();
            finishGame();
            clearInterval(interval);
        } else if (timeLeft > 0) {
            timeLeft--;
            timerDOM.textContent = timeLeft;
        }
    }, 1000);
};

const manageDOMGameStart = () => {
    // Hide intro elements
    welcomeTitleDOM.classList.add('hide');
    descriptionsDOM.forEach((description) => description.classList.add('hide'));
    playButtonDOM.classList.add('hide');

    // Show question and input elements
    questionDOM.classList.remove('hide');
    gameInputDOM.classList.remove('hide');
    // Focus textbox
    gameInputDOM.focus();
};

const manageDOMGameEnd = () => {
    // Hide question and input elements
    questionDOM.classList.add('hide');
    gameInputDOM.classList.add('hide');
    // Show score elements
    finalScoreDOM.classList.remove('hide');
    replayButtonDOM.classList.remove('hide');
};

const questionLoop = (questionsArray) => {
    if (questionsArray.length > 0 && timeLeft > 0) {
        // Select a random question from the first letter in the array
        currentQuestion =
            questionsArray[0].possibilities[Math.floor(Math.random() * 3)];
        currentLetter = questionsArray[0].letter;
        currentAnswer = currentQuestion.answer;
        currentLetterIndex = questionsArray[0].index;

        // Set center letter textContent
        centerLetterDOM.textContent = currentLetter.toUpperCase();

        // Show current question
        questionDOM.textContent = currentQuestion.question;
        // Remove the current letter class from the previous letter
        if (previousLetterDOM !== '') {
            previousLetterDOM.classList.remove('current-letter');
        }
        // Mark the current letter
        currentLetterDOM = letters[currentLetterIndex];
        currentLetterDOM.classList.add('current-letter');
    }
};

const pasapalabraLoop = (pasapalabraArray) => {
    if (pasapalabraArray.length > 0 && timeLeft > 0) {
        currentQuestion = pasapalabraArray[0].question;
        currentLetter = pasapalabraArray[0].letter;
        currentAnswer = pasapalabraArray[0].answer;
        currentLetterIndex = pasapalabraArray[0].letterIndex;

        centerLetterDOM.textContent = currentLetter.toUpperCase();

        // Show current question
        questionDOM.textContent = currentQuestion.question;

        previousLetterDOM.classList.remove('current-letter');
        // Mark the current letter
        currentLetterDOM = letters[currentLetterIndex];
        currentLetterDOM.classList.add('current-letter');
    }
};

const handleUserInput = (e) => {
    // If the user is trying to submit an answer
    if (e.key === 'Enter' || e.keyCode === 32) {
        if (e.key === 'Enter') {
            handleUserAnswer(e);
        } else if (e.keyCode === 32) {
            handleSpaceBar();
        }

        // Save the previous letter <div> DOM node in a variable
        previousLetterDOM = currentLetterDOM;

        // Increment index for next round
        currentLetterIndex++;

        e.target.value = '';

        startNextQuestion();
    }
};

const handleUserAnswer = (e) => {
    // Save the input in a variable
    const userInput = e.target.value;
    // If it is equal to the current answer, add 1 to score
    if (userInput === currentAnswer) {
        score++;
        // Give the letter a green color
        currentLetterDOM.classList.add('correct-answer');
    } else {
        // Give the letter a red color
        currentLetterDOM.classList.add('wrong-answer');
    }
    // Remove the question from the questions array
    if (questionsArr.length > 0) {
        questionsArr.splice(0, 1);
    } else if (pasapalabraArr.length > 0) {
        pasapalabraArr.splice(0, 1);
    }
};

const handleSpaceBar = () => {
    // Pressed space key - pasapalabra

    const questionDetails = {
        question: currentQuestion,
        letter: currentLetter,
        answer: currentAnswer,
        letterIndex: currentLetterIndex,
    };
    pasapalabraArr.push(questionDetails);

    if (questionsArr.length > 0) {
        questionsArr.splice(0, 1);
    } else if (pasapalabraArr.length > 0) {
        pasapalabraArr.splice(0, 1);
    }
};

const startNextQuestion = () => {
    // Start next question
    if (questionsArr.length > 0 && timeLeft > 0) {
        questionLoop(questionsArr);
    } else if (
        questionsArr.length === 0 &&
        pasapalabraArr.length > 0 &&
        timeLeft > 0
    ) {
        pasapalabraLoop(pasapalabraArr);
    }
};

const finishGame = () => {
    finalScoreDOM.textContent = `
    El juego ha terminado.
    Su puntaje final es de ${score}.
    ¿Desea volver a intentarlo?
    `;
};

const clearLetterStyles = () => {
    letters.forEach((letter) => {
        letter.classList.remove('correct-answer');
        letter.classList.remove('wrong-answer');
        letter.classList.remove('current-letter');
    });
};

replayButtonDOM.addEventListener('click', startGame);

playButtonDOM.addEventListener('click', startGame);

gameInputDOM.addEventListener('keydown', handleUserInput);
