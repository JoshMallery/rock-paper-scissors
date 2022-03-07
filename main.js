var gameContainer = document.querySelector('.standard-game-container');
var normalRules = document.querySelector('.normal-rules-container');
var enhancedRules = document.querySelector('.enhanced-rules-container');
var gameIcons = document.querySelectorAll('.game-icon-container');
var playerGameIcon = document.querySelector('#player');
var computerGameIcon = document.querySelector('#computer');
var gamePrompt = document.querySelector('.game-prompt');
var changeGame = document.querySelector('.change-game');
var playerWins = document.querySelector('.player-count');
var computerWins = document.querySelector('.computer-count');

updateScoresFromStorage();

var currentGame = null;

changeGame.addEventListener('click', switchGame);
gameContainer.addEventListener('click', function(event) {
  standardOrEnhancedGameSelection(event)
  playerIconSelection(event)
});

function standardOrEnhancedGameSelection(event) {
  if(event.target.id === 'standard' || event.target.id === 'enhanced') {
    toggleRules();
    localStorage.setItem('standardOrEnhancedGame', event.target.id);
    gameSelection(event.target.id);
    }
}

function playerIconSelection(event) {
if(event.target.classList.value === 'game-icon') {
  startGame(localStorage.getItem('standardOrEnhancedGame'), event.target.id);
  }
}

function gameSelection(gameType) {
  hideAllGameIcons();
  if (gameType === 'standard') {
    toggleStandardGameView();
  } else {
    toggleEnhancedGameView();
    }
  }

function startGame(gameChoice, userPick) {
  hideAllGameIcons();
  currentGame = new Game(gameChoice, userPick);
  currentGame.determineWinner();

  var userPickToDisplay = currentGame.human.pick;
  var computerPickToDisplay = currentGame.computer.pick;

  displayGamePlayIcons(userPickToDisplay,computerPickToDisplay)

  closeOutGame();
}

function displayGamePlayIcons(userPickToDisplay,computerPickToDisplay) {
  playerGameIcon.src = `./assets/${userPickToDisplay}.png`;
  toggle(document.getElementById(`player-container`));

  computerGameIcon.src = `./assets/${computerPickToDisplay}.png`;
  toggle(document.getElementById(`computer-container`));
}

function closeOutGame(){
  updateScoresFromStorage()
  changeGame.classList.remove('hidden');
  setTimeout(restartGame,1200);
}

function switchGame() {
  hideAllGameIcons();
  toggleRules();
  toggleChangeGame();
  gamePrompt.innerText = "Choose Your Game!";
}

function restartGame() {
  if (normalRules.classList.contains("hidden")){
    gameSelection(localStorage.getItem('standardOrEnhancedGame'));
  }
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
  gamePrompt.innerText = `Choose Your Fighter!`;
}

function toggleChangeGame() {
  toggle(changeGame);
}
