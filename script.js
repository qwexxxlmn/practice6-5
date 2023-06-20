// массив с правильными ответами
const correctAnswers = ['b', 'a', 'b', 'a', 'a', 'a', 'b', 'b', 'a', 'a'];

function calculateResults() {
  const form = document.forms.quizForm;
  const userAnswers = [];
  let score = 0;

  for (const formElement of form) {
    if (formElement.type === "radio" && formElement.checked) {
      userAnswers.push(formElement.value);
      if (formElement.value === correctAnswers[userAnswers.length - 1]) {
        score++;
      }
    }
  }

  if (userAnswers.length !== correctAnswers.length) {
    document.getElementById("results").innerHTML = "Вы ответили не на все вопросы.";
    return;
  }

  const results = document.getElementById("results");
  results.innerHTML = `Вы ответили верно на ${score} из ${correctAnswers.length} вопросов.`;

  const answers = document.getElementById("answers");
  answers.innerHTML = "";
  correctAnswers.forEach((correctAnswer, index) => {
    const li = document.createElement("li");
    li.textContent = `Вопрос ${index + 1}: ${userAnswers[index] === correctAnswer ? "верно" : "неверно"} (${userAnswers[index]})`;
    answers.appendChild(li);
  });
}

const form = document.forms.quizForm;
form.addEventListener("submit", function(event) {
  event.preventDefault(); // добавляем вызов метода preventDefault()
  calculateResults();
});
