var startBt = document.querySelector("#start");
var mainPage = document.querySelector("#main_page");
var code = document.querySelector("#contentAlign");
var quizContainer = document.querySelector("#ask_question");
var rightWrong = document.querySelector("#ans");
var finalScore = 0;
var finalResult = document.querySelector("#finalSore");
var display = document.querySelector("#finalResult");
var timer=document.querySelector("#count");
var submitInitial=document.querySelector("#submit");
//var buttons=document.querySelector("#buttons");
   
const myQuestions = [
    {
        question: "Who invented JavaScript?",
        answers: {
            1: "Douglas Crockford",
            2: "Sheryl Sandberg",
            3: "Brendan Eich"
        },
        correctAnswer: "1"
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
            1: "Node.js",
            2: "TypeScript",
            3: "npm"
        },
        correctAnswer: "2"
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: {
            1: "Angular",
            2: "jQuery",
            3: "RequireJS",
            4: "ESLint"
        },
        correctAnswer: "3"
    },
    {
    question: "Which is not a primitive data type in JavaScript?",
        answers: {
            1: "boolean",
            2: "number",
            3: "string",
            4: "character"
        },
        correctAnswer: "4"
    },
    {
        question: "Which of these is a correct method to create a new array?",
            answers: {
                1: "var myArray = ();",
                2: " var myArray = [];",
                3: "var myArray = new Array[];"
            },
            correctAnswer: "2"
        },
        {
            question: "Which of these is not a logical operator?",
                answers: {
                    1: "!",
                    2: "&",
                    3: "&&",
                    4: "||"
                },
                correctAnswer: "2"
            }
];
startBt.addEventListener("click", function()
{
    setTimer();
    showQuesions();
});
var time=75;
function setTimer()
{
 //   event.preventDefault();
    var interval=setInterval(() => {
       
        
        if(time<=0)
        {
            clearInterval(interval);
            quizContainer.innerHTML = " ";
            rightWrong.innerHTML = "";
            display.style.display = "block";
       // alert("completes");
        //rightWrong.innerHTML = "";
        finalResult.textContent = finalScore+".";
        timer.textContent=time;
        
        }
        else
        {
           // console.log(time)
            timer.textContent=time;
            time--;
           // showQuesions();
        }
    },1000);
}
var i = 0;
function showQuesions() {
   // event.preventDefault();
   //location.href="score.html";
   contentAlign.style.display="none";
   //setTimer();
   
    var output = [];
    var answers = [];

    if (i > myQuestions.length - 1) {
       // rightWrong.setAttribute("margin-top","300px");
        display.style.display = "block";
       // alert("completes");
        //rightWrong.innerHTML = "";
        finalResult.textContent = finalScore+".";
        time=0;
     
    }
    else {

        for (letter in myQuestions[i].answers) {
            answers.push('<label class="option" id=' + letter + '>'
                // + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                + letter + ': '
                + myQuestions[i].answers[letter]
                + '</label>' + '<br>'
            );


        }

        output.push(
            '<div class="question">' + myQuestions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
        );


    }
    quizContainer.innerHTML = output.join('');

}

quizContainer.addEventListener("click", function(event){
    if(event.target.nodeName==="LABEL")
    {
     
        goToNextQuestion(event);
    }
});

function goToNextQuestion(event) {
    event.preventDefault();
    var correct = [];
    if (event.target.id === myQuestions[i].correctAnswer) {
        finalScore = finalScore + 5;
        correct = "<hr><label>Correct!</label>";
        rightWrong.innerHTML = correct;
        var display=setTimeout(() => {
            rightWrong.innerHTML = "";
        }, 2000);
       
    }
    else {
        time=time-10;
        console.log("mintime:",time);
        if(finalScore<=0)
        {
            finalScore=0;
        }
        else
        {
        finalScore = finalScore - 5;
        }
        correct = "<hr><label>Wrong!</label>";
        rightWrong.innerHTML = correct;
        var display=setTimeout(() => {
            rightWrong.innerHTML = "";
        }, 2000);
    }

    i++;
    showQuesions();
    //setTimer();
}
var initial=document.querySelector("#initial");
submitInitial.addEventListener("click", function(event){
    event.preventDefault();

        if (initial.value === "")  {
            alert("Please enter your initials!");
            return null;
        }

        getHighScore(initial.value, finalScore);
        window.location = "score.html";
    });
/*var people={
    initials:[],
    scores:[],
};

var j=0;*/


