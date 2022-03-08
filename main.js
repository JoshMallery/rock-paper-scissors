var gameContainer = document.querySelector('.standard-game-container');
var normalRules = document.querySelector('.normal-rules-container');
var enhancedRules = document.querySelector('.enhanced-rules-container');
var gameIcons = document.querySelectorAll('.game-icon-container');
var playerGameIcon = document.querySelector('#player');
var computerGameIcon = document.querySelector('#computer');
var gamePrompt = document.querySelector('.game-prompt');
var changeGame = document.querySelector('.change-game');
var resetWins = document.querySelector('.reset-score');
var playerWins = document.querySelector('.player-count');
var computerWins = document.querySelector('.computer-count');

updateScoresFromStorage();

var currentGame = new Game;

changeGame.addEventListener('click', switchGame);
resetWins.addEventListener('click', resetScores);
gameContainer.addEventListener('click', function(event) {
  standardOrEnhancedGameSelection(event);
  playerIconSelection(event);
});

function standardOrEnhancedGameSelection(event) {
  if(event.target.id === 'standard' || event.target.id === 'enhanced') {
    currentGame.human.gameChoice = event.target.id;
    currentGame.computer.gameChoice = event.target.id;
    toggleRules();
    toggleGameView();
    }
}

function playerIconSelection(event) {
if(event.target.classList.value === 'game-icon') {
  currentGame.human.pick = event.target.id;
  startGame();
  }
}

function toggleGameView() {
  hideAllGameIcons();
  gamePrompt.innerText = `Choose Your Fighter!`

  var iconsToDisplay = 3;
  if(currentGame.human.gameChoice === 'enhanced') {
    iconsToDisplay = 5;
  }

  for (i = 0; i < iconsToDisplay; i++) {
    toggle(gameIcons[i]);
  }
}

function startGame() {
  hideAllGameIcons();
  currentGame.determineWinner();
  displayGamePlayIcons();
  closeOutGame();
}

function gameWinnerPrompt() {
  gamePrompt.innerHTML = `
  <img class="player-image-mini" src="./assets/${currentGame.currentWinner}.png" alt="${currentGame.currentWinner} Icon">
  ${currentGame.currentWinner} Wins!!
  <img class="player-image-mini" src="./assets/${currentGame.currentWinner}.png" alt="${currentGame.currentWinner} Icon">`
}

function displayGamePlayIcons() {
  playerGameIcon.src = `./assets/${currentGame.human.pick}.png`;
  toggle(document.getElementById(`player-container`));

  computerGameIcon.src = `./assets/${currentGame.computer.pick}.png`;
  toggle(document.getElementById(`computer-container`));
}

function closeOutGame(){
  updateScoresFromStorage();
  changeGame.classList.remove('hidden');
  resetWins.classList.remove('hidden');
  setTimeout(currentGame.restartGame,3000);
}

function updateScoresFromStorage() {
  var humanScore = localStorage.getItem('human');
  var computerScore = localStorage.getItem('computer');

  if(!humanScore){
    humanScore = 0;
  }

  if(!computerScore){
    computerScore = 0;
  }

  playerWins.innerText = `Wins: ${humanScore}`;
  computerWins.innerText = `Wins: ${computerScore}`;
}

function switchGame() {
  hideAllGameIcons();
  toggleRules();
  toggleChangeGame();
  gamePrompt.innerText = "Choose Your Game!";
}

function resetScores() {
  currentGame.human.wins = 0;
  currentGame.computer.wins = 0;
  currentGame.clearScores()
  updateScoresFromStorage();
}

function hideAllGameIcons() {
  for(var i = 0; i < gameIcons.length; i++){
    gameIcons[i].classList.add("hidden");
  }
}

function toggle(idToToggle) {
  idToToggle.classList.toggle("hidden");
}

function toggleRules() {
  toggle(normalRules);
  toggle(enhancedRules);
}


function toggleChangeGame() {
  toggle(changeGame);
}
