const questions = [
    {
        q:"Whos is the president of Nigeria ?",
        options:[
            'Gana Shuaibu',
            "Muhammadu Buhari",
            "Good Luck Jonathan",
            "Bola Ahmad Tinubu"
        ],
        correct:3
    },
    {
        q:"Whos is the smartest of them all ?",
        options:[
            'Gana Shuaibu',
            "Muhammadu Buhari",
            "Good Luck Jonathan",
            "Bola Ahmad Tinubu"
        ],
        correct:2
    },
    {
        q:"what is the sum of 7 and 8 ?",
        options:[
            '12',
            "19",
            "78",
            "15"
        ],
        correct:3
    },
    {
        q:"who discovered River Niger ?",
        options:[
            'Mongo park',
            "Muhammadu Buhari",
            "Good Luck Emmanuel",
            "Stephen Ahmad oyo"
        ],
        correct:0
    },
]

const questionCount    = document.querySelector("#question-count")
const quizScore        = document.querySelector("#quiz-score")
const progressBar      = document.querySelector("#progress-bar")
const quizContent      = document.querySelector(".quiz-content");
const questionNo       = document.querySelector(".question-number");

const previous = document.getElementById("previous-button");
const next     = document.getElementById("next-button");


function loadQuiz(questions){
   let qIndex = 0;
   showQuestionContent(questions,qIndex);

}
loadQuiz();

function showQuestionContent(q,index){
    let content = `<p class="question-number">Question ${index +1}</p>
                   <h2 class="question" id="question-text">${q[index].q}}</h2>
                    <div class="options" id="options" role="group" aria-label="Answer choices">
                       ${ q[index].options.forEach((o,i )=> {
                           return  `<button class="option" type="button" data-option="${i}">${o}</button>`
                       })}
                    </div>
                `;
    quizContent.innerHTML = content;
}