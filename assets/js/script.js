let startButton = document.getElementById("start-btn");
let welcome = document.getElementById("welcome");
let questionHolder = document.getElementById("question-holder");
let scoreContainer = document.getElementById("score-container");
let resultMessage = document.getElementById("result-message");
let scoreMessage = document.getElementById("score-message")
let difficultySelector = document.querySelectorAll('[name="level"]');
let answerSelector = document.querySelectorAll('[name="answer"]')
let difficulty = document.getElementById("difficulty");


let submitBtn = document.getElementById("submit");
let maxQuestion = 10;
let diffChecked = false;
let answerChecked = false
let username = document.querySelector("#username");

let waste = document.getElementById("waste-time");
let giveMe = document.getElementById("give-me");
let stupid = document.getElementById("stupid");
let idiot = document.getElementById("idiot");
let whatToSay = document.getElementById("what-to-say");
let something = document.getElementById("something")

let questions = [
    {
      question: `Al Pacino starred in the 1975 film Dog Day Afternoon that is the true story of a bank robbery gone bad. Where did the attempted robbery take place?`,
      choices: [`Chicago`, `Los Angeles`, `Boston`, `New York`],
      answer: `d`,
      difficulty: `hard`,
    },

    {
      question: `Al Pacino and Robert De Niro have starred in a total of four movies together, can you name the film that they first shared screen time in?`,
      choices: [
        `Righteous Kill`,
        `Heat`,
        `The Godfather Part II`,
        `The Irishman`,
      ],
      answer: `b`,
      difficulty: `hard`,
    },

    {
      question: `Al Pacino has starred in numerous play's and their movie adaption, although not always playing the same character. 
        Can you name the film/play where he doesn't play's the same character?`,
      choices: [
        `Glengarry Glen Ross`,
        `Salome`,
        `The Merchant of Venice`,
        `Richard III`,
      ],
      answer: `a`,
      difficulty: `hard`,
    },

    {
      question: `Al Pacino starred in the cult classic Scarface in 1983 that was directed by Brain De Palma, 
        but can you name the Academy Award winning Best Director that wrote the screenplay?`,
      choices: [
        `Francis Ford Coppla`,
        `Oliver Stone`,
        `Mel Gibson`,
        `Steven Spielberg`,
      ],
      answer: `b`,
      difficulty: `hard`,
    },

    {
      question: `Al Pacino has turend down multiple icon movie character throughout his career, can you pick the role he did play out of these roles?`,
      choices: [
        `Han Sole (Star Wars)`,
        `Ted Kramer (Kramer vs. Kramer)`,
        `Carlito Brigante (Carlito's Way)`,
        `Captain Willard (Apocalypse Now)`,
      ],
      answer: `c`,
      difficulty: `hard`,
    },

    {
      question: `Al Pacino starred in the 2019 film The Irishman directed by Martin Scorsese, can you pick the labour union leader that he played?`,
      choices: [
        `Jimmy Hoffa`,
        `Russel Bufalino`,
        `Frank Sheeran`,
        `Angelo Bruno`,
      ],
      answer: `a`,
      difficulty: `hard`,
    },

    {
      question: `Al Pacino plays the character of Lefty Ruggiero in the 1997 film Donnie Brasco, can you pick the actor who co-star as the character of the movie title?`,
      choices: [
        `Kevin Costner`,
        `Dustin Hoffman`,
        `Johnny Depp`,
        `Russell Crowe`,
      ],
      answer: `c`,
      difficulty: `hard`,
    },

    {
      question: `Al Pacino has worked with many reowned director throughout his career, can you pick the director he hasn't work with?`,
      choices: [
        `Ridley Scott`,
        `Quentin Tarantino`,
        `Oliver Stone`,
        `Steven Spielberg`,
      ],
      answer: `d`,
      difficulty: `hard`,
    },

    {
      question: `Al Pacino has starred alongside Robin Williams in a 2002 psychological thriller that was directed by Christopher Nolan, can you pick that film?`,
      choices: [`Seven`, `Memento`, `The Prestige`, `Insomnia`],
      answer: `d`,
      difficulty: `hard`,
    },

    {
      question: `Al Pacino has played himself in one film that starred Adam Sandler, can you pick that film?`,
      choices: [`Big Daddy`, `Mr. Deeds`, `Jack and Jill`, `The Waterboy`],
      answer: `c`,
      difficulty: `hard`,
    },

    {
      question: `Al Pacino has starred in the The Godfather Trilogy, can you name the charter he portrays?`,
      choices: [
        `Fredo Corleone`,
        `Michael Corleone`,
        `Tom Hagen`,
        `Sonny Corleone`,
      ],
      answer: `b`,
      difficulty: `medium`,
    },

    {
      question: `Al Pacino plays as Alphonse "Big Boy" Caprice in which 1990 film that is based on a comic strip that is actively running today?`,
      choices: [`Flash Gordon`, `The Phantom`, `Popeye`, `Dick Tracy`],
      answer: `d`,
      difficulty: `medium`,
    },

    {
      question: `Al Pacino starred alongside which actor in The Devil's Advocate, that is known for films such as Point Break, Speed and The Matrix?`,
      choices: [
        `Keanu Reeves`,
        `Patrick Swayze`,
        `Jeff Daniels`,
        `Joe Pantoliano`,
      ],
      answer: `a`,
      difficulty: `medium`,
    },

    {
      question: `Al Pacino starred in the 1973 film Serpico that was director by which director?`,
      choices: [`Sidney Lumet`, `David Lean`, `Mel Brooks`, `Alfred Hitchcock`],
      answer: `a`,
      difficulty: `medium`,
    },

    {
      question: `Al Pacino starred in the play Julius Caesar that was written by which famous writer?`,
      choices: [
        `Samuel Beckett`,
        `Friedrich Schiller`,
        `Jean-Paul Sartre`,
        `William Shakespeare`,
      ],
      answer: `c`,
      difficulty: `medium`,
    },

    {
      question: `Al Pacino won an Primetime Emmy Award for Outstanding Lead Actor in a Limited movie for which television film?  `,
      choices: [`You Don't Know Jack `, `Phil Spector`, `Paterno`, `Hunters`],
      answer: `a`,
      difficulty: `medium`,
    },

    {
      question: `Al Pacino has starred alongside John Cazale in how many film?`,
      choices: [`1`, `2`, `3`, `4`],
      answer: `c`,
      difficulty: `medium`,
    },

    {
      question: `Al Pacino starred alongside which rapper in the 2008 film Righteous Kill?`,
      choices: [`The Game`, `50 Cent`, `Ja Rule `, `Rick Ross`],
      answer: `b`,
      difficulty: `medium`,
    },

    {
      question: `Al Pacino has direted which 2000 independent film that is adapted from a Ira Lewis play?`,
      choices: [`People I Know`, `Chinese Coffe`, `Manglehorn`, `City Hall`],
      answer: `b`,
      difficulty: `medium`,
    },

    {
      question: `Al Pacino is known for many of his famous movie quotes, can you finish this quote? "Every dog has his ? " `,
      choices: [`Dinner`, `Truth`, `Day`, `Enemies`],
      answer: `c`,
      difficulty: `medium`,
    },

    {
      question: `Al Pacino starred as which character in the 1983 film Scarface?`,
      choices: [`Indiana Jones`, `James Bond`, `Tony Montana`, `Harry Potter`],
      answer: `c`,
      difficulty: `easy`,
    },
    {
      question: `What is the name of the film that Al pacino has won his first and only Academy Award?`,
      choices: [
        `Dog Day Afternoon`,
        `The Godfather Part II`,
        `Serpico`,
        `Scent of a Woman`,
      ],
      answer: `d`,
      difficulty: `easy`,
    },
    {
      question: `Al Pacino has not starrted in one of these movies, can you you pick the right movie?`,
      choices: [`Heat`, `Any Given Sunday`, `Casino`, `Carlito's way`],
      answer: `c`,
      difficulty: `easy`,
    },
    {
      question: `Al Pacino utters the famous "You're Out of Order" line? in which movie?`,
      choices: [
        `...And Justice for All`,
        `The Devil's Advocate`,
        `Scent of a Woman`,
        `City Hall`,
      ],
      answer: `a`,
      difficulty: `easy`,
    },
    {
      question: `Al Pacino starred in 2019 film The Irishman, can you pick the actor who doesn't co-star in the film`,
      choices: [
        `Robert De Niro`,
        `Christopher Walken`,
        `Joe Pesci`,
        `Harvey Keitel`,
      ],
      answer: `b`,
      difficulty: `easy`,
    },
    {
      question: `Al Pacino portrays Tony D'Anato a head coach of the Miami Sharks in the 1999 movie Any Given Sunday, what sport do the Miami Sharks play?`,
      choices: [`American Football`, `Basketball`, `Ice Hockey`, `Baseball`],
      answer: `a`,
      difficulty: `easy`,
    },
    {
      question: `Al Pacino starred alongside George Clooney, Brad Pitt and Matt Damon, in which 2007 heist movie?`,
      choices: [`Ronin`, `Ocean's Thirteen`, `Inception`, `The Town`],
      answer: `b`,
      difficulty: `easy`,
    },
    {
      question: `Al Pacino portrays Michael Corleone in the Godfather Trilogy that was directed by which director?`,
      choices: [
        `George Lucas`,
        `Stanley Kubrick`,
        `Francis Ford Coppola`,
        `Roman Polanski`,
      ],
      answer: `c`,
      difficulty: `easy`,
    },
    {
      question: `Al Pacino is known for many of his famous movie quotes, can you finish this quote "Say hello to my little ?"?`,
      choices: [`Chicken`, `Man`, `Doggie`, `Friend`],
      answer: `d`,
      difficulty: `easy`,
    },
    {
      question: `Al Pacino starred alongisde which actor in the 1999 film The Insider, known for roles in movies such as Gladiator, American Gangster and A Beautiful Mind?`,
      choices: [`Russel Crowe`, `Tom Hanks`, `Ed Harris`, `Denzel Washington`],
      answer: `a`,
      difficulty: `easy`,
    },
  ],
    question = document.querySelector("#question"),
    answers = document.querySelectorAll("#answer-holder label span"),
    qcount = document.querySelector("#question-counter"),
    qtotal = document.querySelector("#questions-total"),
    acount = document.querySelector("#score-counter");

username.addEventListener("input", function () {
  validateInput();
});

difficultySelector.forEach(function (item) {
  item.addEventListener("click", function () {
    diffChecked = true;
    validateInput();
  });
});

answerSelector.forEach(function (item) {
  item.addEventListener("click", function(){
    answerChecked = true;
    selectedAnswer();
  })
});

function validateInput() {
  if (username.value.trim().length && diffChecked) {
    startButton.disabled = false;
  } else {
    startButton.disabled = true;
  }
}

function selectedAnswer(){
  if (answerChecked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true
  }
}

function shfl(a) {
  // Durstenfeld shuffle
  for (let j, i = a.length; i > 1; ) {
    j = Math.floor(Math.random() * i--);
    if (i != j) [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function nextQ() {
  // get next question of filtered and shuffled selection
  if ((questions.Q = questions.sel.shift())) {
    question.textContent = questions.Q.question;
    answers.forEach((a, i) => {
      a.textContent = questions.Q.choices[i];
      a.previousElementSibling.checked = false;
    });
    
  } else endQuiz();
}

document.querySelectorAll("input[name=level]").forEach(
  (lvl) =>
    (lvl.onclick = (_) => {
      // filter questions according to level and shuffle them into questions.sel
      questions.sel = shfl(questions.filter((q) => q.difficulty == lvl.value));
      acount.textContent = "0";
      qcount.textContent = "1";
      qtotal.textContent = questions.sel.length;
      nextQ();
    })
);
document.querySelector("#submit").onclick = (_) => {
  // submit button ==> submit answer
  if (questions.Q) {
    // only after game is initialised ...
    const ans = document.querySelector("#answer-holder input:checked");
    ++qcount.textContent;
    if (ans?.value == questions.Q.answer) 
    ++acount.textContent;
    nextQ();
    
    answerChecked = false
    selectedAnswer();
  } 
    

  if (answers.value) {
    const ans = document.querySelector("#answer-holder input:checked");
    if (ans?.value === question.answer)
    
    giveMe.play();
  } else {
    idiot.play();
  }
};

function startQuiz() {
  welcome.classList.add("hide");
  questionHolder.classList.remove("hide");

  let username = document.getElementById("username").value;
  document.getElementById("post").innerHTML = "Username:" + username;
}

function endQuiz() {
  questionHolder.classList.add("hide");
  scoreContainer.classList.remove("hide");

  if (acount.textContent >= 10){
    resultMessage.innerHTML = `${username.value} you have reach god-tier`
  } else if (acount.textContent >= 8) {
    stupid.play();
    resultMessage.innerHTML = `${username.value}`;
  } else if (acount.textContent >= 5) {
    something.play();
    resultMessage.innerHTML = `${username.value} you might have some potenial`
  } else if (acount.textContent >= 3) {
    whatToSay.play();
    resultMessage.innerHTML = `What was that ${username.value}`;
  } else if (acount.textContent >= 0) {
    waste.play();
    resultMessage.innerHTML = `Why even bother ${username.value}`;
  }
  scoreMessage.innerHTML = `${acount.textContent}/${maxQuestion}`;
}

startButton.addEventListener("click", startQuiz);
