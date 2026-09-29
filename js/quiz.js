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


let qIndex = 0;
function loadQuiz(questions){
//    indicate the question count
  questionCount.innerHTML =`Question ${qIndex + 1} of ${ questions.length}`;
  // determine the width of the progressbar
  let progressWidth = ((qIndex + 1)/questions.length) * 100;
  progressBar.style.width = `${progressWidth}%`;
   showQuestionContent(questions,qIndex);


       const questionOptionButons = document.querySelectorAll("div.options .option");
    questionOptionButons.forEach( (ob) =>{
        ob.addEventListener('click', function(evt){
        let dataOption = evt.target.getAttribute("data-option");
        // deselet all other options
        questionOptionButons.forEach((o)=>{
            o.classList.remove("selected");
        })
        // assign i selected
        evt.target.classList.toggle("selected");
        scoreCalc(questions,qIndex,parseInt(dataOption) );
        console.log(dataOption, typeof dataOption);
        })
    })
    console.log(questionOptionButons);
}


//    Next Button
next.addEventListener("click",function(evt){
    previous.removeAttribute("disabled");
    if(qIndex === questions.length - 1){
        next.setAttribute("disabled",true);
    }else{

        qIndex++;
        loadQuiz(questions);
    }
});

//    previous Button
previous.addEventListener("click",function(evt){
    if(qIndex === 0){
        previous.setAttribute("disabled",true);
    }else if(qIndex > 0  && qIndex < questions.length){
          qIndex--;
        previous.removeAttribute("disabled");
        next.removeAttribute("disabled");
        loadQuiz(questions);
    }

});


// initil loading of the questions
loadQuiz(questions);

function showQuestionContent(qst,index){
    let content = `<p class="question-number">Question ${index +1}</p>
                   <h2 class="question" id="question-text">${qst[index].q}</h2>
                    <div class="options" id="options" role="group" aria-label="Answer choices">
                       ${ listOptions(qst[index].options )}
                    </div>
                `;
    quizContent.innerHTML = content;
}

function listOptions(options){
    let optionsButtons = "";
    options.forEach((o,i )=>{
        optionsButtons+=`<button class="option" type="button" data-option="${i}">${o}</button>`;
    });
    return optionsButtons;
}



let score = 0; 
function scoreCalc(q,qIndex,oIndex){
  let qScore = ( 1/q.length ) * 100; 
    if(q[qIndex].correct === oIndex){
        score+=qScore;
    } 
  quizScore.innerHTML = score;
}