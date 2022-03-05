var gameContainer = document.querySelector('.standard-game-container');
var normalRules = document.querySelector('.normal-rules-container');
var enhancedRules = document.querySelector('.enhanced-rules-container');
var gameIcons = document.querySelectorAll('.game-icon-container');
var playerMiniIcons = document.querySelectorAll('.player-mini');
var inCaseOfADraw = document.querySelector('#draw');
var gamePrompt = document.querySelector('.game-prompt');
var changeGame = document.querySelector('.change-game');
var playerWins = document.querySelector('.player-count');
var computerWins = document.querySelector('.computer-count');

updateScoresFromStorage();

var currentGame = null;
//the error is that if i click change game, restart game is still trying to run, there is a gap that exists where it shows the game rules then resets the game
changeGame.addEventListener('click', switchGame);
gameContainer.addEventListener('click', function(event) {

  if(event.target.id === 'standard' || event.target.id === 'enhanced') {
    localStorage.setItem('standardOrEnhancedGame', event.target.id);
    toggleRules();
    gameSelection(event.target.id);
    }

  if(event.target.classList.value === 'game-icon') {
    //remove the listener here once we know we have selected a game icon
    //this.removeEventListener('click',arguments.callee);
    startGame(localStorage.getItem('standardOrEnhancedGame'), event.target.id);
    }
});

function gameSelection(gameType) {
  hideAllGameIcons();
  if (gameType === 'standard') {
    toggleStandardGameView();
  } else {
    toggleEnhancedGameView();
    }
  }

function startGame(gameChoice, userPick) {
  // gameContainer = null;
  //also we could remove the listener here?
  hideAllGameIcons();
  currentGame = new Game(gameChoice, userPick);
  currentGame.determineWinner();

  var userPickToDisplay = currentGame.human.pick;
  var computerPickToDisplay = currentGame.computer.pick;

  displayGamePlayIcons(userPickToDisplay,computerPickToDisplay)

  closeOutGame();
}

function displayGamePlayIcons(userPickToDisplay,computerPickToDisplay) {
  toggle(document.getElementById(`${userPickToDisplay}-container`));

  displayPlayersSmallIcon(userPickToDisplay)

  if(userPickToDisplay !== computerPickToDisplay){
    toggle(document.getElementById(`${computerPickToDisplay}-container`))
  } else {
    inCaseOfADraw.src = `./assets/${computerPickToDisplay}.png`;
    toggle(document.getElementById(`draw-container`));
  }
}

function displayPlayersSmallIcon(userPickToDisplay) {
  toggle(document.getElementById(`${userPickToDisplay}-user-pick`))
}

function closeOutGame(){
  updateScoresFromStorage()
  changeGame.classList.remove('hidden');
  setTimeout(restartGame,4000);
}

function switchGame() {
  hideAllGameIcons();
  toggleRules();
  toggleChangeGame();
  gamePrompt.innerText = "Choose Your Game!";
}

function restartGame() {
  //this is the best spot to re-instate the listener
  // gameContainer = document.querySelector('.standard-game-container');
  gameSelection(localStorage.getItem('standardOrEnhancedGame'));
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

  for(var i = 0; i < playerMiniIcons.length; i++){
    playerMiniIcons[i].classList.add("hidden");
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
