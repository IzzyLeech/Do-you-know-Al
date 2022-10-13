let startButton = document.getElementById('start-btn');
let welcome = document.getElementById("welcome");
let questionHolder = document.getElementById("question-holder");

startButton.addEventListener('click', startQuiz);


/**
 * Function for transtion of the welcome menu to the questions
 */
function startQuiz(){
    welcome.classList.add("hide");
    questionHolder.classList.remove('hide');
}

/**
 * Question for the quiz
 */

let questions = [
    {
        question: `What is the name of the film that Al pacino has won his first and only Academy Award?`,
        a: `Dog Day Afternoon`,
        b: `The Godfather Part II`,
        c: `Serpico`,
        d: `Scent of a Woman`,
        answer: `d`
    },

    {
        question: `Al Pacino and Robert De Niro have starred in a total of four movies together, can you name the film that they first shared screen time in?`,
        a: `Righteous Kill`,
        b: `Heat`,
        c: `The Godfather Part II`,
        d: `The Irishman`,
        answer: `b`
    },

    {
        question: `Al Pacino has starred in numerous play's and their movie adaption, although not always playing the same character. 
        Can you name the film/play where he doesn't play's the same character?`,
        a: `Glengarry Glen Ross`,
        b: `Salome`,
        c: `The Merchant of Venice`,
        d: `Richard III`,
        answer: `c`
    },
    
    {
        question: `Al Pacino starred in the cult classic Scarface in 1983 that was directed by Brain De Palma, 
        but can you name the Academy Award winning Best Director that wrote the screenplay?`,
        a: `Francis Ford Coppla`,
        b: `Oliver Stone`,
        c: `Mel Gibson`,
        d: `Steven Spielberg`,
        answer: `b`,
    },

    {
        question: `Al Pacino has turend down multiple icon movie character throughout his career, can you pick the role he did play out of these roles?`,
        a: `Han Sole (Star Wars)`,
        b: `Ted Kramer (Kramer vs. Kramer)`,
        c: `Carlito Brigante (Carlito's Way)`,
        d: `Captain Willard (Apocalypse Now)`,
        answer: `c`
    },

    {
        question: `Al Pacino starred in the 2019 film The Irishman directed by Martin Scorsese, can you pick the labour union leader that he played?`,
        a: `Jimmy Hoffa`,
        b: `Russel Bufalino`,
        c: `Frank Sheeran`,
        d: `Angelo Bruno`,
        answer: `a`
    },

    {
        question: `Al Pacino plays the character of Lefty Ruggiero in the 1997 film Donnie Brasco, can you pick the actor who co-star as the character of the movie title?`,
        a: `Kevin Costner`,
        b: `Dustin Hoffman`,
        c: `Johnny Depp`,
        d: `Russell Crowe`,
        answer: `c`
    },

    {
        question: `Al Pacino has worked with many reowned director throughout his career, can you pick the director he hasn't work with?`,
        a: `Ridley Scott`,
        b: `Quentin Tarantino`,
        c: `Oliver Stone`,
        d: `Steven Spielberg`,
        answer: `d`
    },

    {
        question: `Al Pacino has starred alongside Robin Williams in a 2002 psychological thriller that was directed by Christopher Nolan, can you pick that film?`,
        a: `Seven`,
        b: `Memento`,
        c: `The Prestige`,
        d: `Insomnia`,
        answer: `d`
    },

    {
        question: `Al Pacino has played himself in one film that starred Adam Sandler, can you pick that film?`,
        a:`Big Daddy`,
        b: `Mr. Deeds`,
        c: `Jack and Jill`,
        d: `The Waterboy`,
        answer: `c`
    }



]

let questionE1 = document.getElementById("question")
let a_answer = document.getElementById("a-answer");
let b_answer = document.getElementById("b-answer");
let c_answer = document.getElementById("c-answer");
let d_answer = document.getElementById("d-answer");
let submitBtn = document.getElementById("submit");

let currentQuiz = 0;

displayQuestion();

/**
 * Function to display the question in the question holder.
 */

function displayQuestion() {
    let currentQuestion = questions[currentQuiz];

    questionE1.innerText = currentQuestion.question
    a_answer.innerText = currentQuestion.a
    b_answer.innerText = currentQuestion.b
    c_answer.innerText = currentQuestion.c
    d_answer.innerText = currentQuestion.d

}

/**
 * event listner to go through all the question
 */
submitBtn.addEventListener('click', () => {
    currentQuiz++;

    displayQuestion();
})

