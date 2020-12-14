/*decalring the variables*/
var startBt = document.querySelector("#start");
var mainPage = document.querySelector("#main_page");
var code = document.querySelector("#contentAlign");
var quizContainer = document.querySelector("#ask_question");
var rightWrong = document.querySelector("#ans");
var finalScore = 0;
var finalResult = document.querySelector("#finalSore");
var display = document.querySelector("#finalResult");
var timer = document.querySelector("#count");
var submitInitial = document.querySelector("#submit");
var time = 75;
var i = 0;

/*declare the object to hold javascript multiple type question */
const myQuestions = [
    {
        question: "1.Who invented JavaScript?",
        answers: {
            1: "Douglas Crockford",
            2: "Sheryl Sandberg",
            3: "Brendan Eich"
        },
        correctAnswer: "1"
    },
    {
        question: "2.Which one of these is a JavaScript package manager?",
        answers: {
            1: "Node.js",
            2: "TypeScript",
            3: "npm"
        },
        correctAnswer: "2"
    },
    {
        question: "3.Which tool can you use to ensure code quality?",
        answers: {
            1: "Angular",
            2: "jQuery",
            3: "RequireJS",
            4: "ESLint"
        },
        correctAnswer: "3"
    },
    {
        question: "4.Which is not a primitive data type in JavaScript?",
        answers: {
            1: "boolean",
            2: "number",
            3: "string",
            4: "character"
        },
        correctAnswer: "4"
    },
    {
        question: "5.Which of these is a correct method to create a new array?",
        answers: {
            1: "var myArray = ();",
            2: " var myArray = [];",
            3: "var myArray = new Array[];"
        },
        correctAnswer: "2"
    },
    {
        question: "6.Which of these is not a logical operator?",
        answers: {
            1: "!",
            2: "&",
            3: "&&",
            4: "||"
        },
        correctAnswer: "2"
    },
    {
        question: "7.JavaScript is ______ language?",
        answers: {
            1: "Scripting",
            2: "Programming",
            3: "Both a and b"
        },
        correctAnswer: "1"
    },
    {
        question: "8.JavaScript is ______ Side scripting language?",
        answers: {
            1: "Server",
            2: "Client",
            3: "ISP",
            4: "Browser"
        },
        correctAnswer: "4"
    },
    {
        question: "9.JavaScript code between a pair of “script” tags are called?",
        answers: {
            1: "Non-inline",
            2: "External",
            3: "Referenced",
            4: "Inline"
        },
        correctAnswer: "4"
    },
    {
        question: "10.Which of the following attribute can hold the JavaScript version?",
        answers: {
            1: "LANGUAGE",
            2: "SCRIPT",
            3: "VERSION",
            4: " None of the above"
        },
        correctAnswer: "1"
    }

];

/*when the start quiz button is clicked */
startBt.addEventListener("click", function () {
    setTimer();
    showQuesions();
});

/*set the timer */
function setTimer() {
    var interval = setInterval(() => {


        if (time <= 0) {
            clearInterval(interval);
            quizContainer.innerHTML = " ";
            rightWrong.innerHTML = "";
            display.style.display = "block";
            finalResult.textContent = finalScore + ".";
            timer.textContent = time;

        }
        else {
            timer.textContent = time;
            time--;
        }
    }, 1000);
}

/*function to display the question*/
function showQuesions() {
    contentAlign.style.display = "none";
    var output = [];
    var answers = [];

    if (i > myQuestions.length - 1) {
        display.style.display = "block";
        finalResult.textContent = finalScore + ".";
        time = 0;

    }
    else {

        for (letter in myQuestions[i].answers) {
            answers.push('<label class="option" id=' + letter + '>'
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

/*Event listner for when the user click the answer and go to the next function */
quizContainer.addEventListener("click", function (event) {
    if (event.target.nodeName === "LABEL") {

        goToNextQuestion(event);
    }
});

/*function to go to the next funtion*/
function goToNextQuestion(event) {
    event.preventDefault();
    var correct = [];
    if (event.target.id === myQuestions[i].correctAnswer) {
        finalScore = finalScore + 5;
        correct = "<hr><label>Correct!</label>";
        rightWrong.innerHTML = correct;
        var display = setTimeout(() => {
            rightWrong.innerHTML = "";
        }, 2000);

    }
    else {
        time = time - 10;
        if (finalScore <= 0) {
            finalScore = 0;
        }
        else {
            finalScore = finalScore - 5;
        }
        correct = "<hr><label>Wrong!</label>";
        rightWrong.innerHTML = correct;
        var display = setTimeout(() => {
            rightWrong.innerHTML = "";
        }, 2000);
    }

    i++;
    showQuesions();
    //setTimer();
}
var initial = document.querySelector("#initial");

/*event listner for when user enter the initials */
submitInitial.addEventListener("click", function (event) {
    event.preventDefault();
    /*check if the initial is entered or not*/
    if (initial.value === "") {
        alert("Please enter your initials!");
        return null;
    }
    /*call the function present in the score.js page */
    getHighScore(initial.value, finalScore);
    window.location = "score.html";
});
