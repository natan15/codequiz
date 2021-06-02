function printHighScores(){
    var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
    highScores.sort(function(a, b) {
        return b.score - a.score;
    });

    highScores.forEach(function(score) {
        var li = document.createElement("li");
        li.textContent = score.initials + " - " + score.score;
    });

    var El = document.getElementById("highScores");
    El.appendChild(li);
}

function clearHighScore(){
    window.localStorage.removeItem("highScores");
    window.location.reload();
}

document.getElementById("clear").onclick = clearHighScore;

printHighScores();