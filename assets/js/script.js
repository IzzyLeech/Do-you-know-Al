let startButton = document.getElementById('start-btn');
let welcome = document.getElementById("welcome");
let questionHolder = document.getElementById("question-holder");
let scoreContainer = document.getElementById("score-container")
let answers = document.querySelectorAll(".answer");

let easyDifficulty = document.getElementById("easy-diff");
let mediumDifficulty = document.getElementById("medium-diff");
let hardDifficulty = document.getElementById("hard-diff");
let difficultyLevel = "";

let questionCounter = 1;
let maxQuestion = 10
let currentQuiz = 0;
let score = 0;

let diffChecked = false
let difficulty = document.querySelectorAll('[name="difficulty"]');
let username = document.querySelector('#username');



let questions = [
    {
        question: `Al Pacino starred in the 1975 film Dog Day Afternoon that is the true story of a bank robbery gone bad. Where did the attempted robbery take place?`,
        a: `Chicago`,
        b: `Los Angeles`,
        c: `Boston`,
        d: `New York`,
        answer: `d`,
        difficulty:`hard`
    
    },

    {
        question: `Al Pacino and Robert De Niro have starred in a total of four movies together, can you name the film that they first shared screen time in?`,
        a: `Righteous Kill`,
        b: `Heat`,
        c: `The Godfather Part II`,
        d: `The Irishman`,
        answer: `b`,
        difficulty:`hard`
    },

    {
        question: `Al Pacino has starred in numerous play's and their movie adaption, although not always playing the same character. 
        Can you name the film/play where he doesn't play's the same character?`,
        a: `Glengarry Glen Ross`,
        b: `Salome`,
        c: `The Merchant of Venice`,
        d: `Richard III`,
        answer: `c`,
        difficulty:`hard`
    },
    
    {
        question: `Al Pacino starred in the cult classic Scarface in 1983 that was directed by Brain De Palma, 
        but can you name the Academy Award winning Best Director that wrote the screenplay?`,
        a: `Francis Ford Coppla`,
        b: `Oliver Stone`,
        c: `Mel Gibson`,
        d: `Steven Spielberg`,
        answer: `b`,
        difficulty:`hard`
    },

    {
        question: `Al Pacino has turend down multiple icon movie character throughout his career, can you pick the role he did play out of these roles?`,
        a: `Han Sole (Star Wars)`,
        b: `Ted Kramer (Kramer vs. Kramer)`,
        c: `Carlito Brigante (Carlito's Way)`,
        d: `Captain Willard (Apocalypse Now)`,
        answer: `c`,
        difficulty:`hard`
    },

    {
        question: `Al Pacino starred in the 2019 film The Irishman directed by Martin Scorsese, can you pick the labour union leader that he played?`,
        a: `Jimmy Hoffa`,
        b: `Russel Bufalino`,
        c: `Frank Sheeran`,
        d: `Angelo Bruno`,
        answer: `a`,
        difficulty:`hard`
    },

    {
        question: `Al Pacino plays the character of Lefty Ruggiero in the 1997 film Donnie Brasco, can you pick the actor who co-star as the character of the movie title?`,
        a: `Kevin Costner`,
        b: `Dustin Hoffman`,
        c: `Johnny Depp`,
        d: `Russell Crowe`,
        answer: `c`,
        difficulty:`hard`
    },

    {
        question: `Al Pacino has worked with many reowned director throughout his career, can you pick the director he hasn't work with?`,
        a: `Ridley Scott`,
        b: `Quentin Tarantino`,
        c: `Oliver Stone`,
        d: `Steven Spielberg`,
        answer: `d`,
        difficulty:`hard`
    },

    {
        question: `Al Pacino has starred alongside Robin Williams in a 2002 psychological thriller that was directed by Christopher Nolan, can you pick that film?`,
        a: `Seven`,
        b: `Memento`,
        c: `The Prestige`,
        d: `Insomnia`,
        answer: `d`,
        difficulty:`hard`
    },

    {
        question: `Al Pacino has played himself in one film that starred Adam Sandler, can you pick that film?`,
        a: `Big Daddy`,
        b: `Mr. Deeds`,
        c: `Jack and Jill`,
        d: `The Waterboy`,
        answer: `c`,
        difficulty:`hard`
    },

    {
        question: `Al Pacino has starred in the The Godfather Trilogy, can you name the charter he portrays?`,
        a: `Fredo Corleone`,
        b: `Michael Corleone`,
        c: `Tom Hagen`,
        d: `Sonny Corleone`,
        answer: `b`,
        difficulty:`medium`

    },

    {
        question: `Al Pacino plays as Alphonse "Big Boy" Caprice in which 1990 film that is based on a comic strip that is actively running today?`,
        a: `Flash Gordon`,
        b: `The Phantom`,
        c: `Popeye`,
        d: `Dick Tracy`,
        answer: `d`,
        difficulty:`medium`
    },

    {
        question: `Al Pacino starred alongside which actor in The Devil's Advocate, that is known for films such as Point Break, Speed and The Matrix?`,
        a: `Keanu Reeves`,
        b: `Patrick Swayze`,
        c: `Jeff Daniels`,
        d: `Joe Pantoliano`,
        answer: `a`,
        difficulty:`medium`
    },

    {
        question: `Al Pacino starred in the 1973 film Serpico that was director by which director?`,
        a: `Sidney Lumet`,
        b: `David Lean`,
        c: `Mel Brooks`,
        d: `Alfred Hitchcock`,
        answer: `a`,
        difficulty:`medium`
    },

    {
        question: `Al Pacino starred in the play Julius Caesar that was written by which famous writer?`,
        a: `Samuel Beckett`,
        b: `Friedrich Schiller`,
        c: `Jean-Paul Sartre`,
        d: `William Shakespeare`,
        answer: `c`,
        difficulty:`medium`
    },

    {
        question: `Al Pacino won an Primetime Emmy Award for Outstanding Lead Actor in a Limited movie for which television film?  `,
        a: `You Don't Know Jack `,
        b: `Phil Spector`,
        c: `Paterno`,
        d: `Hunters`,
        answer: `a`,
        difficulty:`medium`
    },

    {
        question: `Al Pacino has starred alongside John Cazale in how many film?`,
        a: `1`,
        b: `2`,
        c: `3`,
        d: `4`,
        answer: `c`,
        difficulty:`medium`
    },

    {
        question: `Al Pacino starred alongside which rapper in the 2008 film Righteous Kill?`,
        a: `The Game`,
        b: `50 Cent`,
        c: `Ja Rule `,
        d: `Rick Ross`,
        answer: `b`,
        difficulty:`medium`
    },

    {
        question: `Al Pacino has direted which 2000 independent film that is adapted from a Ira Lewis play?`,
        a: `People I Know`,
        b: `Chinese Coffe`,
        c: `Manglehorn`,
        d: `City Hall`,
        answer: `b`,
        difficulty:`medium`
    },

    {
        question: `Al Pacino is known for many of his famous movie quotes, can you finish this quote? "Every dog has his ? " `,
        a: `Dinner`,
        b: `Truth`,
        c: `Day`,
        d: `Enemies`,
        answer: `c`,
        difficulty:`medium`
    },

    {
        question:`Al Pacino starred as which character in the 1983 film Scarface?`,
        a:`Indiana Jones`,
        b:`James Bond`,
        c:`Tony Montana`,
        d:`Harry Potter`,
        answer:`c`,
        difficulty:`easy`
    },
    {
        question: `What is the name of the film that Al pacino has won his first and only Academy Award?`,
        a: `Dog Day Afternoon`,
        b: `The Godfather Part II`,
        c: `Serpico`,
        d: `Scent of a Woman`,
        answer: `d`,
        difficulty:`easy`

    },
    {
        question:`Al Pacino has not starrted in one of these movies, can you you pick the right movie?`,
        a:`Heat`,
        b:`Any Given Sunday`,
        c:`Casino`,
        d:`Carlito's way`,
        answer:`c`,
        difficulty:`easy`

    },
    {
        question:`Al Pacino utters the famous "You're Out of Order" line? in which movie?`,
        a:`...And Justice for All`,
        b:`The Devil's Advocate`,
        c:`Scent of a Woman`,
        d:`City Hall`,
        answer:`a`,
        difficulty:`easy`
    },
    {
        question:`Al Pacino starred in 2019 film The Irishman, can you pick the actor who doesn't co-star in the film`,
        a:`Robert De Niro`,
        b:`Christopher Walken`,
        c:`Joe Pesci`,
        d:`Harvey Keitel`,
        answer:`b`,
        difficulty:`easy`
    },
    {
        question:`Al Pacino portrays Tony D'Anato a head coach of the Miami Sharks in the 1999 movie Any Given Sunday, what sport do the Miami Sharks play?`,
        a:`American Football`,
        b:`Basketball`,
        c:`Ice Hockey`,
        d:`Baseball`,
        answer:`a`,
        difficulty:`easy`

    },
    {
        question:`Al Pacino starred alongside George Clooney, Brad Pitt and Matt Damon, in which 2007 heist movie?`,
        a:`Ronin`,
        b:`Ocean's Thirteen`,
        c:`Inception`,
        d:`The Town`,
        answer:`b`,
        difficulty:`easy`
    },
    {
        question:`Al Pacino portrays Michael Corleone in the Godfather Trilogy that was directed by which director?`,
        a:`George Lucas`,
        b:`Stanley Kubrick`,
        c:`Francis Ford Coppola`,
        d:`Roman Polanski`,
        answer:`c`,
        difficulty:`easy`
    },
    {
        question:`Al Pacino is known for many of his famous movie quotes, can you finish this quote "Say hello to my little ?"?`,
        a:`Chicken`,
        b:`Man`,
        c:`Doggie`,
        d:`Friend`,
        answer:`d`,
        difficulty:`easy`
    },
    {
        question:`Al Pacino starred alongisde which actor in the 1999 film The Insider, known for roles in movies such as Gladiator, American Gangster and A Beautiful Mind?`,
        a:`Russel Crowe`,
        b:`Tom Hanks`,
        c:`Ed Harris`,
        d:`Denzel Washington`,
        answer:`a`,
        difficulty:`easy`
    },
    
]

let filteredQuestions  = questions.filter(question => question.difficulty === difficultyLevel)
/**
  * Button difficulty selected
  */


startButton.addEventListener('click', startQuiz);

username.addEventListener('input', function() {
    validateInput();    
})

difficulty.forEach(function(item){
    item.addEventListener('click', function(){
        diffChecked = true;
        validateInput();
    })
})

function validateInput() {
    if (username.value.trim().length && diffChecked ){
        startButton.disabled = false;
    } else {
        startButton.disabled = true
    }
}




/*function play() {
    if(document.getElementById("username").value===""){
        let give = document.getElementById("give-me")
        give.play()
    } else {
        let waste = document.getElementById("waste-time");
        waste.play()
    }
}*/

/**
 * Function for transtion of the welcome menu to the questions
 */
function startQuiz(){

    welcome.classList.add("hide");
    questionHolder.classList.remove('hide');

    let username = document.getElementById("username").value;
    document.getElementById("post").innerHTML = "Username:" + username ;

    /*let startTime = 1;
    let time = startTime * 60;
    let timer = document.getElementById("timer");

    setInterval(countDown, 1000);

    function countDown() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    timer.innerHTML = `${minutes}: ${seconds}`;
    time--;
    }*/

}

/**
 * Question for the quiz
 */

let questionE1 = document.getElementById("question")
let a_answer = document.getElementById("a-answer");
let b_answer = document.getElementById("b-answer");
let c_answer = document.getElementById("c-answer");
let d_answer = document.getElementById("d-answer");
let submitBtn = document.getElementById("submit");



easyDifficulty.addEventListener('click', questions)
mediumDifficulty.addEventListener('click', questions)
hardDifficulty.addEventListener('click', questions)


let pickDifficulty = () => {
    if (easyDifficulty.checked){
        difficultyLevel = "easy";
    } else if (mediumDifficulty.checked){
        difficultyLevel = "medium";
    }else if (hardDifficulty.checked){
        difficultyLevel = "hard";
    }
    }

/*function displayHardQuestion (){

    let currentQuestion = questionsHard [currentQuiz];

    questionE1.innerText = currentQuestion.question
    a_answer.innerText = currentQuestion.a
    b_answer.innerText = currentQuestion.b
    c_answer.innerText = currentQuestion.c
    d_answer.innerText = currentQuestion.d

    deselectAnswer();

}

function displayMediumQuestion(){

    let currentQuestion = questionsMedium [currentQuiz];

    questionE1.innerText = currentQuestion.question
    a_answer.innerText = currentQuestion.a
    b_answer.innerText = currentQuestion.b
    c_answer.innerText = currentQuestion.c
    d_answer.innerText = currentQuestion.d

    deselectAnswer();

}

function displayEasyQuestion(){

    let currentQuestion = questionsEasy [currentQuiz];

    questionE1.innerText = currentQuestion.question
    a_answer.innerText = currentQuestion.a
    b_answer.innerText = currentQuestion.b
    c_answer.innerText = currentQuestion.c
    d_answer.innerText = currentQuestion.d

    deselectAnswer();

}*/

displayQuestion();

function displayQuestion () {
    
    let currentQuestion = questions[currentQuiz]

    if (pickDifficulty === "easy") {
        return filteredQuestions;
    } else if (pickDifficulty === "medium"){
        return filteredQuestions;
    } else if (pickDifficulty === "hard"){
        return filteredQuestions;
    }

    questionE1.innerText = currentQuestion.question
    a_answer.innerText = currentQuestion.a
    b_answer.innerText = currentQuestion.b
    c_answer.innerText = currentQuestion.c
    d_answer.innerText = currentQuestion.d

    deselectAnswer()
}

document.getElementById('submit').onclick = function(){
    questionCounter+=1;
    document.getElementById('question-counter').innerHTML = `<h3>Question:${questionCounter}</h3>`
}

function selectedAnswer() {

    let answer = undefined;

    answers.forEach(answers => {
        if(answers.checked){
            answer = answers.id;
        }
    })

    return answer
}

function deselectAnswer(){
    answers.forEach(answers => {
        answers.checked = false;
});
}

function endQuiz(){
        questionHolder.classList.add('hide');
            scoreContainer.classList.remove("hide");
            scoreContainer.innerHTML = `<h2>${username.value} answered correctly ${score}/${questions.length} questions.</h2>`;
}

function nextQuestion (){
    
    let answer = selectedAnswer();

    if(answer){
        if (answer === questions[currentQuiz].answer)  {
            score++;
            document.getElementById('score-counter').innerHTML = `<h3>Score:${score} / ${maxQuestion}</h3>`
        } else {
            
        }

    currentQuiz++;
        if (currentQuiz < questions.length) {
        displayQuestion();
    } else endQuiz() 
}

/*else if(answer){
        if (answer === questionsMedium[currentQuiz].answer)  {
            score++;
        }

    currentQuiz++;
        if (currentQuiz < questionsMedium.length) {
            displayMediumQuestion();
        
    } else endQuiz() 
}

else if (answer){
        if (answer === questionsEasy[currentQuiz].answer)  {
            score++;
        }

    currentQuiz++;
        if (currentQuiz < questionsEasy.length) {
            displayEasyQuestion();
        
    } else endQuiz() */
}


/**
 * event listner and loopto go through all the question and answer to
 *  transtion to score container when finished
 */
submitBtn.addEventListener('click', nextQuestion);
