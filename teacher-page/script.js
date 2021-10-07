const questions = {
  question_1: {
    question: "",
    option_1: "",
    option_2: "",
    option_3: "",
    option_4: "",
  },
};

document.querySelector(".get-input-question").value =
  questions.question_1.question;
document.querySelector(".get-input-option").value =
  questions.question_1.option_1;

let currentOptionNumber = "1";

// changing options
function chck(className) {
  const activeOptions = document.querySelectorAll(".option-active");
  if (activeOptions.length > 0)
    activeOptions[0].classList.remove("option-active");
  document.querySelector(`.${className}`).classList.add("option-active");
  const optionNumber = document.querySelector(`.option-number`);
  optionNumber.innerHTML = className.split("_")[1];

  currentOptionNumber = optionNumber.innerHTML;

  const question_number = document.querySelector(".question-number").innerHTML;
  document.querySelector(".get-input-option").value =
    questions[`question_${question_number}`][className];
}

document.querySelector(".get-input-option").addEventListener("input", () => {
  const question_number = document.querySelector(".question-number").innerHTML;
  const option_number = document.querySelector(".option-number").innerHTML;
  questions[`question_${question_number}`][`option_${option_number}`] +=
    document.querySelector(".get-input-option").value;

  console.log(questions);
});
document.querySelector(".get-input-question").addEventListener("input", () => {
  const question_number = document.querySelector(".question-number").innerHTML;
  questions[`question_${question_number}`].question = document.querySelector(
    ".get-input-question"
  ).value;
});

const nextButton = document.querySelector(".next-btn");
const previousButton = document.querySelector(".previous-btn");
previousButton.disabled = true;
nextButton.addEventListener("click", (e) => {
  if (currentOptionNumber < "4") {
    nextButton.disabled = false;
    currentOptionNumber = (parseInt(currentOptionNumber) + 1).toString();
    chck(`option_${currentOptionNumber}`);
    previousButton.disabled = false;
  } else {
    nextButton.disabled = true;
    previousButton.disabled = false;
  }
  if (currentOptionNumber === "1") {
    previousButton.disabled = true;
  }
});

previousButton.addEventListener("click", (e) => {
  if (currentOptionNumber === "1") {
    previousButton.disabled = true;
    nextButton.disabled = false;
  } else {
    previousButton.disabled = false;
    currentOptionNumber = (parseInt(currentOptionNumber) - 1).toString();
    chck(`option_${currentOptionNumber}`);
  }
});
