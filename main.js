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
    gameIconSelection();
    }
}

function playerIconSelection(event) {
if(event.target.classList.value === 'game-icon') {
  currentGame.human.pick = event.target.id;
  startGame();
  }
}

function gameIconSelection() {
  hideAllGameIcons();
  if (currentGame.human.gameChoice === 'standard') {
    toggleStandardGameView();
  } else {
    toggleEnhancedGameView();
    }
  }

function startGame() {
  hideAllGameIcons();
  currentGame.determineWinner();
  displayGamePlayIcons();
  closeOutGame();
}

function gameWinnerPrompt(winner) {
  gamePrompt.innerHTML = `
  <img class="player-image-mini" src="./assets/${winner}.png" alt="Player">
  ${winner} Wins!!
  <img class="player-image-mini" src="./assets/${winner}.png" alt="Player">`
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
  setTimeout(currentGame.restartGame,1200);
}

function updateScoresFromStorage() {
  var humanScore = localStorage.getItem('human');
  var computerScore = localStorage.getItem('computer');

  if(humanScore){
    playerWins.innerText = `Wins: ${humanScore}`;
  }

  if(computerScore){
    computerWins.innerText = `Wins: ${computerScore}`;
  }
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

function toggleStandardGameView() {
  toggle(gameIcons[0]);
  toggle(gameIcons[1]);
  toggle(gameIcons[2]);
  gamePrompt.innerText = `Choose Your Fighter!`;
}

function toggleEnhancedGameView() {
  toggleStandardGameView();
  toggle(gameIcons[3]);
  toggle(gameIcons[4]);
}

function toggleChangeGame() {
  toggle(changeGame);
}
