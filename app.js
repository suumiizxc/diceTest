

var activePlayer = 1;

var scores = [0,0];

var roundScore = 0; 

var diceNumber = Math.floor(Math.random() * 6) + 1;

// querySelector using # symbol tag
// getElementById not using # symbol tag
//window.document.querySelector("#score-0").textContent = dice;

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;


document.querySelector('.btn-roll').addEventListener('click',shooShid);

var diceDom = document.querySelector('.dice');

diceDom.style.display = 'none';

function shooShid(){
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    document.getElementById('score-0').textContent = diceNumber;
    diceDom.style.display = "block";
    diceDom.src = 'dice-' + diceNumber + '.png';
    console.log('Dice number is : ' + diceNumber );
}