import questions from './questions.js';
const playButton = document.querySelector('.play-button');
const welcomeTitle = document.querySelector('.welcome-title');
const gameDescriptions = document.querySelectorAll('.game-description');
const timer = document.querySelector('.timer');
const rightContainer = document.querySelector('.right-container');
console.log(questions)

questions = questions.map((question, index) => ({...question, index}));
console.log(questions);

//letter selection
const lettersDOM = document.querySelectorAll('.letter');

let score = 0;
let round = 1;
let totalAnswers = 0;
let pasapalabraArray = [];
let answerArray = [];
let currentLetter;

//listener to start game
playButton.addEventListener('click', () => {
    welcomeTitle.classList.add('hide');
    for (const description of gameDescriptions) {
        description.classList.add('hide');
    }
    playButton.classList.add('hide');

    gameLoop();
})


const gameLoop = () => {
    
    score = 0;
    pasapalabraArray = [];
    answerArray = [];
    let currentTime = 150;
    
    startTimer(currentTime);

    if (round > 1) {
        const finalScoreDOM = document.querySelector('.final-score');
        const replayButton = document.querySelector('.replay-button');
        if (finalScoreDOM && replayButton) {
            finalScoreDOM.classList.add('hide');
            replayButton.classList.add('hide');
        }
        for (const letter of lettersDOM) {
            letter.classList.remove('correct-answer');
            letter.classList.remove('wrong-answer');
            letter.classList.remove('no-answer');
        }
    }
    
    const questionElement = document.querySelector('.question');
    const answerBox = document.querySelector('.game-input');

    if(!questionElement && !answerBox) {
        //if first round
        createQuestionElement();
        createInputElement();
    } else {
        //if more than first round
        questionElement.classList.remove('hide');
        answerBox.classList.remove('hide');
    }
    
    //generar los espacios para cada respuesta en el array de respuestas
    for (let i = 0; i < 26; i++) {
        answerArray.push(null);
    }
    
    //loop de preguntas (1 por letra del alfabeto)
    
    questionLoop(answerArray, pasapalabraArray, answerBox, questionElement);
}

const startTimer = (currentTime) => {

    const interval = setInterval(() => {
        console.log(totalAnswers)
        if (totalAnswers === 27 || currentTime === 0) {
            //finish game, show score, hide the input
            console.log('score',score);
            finishGame(score);
            clearInterval(interval);
        } else if (currentTime > 0) {
            currentTime -= 1;
            console.log(currentTime)
            timer.textContent = currentTime;
        }
    }, 1000);
}


const questionLoop = async (answerArray, pasapalabraArray, answerBox, questionElement) => {
    // const questionResponse = () => {
    //     return new Promise((res, rej) => {
    //         answerBox.addEventListener('keypress', (e) => {
    //             if (e.key === 'Enter') {
    //                 console.log(answerBox.value.trim())
    //                 res(answerBox.value.toLowerCase().trim());
    //             } else if (e.keyCode === 32) {
    //                 res('pasapalabra');
    //             }
    //         })
    //     })
    // }

    const listenerFunction = (e) => {
        const answer = answerBox.value.trim();
        if (e.key === 'Enter') {

            console.log(answer)
            if (answer === correctAnswer) {
                answerArray[i] = true;
                console.log('A')
                score++;
            } else {
                answerArray[i] = false;
                console.log('B')
            }
            totalAnswers++;

        } else if (e.keyCode === 32) {
            // res('pasapalabra');
            const pasapalabraGroup = [randomQuestion, correctAnswer, i]
            pasapalabraArray.push(pasapalabraGroup);
        }
    }

    answerBox.addEventListener('keypress', listenerFunction)

    for (let i = 0; i <= 26; i++) {
        answerBox.value = '';
        const randomQuestion = questions[i].possibilities[Math.floor(Math.random() * 3)];
        questionElement.textContent = randomQuestion.question;
        const correctAnswer = randomQuestion.answer;
        console.log('answer', correctAnswer);

        // const response = await questionResponse();
        // console.log(response);
        
        // if (response === 'pasapalabra') {
        //     const pasapalabraGroup = [randomQuestion, correctAnswer, i]
        //     pasapalabraArray.push(pasapalabraGroup);
        // } else if (response === correctAnswer) {
        //     answerArray[i] = true;
        //     console.log('A')
        //     score++;
        //     totalAnswers++;
        // } else {
        //     answerArray[i] = false;
        //     console.log('B')
        //     totalAnswers++;
        // }

        letterColoring(answerArray);
        console.log(pasapalabraArray)
    }

    //after finishing first round of letters, if there are pasapalabra letters, we will start the pasapalabra loop
    if (pasapalabraArray.length > 0) {
        pasapalabraLoop(pasapalabraArray, answerArray);
    }
}

const pasapalabraLoop = async (pasapalabraArray, answerArray) => {
    //loop de preguntas pasapalabra despues de pasar todas las letras
    const answerBox = document.querySelector('.game-input');
    const questionResponse = () => {
        return new Promise((res, rej) => {
            answerBox.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    console.log(answerBox.value.trim())
                    res(answerBox.value.toLowerCase().trim());
                }
            })
        })
    }

    for (let i = 0; i < pasapalabraArray.length; i++) {
        answerBox.value = '';
        const questionElement = document.querySelector('.question');
        const randomQuestion = pasapalabraArray[i][0];
        questionElement.textContent = randomQuestion.question;
        const correctAnswer = pasapalabraArray[i][1];
        const questionIndex = pasapalabraArray[i][2];

        const response = await questionResponse();
        console.log(response);

        if (response === correctAnswer) {
            answerArray[i] = true;
            console.log('A')
            score++;
        } else {
            answerArray[i] = false;
            console.log('B')
        }
        letterColoring(answerArray);
    }
}
const createInputElement = () => {
    const answerBox = document.createElement('input');
    answerBox.classList.add('game-input');
    rightContainer.appendChild(answerBox);
}

const createQuestionElement = () => {
    const questionElement = document.createElement('p');
    questionElement.classList.add('question');
    rightContainer.appendChild(questionElement);
}

const letterColoring = (answerArray) => {    
    answerArray.forEach((answer, index) => {
        if (answer === true) {
            lettersDOM[index].classList.add('correct-answer');
            lettersDOM[index].classList.remove('wrong-answer');
            lettersDOM[index].classList.remove('no-answer');
        } else if (answer === false) {
            lettersDOM[index].classList.add('wrong-answer');
            lettersDOM[index].classList.remove('no-answer');
            lettersDOM[index].classList.remove('correct-answer');     
        } else if (answer === null) {
            lettersDOM[index].classList.add('no-answer');
            lettersDOM[index].classList.remove('wrong-answer');
            lettersDOM[index].classList.remove('correct-answer');        
        }
    })
}


const finishGame = (score) => {
    const questionElement = document.querySelector('.question');
    const answerBox = document.querySelector('.game-input');
    questionElement.classList.add('hide');
    answerBox.classList.add('hide');

    const finalScoreDOM = document.createElement('p');
    finalScoreDOM.textContent = `
    El juego ha terminado.
    Su puntaje final es de ${score}.
    ¿Desea volver a intentarlo?
    `;
    finalScoreDOM.classList.add('final-score');

    const replayButton = document.createElement('button');
    replayButton.textContent = 'Jugar';
    replayButton.classList.add('play-button');
    replayButton.classList.add('replay-button');
    replayButton.addEventListener('click', () => {
        round++;

        gameLoop();
    });

    rightContainer.appendChild(finalScoreDOM);
    rightContainer.appendChild(replayButton);
}