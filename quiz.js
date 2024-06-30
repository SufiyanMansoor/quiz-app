document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let score = 0;
  const totalQuestions = 10;
  const answers = {
    q1: "a",
    q2: "b",
    q3: "b",
    q4: "c",
    q5: "b",
    q6: "a",
    q7: "a",
    q8: "c",
    q9: "a",
    q10: "b",
  };

  for (let i = 1; i <= totalQuestions; i++) {
    const answer = document.querySelector(`input[name="q${i}"]:checked`);
    if (answer && answer.value === answers[`q${i}`]) {
      score++;
    }
  }

  const scoreElement = document.getElementById("score");
  scoreElement.textContent = `Your score is ${score} out of ${totalQuestions}`;
  scoreElement.style.display = "block";
});
