const submit = document.querySelector(".evaluation-card__btn");
const evaluationCard = document.querySelector(".evaluation-card");
const thanksCard = document.querySelector(".thanks-card");
const btnEvaluation = document.querySelector(".evaluation-card__btn-container");
const resultNumber = document.querySelector(
  ".thanks-card__container__result--number"
);

btnEvaluation.addEventListener("click", (event) => {
  let numberSelected = event.target.innerText;
  resultNumber.innerText = numberSelected;
  if (numberSelected > 0 && numberSelected <= 5) {
    submit.addEventListener("click", () => {
      thanksCard.classList.remove("hide");
      evaluationCard.classList.add("hide");
    });
  }
});
