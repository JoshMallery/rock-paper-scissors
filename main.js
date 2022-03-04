var main = document.querySelector('main');// change this to the standard game box
var changeGame = document.querySelector('.change-game')
var normalRules = document.querySelector('.normal-rules-container');
var enhancedRules = document.querySelector('.enhanced-rules-container');
var gameIcons = document.querySelectorAll('.game-icon-container');
var drawOnly = document.querySelector('#draw');
var gamePrompt = document.querySelector('.game-prompt');

var playerWins = document.querySelector('.player-count');
var computerWins = document.querySelector('.computer-count');

loadScoresFromStorage()

var currentGame = null;

main.addEventListener('click', function(event) {
//   console.log(event.target.classList[0])
console.log(event.target)

  if(event.target.id === 'standard' || event.target.id === 'enhanced') {
    var gameChoice = event.target.id;

    localStorage.setItem('standardOrEnhanced', gameChoice);
    toggleRules()

    return gameSelection(gameChoice)
    }

  if(event.target.classList[0] === 'game-icon') {
    startGame(localStorage.getItem('standardOrEnhanced'), event.target.id);
    }
});

changeGame.addEventListener('click', switchGame);


function switchGame() {
  console.log('changegame please')
  hideAll();
  toggleRules();
  toggleChangeGame();
}

function gameSelection(gameType) {
  hideAll()

  if (gameType === 'standard') {
    toggleStandardGameView()
  } else {
    toggleEnhancedGameView()
    }

    gamePrompt.innerText = `Choose Your Fighter!`;
  }


function startGame(gameChoice, userPick) {
  console.log('gamestarted')
  console.log(gameChoice + " " + userPick)

  hideAll();

  currentGame = new Game(gameChoice,userPick);
  currentGame.determineWinner();

  toggle(document.getElementById(`${userPick}-container`));

//draw logic
  if(userPick !== currentGame.computer.pick){
    toggle(document.getElementById(`${currentGame.computer.pick}-container`))
  } else {
    drawOnly.src = `./assets/${currentGame.computer.pick}.png`;
    toggle(document.getElementById(`draw-container`));
    // gameIcons[5].classList.remove('hidden')
  }

  updateScores()

  setTimeout(restartGame,750);
  changeGame.classList.remove('hidden');
}

function restartGame() {
  gameSelection(localStorage.getItem('standardOrEnhanced'))
}

function loadScoresFromStorage() {
  playerWins.innerText = `Wins: ${localStorage.getItem('human')}`;
  computerWins.innerText = `Wins: ${localStorage.getItem('computer')}`;
}

function updateScores() {
  playerWins.innerText = `Wins: ${currentGame.human.wins}`;
  computerWins.innerText = `Wins: ${currentGame.computer.wins}`;
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
}

function toggleEnhancedGameView() {
  toggleStandardGameView();
  toggle(gameIcons[3]);
  toggle(gameIcons[4]);
}

function toggleChangeGame() {
  toggle(changeGame);
}

function hideAll() {
  for(var i = 0; i < gameIcons.length; i++){
    gameIcons[i].classList.add("hidden")
  }
}
