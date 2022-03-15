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

//global variables
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
    //reset variables
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

    //now the question and input elements are visible. Time to start the first question
    questionLoop(questionsArr);
}

const startTimer = () => {
    const interval = setInterval(() => {
        if ( (pasapalabraArr.length === 0 && questionsArr.length === 0) || timeLeft === 0) {
            //finish game
            manageDOMGameEnd();
            finishGame();
            clearInterval(interval);
        }
        else if (timeLeft > 0) {
            timeLeft--;
            timerDOM.textContent = timeLeft;
        }
    }, 1000)
}

const manageDOMGameStart = () => {
    //hide intro elements
    welcomeTitleDOM.classList.add('hide');
    descriptionsDOM.forEach(description => description.classList.add('hide'));
    playButtonDOM.classList.add('hide');

    //show question and input elements
    questionDOM.classList.remove('hide');
    gameInputDOM.classList.remove('hide');
    //focus textbox
    gameInputDOM.focus();
}

const manageDOMGameEnd = () => {
    //hide question and input elements
    questionDOM.classList.add('hide');
    gameInputDOM.classList.add('hide');
    //show score elements
    finalScoreDOM.classList.remove('hide');
    replayButtonDOM.classList.remove('hide');
}

const questionLoop = (questionsArr) => {
    if (questionsArr.length > 0 && timeLeft > 0) {
        //select a random question from the first letter in the array
        currentQuestion = questionsArr[0].possibilities[Math.floor(Math.random() * 3)];
        currentLetter = questionsArr[0].letter;
        currentAnswer = currentQuestion.answer;
        currentLetterIndex = questionsArr[0].index;

        //set center letter textContent
        centerLetterDOM.textContent = currentLetter.toUpperCase();

        //show current question
        questionDOM.textContent = currentQuestion.question;
        //remove the current letter class from the previous letter
        if (previousLetterDOM !== '') {
            previousLetterDOM.classList.remove('current-letter');
        }
        //mark the current letter
        currentLetterDOM = letters[currentLetterIndex];
        currentLetterDOM.classList.add('current-letter');
    }
}

const pasapalabraLoop = (pasapalabraArr) => {
    if (pasapalabraArr.length > 0 && timeLeft > 0) {

        currentQuestion = pasapalabraArr[0].question;
        currentLetter = pasapalabraArr[0].letter;
        currentAnswer = pasapalabraArr[0].answer;
        currentLetterIndex = pasapalabraArr[0].letterIndex;

        centerLetterDOM.textContent = currentLetter.toUpperCase();

        //show current question
        questionDOM.textContent = currentQuestion.question;

        previousLetterDOM.classList.remove('current-letter');
        //mark the current letter
        currentLetterDOM = letters[currentLetterIndex];
        currentLetterDOM.classList.add('current-letter');
    }
}

const handleUserInput = (e) => {
    //if the user is trying to submit an answer
    if (e.key === 'Enter' || e.keyCode === 32) {
        if (e.key === 'Enter') {
            //save the input in a variable
            const userInput = e.target.value;
            //if it is equal to the current answer, add 1 to score
            if (userInput === currentAnswer) {
                score++;
                //give the letter a green color
                currentLetterDOM.classList.add('correct-answer');
            } else {
                //give the letter a red color
                currentLetterDOM.classList.add('wrong-answer');
            }
            //remove the question from the questions array
            if (questionsArr.length > 0) {
                questionsArr.splice(0, 1);
            } else if (pasapalabraArr.length > 0) {
                pasapalabraArr.splice(0, 1);
            }

        } else if (e.keyCode === 32) {
            //pressed space key - pasapalabra
    
            const questionDetails = {
                question: currentQuestion,
                letter: currentLetter,
                answer: currentAnswer,
                letterIndex: currentLetterIndex,
            }
            pasapalabraArr.push(questionDetails);

            if (questionsArr.length > 0) {
                questionsArr.splice(0, 1);
            } else if (pasapalabraArr.length > 0) {
                pasapalabraArr.splice(0, 1);
            }
        }

        //save the previous letter <div> DOM node in a variable
        previousLetterDOM = currentLetterDOM;

        //increment index for next round 
        currentLetterIndex++;

        e.target.value = '';

        //start next question
        if (questionsArr.length > 0 && timeLeft > 0) {
            questionLoop(questionsArr);
        } else if (questionsArr.length === 0 && pasapalabraArr.length > 0 && timeLeft > 0) {
            pasapalabraLoop(pasapalabraArr);
        }
    }
}

const finishGame = () => {
    finalScoreDOM.textContent = `
    El juego ha terminado.
    Su puntaje final es de ${score}.
    ¿Desea volver a intentarlo?
    `;
}

const clearLetterStyles = () => {
    letters.forEach(letter => {
        letter.classList.remove('correct-answer');
        letter.classList.remove('wrong-answer');
        letter.classList.remove('current-letter');
    })
}

replayButtonDOM.addEventListener('click', startGame);

playButtonDOM.addEventListener('click', startGame);

gameInputDOM.addEventListener('keydown', handleUserInput);