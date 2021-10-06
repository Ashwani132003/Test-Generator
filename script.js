const questions = {
    question_1:{
        question:"",
        option_1:"",
        option_2:"",
        option_3:"",
        option_4:""
    }
}

document.querySelector(".get-input-question").value = questions.question_1.question
document.querySelector(".get-input-option").value = questions.question_1.option_1

// changing options
function chck(className) {

    const activeOptions = document.querySelectorAll(".option-active");
    if(activeOptions.length>0)
    activeOptions[0].classList.remove("option-active")
    document.querySelector(`.${className}`).classList.add("option-active");
    document.querySelector(`.option-number`).innerHTML = className.split("_")[1];
    const question_number = document.querySelector(".question-number").innerHTML
    document.querySelector(".get-input-option").value = questions[`question_${question_number}`][className]

}


document.querySelector(".get-input-option").addEventListener("input",()=>{
    const question_number = document.querySelector(".question-number").innerHTML
    const option_number = document.querySelector(".option-number").innerHTML
    const optionRef = questions[`question_${question_number}`][`option_${option_number}`]
    optionRef = document.querySelector(".get-input-option").value
})
document.querySelector(".get-input-question").addEventListener("input",()=>{
    const question_number = document.querySelector(".question-number").innerHTML
    const questionRef = questions[`question_${question_number}`].question
    questionRef = document.querySelector(".get-input-question").value
})
