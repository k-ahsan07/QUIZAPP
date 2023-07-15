const questions = [
    {
      question: "Which city is the capital of Pakistan?",
      choices: ["Lahore", "Karachi", "Islamabad", "Peshawar"],
      answer: "Islamabad"
    },
    {
      question: "What is the official language of Pakistan?",
      choices: ["Urdu", "Punjabi", "Sindhi", "English"],
      answer: "Urdu"
    },
    {
      question: "Who is the founder of Pakistan?",
      choices: ["Muhammad Ali Jinnah", "Allama Iqbal", "Liaquat Ali Khan", "Ayub Khan"],
      answer: "Muhammad Ali Jinnah"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
  
    questionElement.textContent = questions[currentQuestion].question;
  
    choicesElement.innerHTML = "";
    for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
      const choice = document.createElement("button");
      choice.textContent = questions[currentQuestion].choices[i];
      choice.addEventListener("click", checkAnswer);
      choicesElement.appendChild(choice);
    }
  }
  
  function checkAnswer(event) {
    const selectedChoice = event.target.textContent;
    const answer = questions[currentQuestion].answer;
  
    if (selectedChoice === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      displayScore();
    }
  }
  
  function displayScore() {
    if(onclick="submit"){
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `You scored ${score} out of ${questions.length}!`;
  }
}
  
  displayQuestion();
  