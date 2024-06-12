const startButton = document.getElementById("start-btn");
const submitBtn = document.getElementById("submit");
const welcome = document.getElementById("welcome");
const questionHolder = document.getElementById("question-holder");
const scoreContainer = document.getElementById("score-container");
const resultMessage = document.getElementById("result-message");
const scoreMessage = document.getElementById("score-message");
const difficultySelector = document.querySelectorAll('[name="level"]');
const answerSelector = document.querySelectorAll('[name="answer"]');
const correctAnswerElement = document.getElementById("correct-answer");
let username = document.querySelector("#username");

/*
*Game Variable
*/
const maxQuestion = 10;
let currentQuestionIndex = 0;
/*
*Validate Variables
*/
let diffChecked = false;
let answerChecked = false;

/*
*Audio
*/
const waste = document.getElementById("waste-time");
const giveMe = document.getElementById("give-me");
const idiot = document.getElementById("idiot");
const whatToSay = document.getElementById("what-to-say");
const something = document.getElementById("something");
const winning = document.getElementById("winning")
const trade = document.getElementById("trade")
const bingo = document.getElementById("bingo")

/* Timer variables*/
let timerInterval;
const timePerDifficulty = {
  easy: 0, // No time for easy questions
  medium: 20, // 20 seconds for medium questions
  hard: 10, // 10 seconds for hard questions
};
let timeLeft = 0;

/* Update the timer display */
function updateTimerDisplay() {
  document.getElementById('time-left').textContent = timeLeft;
}

// Show or hide the timer container
function toggleTimerDisplay(show) {
  const timerContainer = document.getElementById('timer');
  timerContainer.style.display = show ? 'block' : 'none';
}

// Start the timer
function startTimer(difficulty) {
  timeLeft = timePerDifficulty[difficulty];
  if (timeLeft > 0) {
    updateTimerDisplay();
    toggleTimerDisplay(true); // Show the timer
    timerInterval = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timeOut();
      }
    }, 1000);
  } else {
    toggleTimerDisplay(false); // Hide the timer if no time is set
  }
}

function timeOut() {
  alert("Time's up!");
  disableAnswers();
  showCorrectAnswer(); // Show the correct answer
  trade.play();
  toggleTimerDisplay(false); // Hide the timer

  // Check if the current question is the last one before incrementing the counter
  if (currentQuestionIndex >= maxQuestion) {
    setTimeout(endQuiz, 1000);
  } else {
    ++qcount.textContent; // Increment the question counter
    setTimeout(nextQ, 1000);
  }
}

/*Clear the timer */
function clearTimer() {
  clearInterval(timerInterval);
  toggleTimerDisplay(false); // Hide the timer when cleared
}

/* Disable answer options and submit button */
function disableAnswers() {
  answerSelector.forEach(function (item) {
    item.disabled = true;
  });
  submitBtn.disabled = true;
}

function showCorrectAnswer() {
  const correctAnswerIndex = questions.Q.answer.charCodeAt(0) - 97; // Convert letter to index
  const correctAnswer = questions.Q.choices[correctAnswerIndex];
  correctAnswerElement.textContent = `Correct answer: ${correctAnswer}`;
  correctAnswerElement.style.display = "block"; // Show the correct answer element
}

// Reset the timer display to its original state
function resetTimerDisplay() {
  document.getElementById('timer').innerHTML = `Time left: <span id="time-left"></span>`;
}

/*
*Questions and HTML elements selector 
*/
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
        `William Shakespeare`,
        `Jean-Paul Sartre`,
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


/* Set the parameters for validating input
* and for when ansers is checked
*/
username.addEventListener("input", function () {
  validateInput();
});

difficultySelector.forEach(function (item) {
  item.addEventListener("click", function () {
    diffChecked = true;
    validateInput();
    clearTimer(); // Clear the timer when a new difficulty is selected
  });
});

answerSelector.forEach(function (item) {
  item.addEventListener("click", function () {
    answerChecked = true;
    selectedAnswer();
  });
});

/*function to disable the start button until 
* username and difficulty have been selected
*/
function validateInput() {
  if (username.value.trim().length && diffChecked) {
    startButton.disabled = false;
  } else {
    startButton.disabled = true;
  }
}

/*function to disable the submit button until answer
* is checked
*/
function selectedAnswer() {
  if (answerChecked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
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
  // Check if the current question index is less than 10
  if (currentQuestionIndex < maxQuestion) {
    // Get the next question from the shuffled selection
    const nextQuestion = questions.sel.shift();
    if (nextQuestion) {
      questions.Q = nextQuestion;
      resetTimerDisplay(); // Reset the timer display to its original state
      question.textContent = questions.Q.question;
      answers.forEach((a, i) => {
        a.textContent = questions.Q.choices[i];
        a.previousElementSibling.checked = false;
        a.previousElementSibling.disabled = false; // Re-enable answers
      });
      submitBtn.disabled = true; // Disable submit button initially
      answerChecked = false;
      startTimer(questions.Q.difficulty); // Start the timer for the new question
      correctAnswerElement.style.display = "none"; // Hide the correct answer element

      // Increment the question counter
      currentQuestionIndex++;
      document.getElementById("question-counter").textContent =
        currentQuestionIndex;
    } else {
      // If there are no more questions
      clearTimer(); // Clear the timer if no more questions
      endQuiz();
    }
  } else {
    // If we've already asked 10 questions
    clearTimer(); // Clear the timer if no more questions
    endQuiz();
  }
}


/*Event Listener to filter question based on difficluty for when input has been click on
* it will display question on that difficulty.
* Also set the value for answer counter and question counter
*/
document.querySelectorAll("input[name=level]").forEach(
  (lvl) =>
    (lvl.onclick = (_) => {
      // filter questions according to level and shuffle them into questions.sel
      questions.sel = shfl(questions.filter((q) => q.difficulty == lvl.value));
      acount.textContent = "0";
      qcount.textContent = "1";
      qtotal.textContent = questions.sel.length;
      clearTimer(); // Clear the timer when a new difficulty is selected
    })
);

document.querySelector("#submit").onclick = (_) => {
  // submit button ==> submit answer
  if (questions.Q) {
    // only after game is initialised ...
    const ans = document.querySelector("#answer-holder input:checked");
    if (ans && ans.value == questions.Q.answer) {
      ++acount.textContent;
      bingo.play(); // Play correct sound
    } else {
      trade.play(); // Play incorrect sound
    }
    showCorrectAnswer(); // Show the correct answer
    clearTimer(); // Clear the timer when an answer is submitted
    disableAnswers(); // Disable answer options

    // Check if the current question is the last one before moving to the next question
    if (currentQuestionIndex >= maxQuestion) {
      setTimeout(endQuiz, 2000);
    } else {
      setTimeout(nextQ, 2000); // Move to the next question after a short delay
    }
  }
  answerChecked = false;
  selectedAnswer();
};

/*
*Function to switch from Welcome screen to question screen
*Logs username to question holder
*/

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  welcome.classList.add("hide");
  questionHolder.classList.remove("hide");

  let username = document.getElementById("username").value;
  document.getElementById("post").innerHTML = "Username:" + username;
  nextQ(); // Start the quiz and load the first question
}

function sendQuizResult(username, score, difficulty) {
  // Set the values of the form fields
  document.getElementById("formUsername").value = username;
  document.getElementById("formScore").value = score;
  document.getElementById("formDifficulty").value = difficulty;
  // Submit the form
  document.getElementById("quizForm").submit();
}

/*
 *Function to switch question screen to result screen
 * Show the user their score and give message and audio
 */
function endQuiz() {
  questionHolder.classList.add("hide");
  scoreContainer.classList.remove("hide");

  const username = document.getElementById("username").value;
  const score = document.getElementById("score-counter").textContent;

  // Capture the selected difficulty level
  let difficulty;
  if (document.getElementById("easy-diff").checked) {
    difficulty = "easy";
  } else if (document.getElementById("medium-diff").checked) {
    difficulty = "medium";
  } else if (document.getElementById("hard-diff").checked) {
    difficulty = "hard";
  }

  // Send the quiz result
  sendQuizResult(username, score, difficulty);

  if (acount.textContent >= 10) {
    resultMessage.innerHTML = `${username} you have reached god-tier`;
    winning.play();
  } else if (acount.textContent >= 8) {
    giveMe.play();
    resultMessage.innerHTML = `${username} getting better but still not there yet`;
  } else if (acount.textContent >= 5) {
    something.play();
    resultMessage.innerHTML = `${username} you might have some potential`;
  } else if (acount.textContent >= 3) {
    whatToSay.play();
    resultMessage.innerHTML = `What was that ${username}`;
  } else if (acount.textContent >= 0) {
    waste.play();
    resultMessage.innerHTML = `Why even bother ${username}`;
  }
  scoreMessage.innerHTML = `${acount.textContent}/${maxQuestion}`;
}