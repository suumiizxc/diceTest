

var activePlayer = 1;

var scores = [0,0];

var roundScore = 0; 

var dice = Math.floor(Math.random()) * 6 + 1;



//<div class="player-score" id="score-0">43</div>

window.document.querySelector("#score-0").textContent = dice;

window.document.querySelector("#score-1").textContent = dice;