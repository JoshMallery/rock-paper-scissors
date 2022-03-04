var gameContainer = document.querySelector('.standard-game-container');
var normalRules = document.querySelector('.normal-rules-container');
var enhancedRules = document.querySelector('.enhanced-rules-container');
var gameIcons = document.querySelectorAll('.game-icon-container');
var inCaseOfADraw = document.querySelector('#draw');
var gamePrompt = document.querySelector('.game-prompt');
var changeGame = document.querySelector('.change-game');
var playerWins = document.querySelector('.player-count');
var computerWins = document.querySelector('.computer-count');

updateScoresFromStorage();

var currentGame = null;

changeGame.addEventListener('click', switchGame);
gameContainer.addEventListener('click', function(event) {
// console.log(event.target.classList.value)
  if(event.target.id === 'standard' || event.target.id === 'enhanced') {
    localStorage.setItem('standardOrEnhancedGame', event.target.id);
    toggleRules();
    gameSelection(event.target.id);
    }

  if(event.target.classList.value === 'game-icon') {
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
  hideAllGameIcons();
  currentGame = new Game(gameChoice,userPick);
  currentGame.determineWinner();

//Can I make this easier to Read? userIcon to Display, ComputerIcon to Display
  toggle(document.getElementById(`${userPick}-container`));

  if(userPick !== currentGame.computer.pick){
    toggle(document.getElementById(`${currentGame.computer.pick}-container`))
  } else {
    inCaseOfADraw.src = `./assets/${currentGame.computer.pick}.png`;
    toggle(document.getElementById(`draw-container`));
  }

  updateScoresFromStorage()
  changeGame.classList.remove('hidden');
  setTimeout(restartGame,500);
}

function switchGame() {
  hideAllGameIcons();
  toggleRules();
  toggleChangeGame();
}

function restartGame() {
  gameSelection(localStorage.getItem('standardOrEnhancedGame'));
}

function updateScoresFromStorage() {
  playerWins.innerText = `Wins: ${localStorage.getItem('human')}`;
  computerWins.innerText = `Wins: ${localStorage.getItem('computer')}`;
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
