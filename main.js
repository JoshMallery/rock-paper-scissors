var main = document.querySelector('main');
var changeGame = document.querySelector('.change-game')
var normalRules = document.querySelector('.normal-rules-container');
var enhancedRules = document.querySelector('.enhanced-rules-container');
var gameIcons = document.querySelectorAll('.game-icon-container');
var gamePrompt = document.querySelector('.game-prompt');

var playerWins = document.querySelector('.player-count');
var computerWins = document.querySelector('.computer-count');

loadScoresFromStorage()

var currentGame = null;

main.addEventListener('click', function(event) {
//   console.log(event.target.classList[0])
// console.log(event.target.id)

  if(event.target.id === 'standard' || event.target.id === 'enhanced') {
    var gameChoice = event.target.id;

    localStorage.setItem('standardOrEnhanced', gameChoice);
    toggleRules()

    return gameSelection(gameChoice)
    }

  if(event.target.classList[0] === 'game-icon') {
    startGame(localStorage.getItem('standardOrEnhanced'), event.target.id);
    } //this should be the string of the id of a game icon
});



changeGame.addEventListener('click', switchGame);


function switchGame() {
  console.log('changegame please')
  hideAll();
  toggleRules();
  toggleChangeGame();
  // toggleEnhanced()
}

function gameSelection(gameType) {
  hideAll()

  if (gameType === 'standard') {
    toggleStandard()
  } else {
    toggleEnhanced()
    }

    chooseFighterPrompt()
  }

function chooseFighterPrompt() {
  gamePrompt.innerText = `Choose Your Fighter!`;
}

function startGame(gameChoice, userPick) {
  console.log('gamestarted')
  console.log(gameChoice + " " + userPick)
  // console.log(gameIcons[2].id)

  hideAll();

  currentGame = new Game(gameChoice,userPick);
    currentGame.determineWinner();
//     console.log(document.getElementById(userPick).parentElement.classList)
// console.log(document.getElementById(`${userPick}-container`))

    toggle(document.getElementById(`${userPick}-container`));

    if(userPick !== currentGame.computer.pick){
      toggle(document.getElementById(`${currentGame.computer.pick}-container`))
    } else {
      //make a duplicate Image of the userPickContainer
    }
    // document.getElementById(`${currentGame.computer.pick}-container`))
    // toggleChangeGame()
    updateScores()

    setTimeout(restartGame,1000);
    toggleChangeGame();
  // return console.log(currentGame)
}

function restartGame() {
  gameSelection(localStorage.getItem('standardOrEnhanced'))
  // startGame()
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

function toggleStandard() {
  toggle(gameIcons[0]);
  toggle(gameIcons[1]);
  toggle(gameIcons[2]);
}

function toggleEnhanced() {
  toggleStandard();
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

//eventhandler to listen for gametype selection click
  //handler will need to
    //will store the gametype selection value
    //update
      //hide game rules for normal and enhanced
      //show game player icons

//event handler to listen for game icon select
  //will store the game icon selected and create game instantion
    //hide icons not selected by the player or computer

  //will then run game.determineWinner

  //will say who won in the game Prompt container
  //will update win tallies
  //some type of delay and go back to game state prior to gameTypeSelection screen

//eventhandler to act on change-game
  //this will bascially take us back to the initial state prior to gameTypeSelection click
  //make change-game button dissappear?



//when the enhanced or standard game is clicked a new Game is instantiated
//the instantiation takes in the gametype
//something else then tells is the enhanced will be hidden or not
//next there is a listener for the human pick
//when the human choice is picked then the players are instantiated
    //at that point you have gameType and Player Selection
    //you can autorun the computer and determine a winner
//next display all of the updated results of who the human picked
//and who the computer picked also update wins
//reset game
