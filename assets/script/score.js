/*variable to hold the score table */
var list = document.querySelector("#list");
/*declare the variable to hold the highscore value */
var highscores = {
    initials: [],
    scores: [],
}

/*function to get the score and intial from the script file */
function getHighScore(initial, finalScore) {
    getScore();
    highscores.initials.push(initial);
    highscores.scores.push(finalScore);
    var highscoresString = JSON.stringify(highscores);
    localStorage.setItem("highscores", highscoresString);


}

/*function to get the data from the localstorage and display in the form of table to the user */
function getScore() {
    var storedHighscoresString = localStorage.getItem("highscores");

    if (storedHighscoresString !== null) {
        var storedHighscores = JSON.parse(storedHighscoresString);
        highscores.initials = storedHighscores.initials;
        highscores.scores = storedHighscores.scores;
    }
    else {
        highscores.initials = [];
        highscores.scores = [];
    }
}

/*create the table to hold the initial and highscore values */
function setTable() {
    // alert("hi1");
    list.innerHTML = "";

    getScore();
    var ul = document.createElement("table");
    ul.setAttribute("class", "high");
    for (var i = 0; i < highscores.initials.length; i++) {
        //alert("jkj");
        var row = document.createElement("tr");
        var col = document.createElement("td");

        var p = document.createElement("p");

        col.textContent = (i + 1) + ". " + highscores.initials[i] + "-" + highscores.scores[i];
        // col.appendChild(p);
        row.appendChild(col);
        ul.appendChild(row);
        list.appendChild(ul);

    }
}

/*check if the score table is not null once the page loads*/
if (list !== null) {
    setTable();
}


/*go back to the main page index.html */
function goBack() {
    location.href = "index.html";
}

/*clear the localstorage*/
function clearFun() {
    localStorage.removeItem("highscores");
    setTable();
}