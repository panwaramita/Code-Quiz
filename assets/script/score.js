var list=document.querySelector("#list");
var highscores = {
    initials : [],
    scores : [],
}
function getHighScore(initial,finalScore)
{

    //location.href="score.html";
   // event.preventDefault();
    
   getScore();
    highscores.initials.push(initial);
    highscores.scores.push(finalScore);

   var  highscoresString = JSON.stringify(highscores);
   //  console.log(highscores);
    localStorage.setItem("highscores", highscoresString);
  
    
}

function getScore()
{
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

function setTable()
{
   // alert("hi1");
   list.innerHTML="";

   getScore();
   console.log(highscores.initials.length);
   var ul=document.createElement("table");
   ul.setAttribute("class","high");
  // highscores.scores.sort(function(a, b){return b-a});
    for(var i=0;i<highscores.initials.length;i++)
    {
        //alert("jkj");
        var row=document.createElement("tr");
      var col=document.createElement("td");

     var p=document.createElement("p");
   
      p.textContent=(i+1)+"."+highscores.initials[i]+"-"+highscores.scores[i];
      col.appendChild(p);
      row.appendChild(col);
      ul.appendChild(row);
      list.appendChild(ul);

    }
}

if (list !== null) {
    setTable();
}



function goBack(){
   location.href="index.html";
}


function clearFun(){
    localStorage.removeItem("highscores");
    setTable();
}