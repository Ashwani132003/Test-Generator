let questions = {
    question_1: {
        question: "",
        option_1: "",
        option_2: "",
        option_3: "",
        option_4: "",
    },
};

// changing options
function chck(className) {
    const activeOptions = document.querySelectorAll(".option-active");
    if (activeOptions.length > 0)
        activeOptions[0].classList.remove("option-active");
    document.querySelector(`.${className}`).classList.add("option-active");
    document.querySelector(`.option-number`).innerHTML =
        className.split("_")[1];
    const question_number =
        document.querySelector(".question-number").innerHTML;
    document.querySelector(".get-input-option").value =
        questions[`question_${question_number}`][className];
}

document.querySelector(".get-input-option").addEventListener("input", () => {
    const question_number =
        document.querySelector(".question-number").innerHTML;
    const option_number = document.querySelector(".option-number").innerHTML;
    questions[`question_${question_number}`][`option_${option_number}`] =
        document.querySelector(".get-input-option").value;
});
document.querySelector(".get-input-question").addEventListener("input", () => {
    const question_number =
        document.querySelector(".question-number").innerHTML;
    questions[`question_${question_number}`].question = document.querySelector(
        ".get-input-question"
    ).value;
});

function nextQuestionHandler() {
    const question_number =
        parseInt(document.querySelector(".question-number").innerHTML, 10) + 1;
    const option_number = 1;
    const activeOptions = document.querySelectorAll(".option-active");
    if (activeOptions.length > 0)
        activeOptions[0].classList.remove("option-active");
    document.querySelector(`.option_1`).classList.add("option-active");

    if (questions[`question_${question_number}`]) {
        document.querySelector(".question-number").innerHTML = question_number;
        document.querySelector(".option-number").innerHTML = option_number;
        document.querySelector(".get-input-question").value =
            questions[`question_${question_number}`].question;
        document.querySelector(".get-input-option").value =
            questions[`question_${question_number}`].option_1;
    } else {
        questions[`question_${question_number}`] = {
            question: "",
            option_1: "",
            option_2: "",
            option_3: "",
            option_4: "",
        };
        document.querySelector(".question-number").innerHTML = question_number;
        document.querySelector(".get-input-question").value = "";
        document.querySelector(".get-input-option").value = "";
        document.querySelector(".option-number").innerHTML = 1;
    }
}
document
    .querySelector(".next-btn")
    .addEventListener("click", nextQuestionHandler);

function previousQuestionHandler() {
    const question_number =
        parseInt(document.querySelector(".question-number").innerHTML, 10) - 1;
    const option_number = 1;
    const activeOptions = document.querySelectorAll(".option-active");
    if (activeOptions.length > 0)
        activeOptions[0].classList.remove("option-active");
    document.querySelector(`.option_1`).classList.add("option-active");

    if (questions[`question_${question_number}`]) {
        document.querySelector(".question-number").innerHTML = question_number;
        document.querySelector(".option-number").innerHTML = option_number;
        document.querySelector(".get-input-question").value =
            questions[`question_${question_number}`].question;
        document.querySelector(".get-input-option").value =
            questions[`question_${question_number}`].option_1;
    } else if (question_number > 0) {
        document.querySelector(".question-number").innerHTML = question_number;
        document.querySelector(".option-number").innerHTML = option_number;
        document.querySelector(".get-input-question").value =
            questions[`question_${question_number}`].question;
        document.querySelector(".get-input-option").value =
            questions[`question_${question_number}`][`option_${option_number}`];
    }
}
document
    .querySelector(".previous-btn")
    .addEventListener("click", previousQuestionHandler);

function saveQuestionsHandler() {
    localStorage.setItem("questions", JSON.stringify(questions));
    // Retrieve
}
document
    .querySelector(".save-btn")
    .addEventListener("click", saveQuestionsHandler);

function onInit() {
    const localQuestions = JSON.parse(localStorage.getItem("questions"));
    if(localQuestions){
        questions=localQuestions
        document.querySelector(".get-input-question").value =
        questions.question_1.question;
        document.querySelector(".get-input-option").value =
        questions.question_1.option_1;

    } else {
        document.querySelector(".get-input-question").value =
        questions.question_1.question;
        document.querySelector(".get-input-option").value =
        questions.question_1.option_1;
    }

}
onInit()