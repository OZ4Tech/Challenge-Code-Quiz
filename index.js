const startQuizbutton = document.getElementById("Start Quiz");

startQuizbutton.addEventListener("click", startQuiz)

function startQuiz() {
    console.log("Started")
    

}
function setNextQuestion(){

}
function selectAnswer(){

}

let questions = [
    {
        question: "Commonly used data types do NOT include___________.",
        answers: [
            { text: "1. strings", correct: false }, 
            { text: "2. booleans", correct: false },
            { text: "3. alerts", correct: true },
            { text: "4. numbers", correct: false },
    },
    {
        question: "Arrays in Javascript can be used to store___________.",
        { text: "1. numbers and strings", correct: false },
        { text: "2. other arrays", correct: false },
        { text: "3. booleans", correct: false },
        { text: "4. all of the above", correct: true },
    },
    {
        question: "The condition of the if/else statement is enclosed with an_________.",
        { text: "1. quotes", correct: false },
        { text: "2. parenthesis", correct: true },
        { text: "3. curly brackets", correct: false },
        { text: "4. square brackets", correct: false },

    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debuggeer is",
        { text: "1. for loops", correct: false },
        { text: "2. terminal/bash", correct: false },
        { text: "3. console.log", correct: true },
        { text: "4. javascript", correct: false },
    },
    {    
        question: "Strings values must be enclosed within________when being assigned to variables.",
        { text: "1. commas", correct: false },
        { text: "2. parenthesis", correct: false },
        { text: "3. curly brackets", correct: false },
        { text: "4. quotes", correct: true },
        

    },
]


