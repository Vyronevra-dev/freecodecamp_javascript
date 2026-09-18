const questions = [

  {
    category: "CHEMISTRY",
    question: "What is the catalyst used to crack long chain alkanes into shorter ones?",
    choices: ["Pt", "Al2O3", "CuO"],
    answer: "Al2O3"
  },
  
  {
    category: "ASTRONOMY",
    question: "What is the closest star to Earth?",
    choices: ["Mars", "Sun", "Jupiter"],
    answer: "Sun"
  },
  
  {
    category: "GEOGRAPHY",
    question: "What is the capital city of France?",
    choices: ["Bonjour", "Eiffel", "Paris"],
    answer: "Paris"
  },
  
  {
    category: "BIOLOGY",
    question: "What pigment makes plant leaves look green?",
    choices: ["Chloroplasts", "Chlorophyll", "Stomats"],
    answer: "Chlorophyll"
  },
  
  {
    category: "Geometry",
    question: "How many sides does a standard stop sign have?",
    choices: ["Five", "Four", "Eight"],
    answer: "Eight"
  },
];

function getRandomQuestion(arrQuiz) {
  const randomQuizIndex = Math.floor(Math.random() * arrQuiz.length);
  return arrQuiz[randomQuizIndex];
}

console.log(getRandomQuestion(questions));

const chosenQuestion = getRandomQuestion(questions);

function getRandomComputerChoice(choices) {
  const randomAnswerIndex = Math.floor(Math.random() * choices.length);
  return choices[randomAnswerIndex];
}

console.log(getRandomComputerChoice(chosenQuestion.choices));

const computerChoice = getRandomComputerChoice(chosenQuestion.choices);

function getResults(questionObj, compChoice) {
  if (compChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  }
  else {
    return "The computer's choice is wrong. The correct answer is: " + questionObj.answer;
  }
}

console.log(getResults(chosenQuestion, computerChoice));
