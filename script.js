const questions = document.querySelectorAll(".question");
const questionDivs = document.querySelectorAll(".item");
const answers = document.querySelectorAll(".answer");

questions.forEach(question => question.addEventListener("click", () => {
    if(question.parentNode.classList.contains("active")){
    question.parentNode.classList.toggle("active");       

    }else{
    questions.forEach(question => question.parentNode.classList.remove("active"))
    question.parentNode.classList.add("active");
    };

    questionDivs.forEach(questionDiv => {
    if(questionDiv.firstElementChild.classList.contains("active")){
    questionDiv.lastElementChild.classList.remove("hidden");
    }else{
    questionDiv.lastElementChild.classList.add("hidden");
    };
});
})
);