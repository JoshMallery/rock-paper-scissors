var main = document.querySelector('main');
var changeGame = document.querySelector('.change-game')
var normalRules = document.querySelector('#standard');
var enhancedRules = document.querySelector('#enhanced');
var standardIcon = document.querySelectorAll('#standard-icon');
var enhancedIcon = document.querySelectorAll('#enhanced-icon');
console.log(standardIcon[0])
// var scissorsIcon = document.querySelector('#scissors');
// var rocketIcon = document.querySelector('#rocket');
// var kangarooIcon = document.querySelector('#kangaroo');


var gameChoice = "default";


main.addEventListener('click', function(event) {
  console.log(event.target.id)
  console.log(event.target.classList)

  if(event.target.id === 'standard' || event.target.id === 'enhanced') {
     gameChoice = event.target.id;
     return gameSelection(gameChoice)
    }

    startGame(gameChoice, event.target.id); //this should be the string of the id of a game icon
});

changeGame.addEventListener('click', switchGame);


function switchGame() {
  console.log('changegame please')
}

function gameSelection(gameType) {
  if (gameType === 'standard') {
    toggleStandard()
  } else {
    toggleEnhanced()
    }
  }

function startGame(gameChoice, userPick) {
  console.log('gamestarted')
  console.log(gameChoice + " " + userPick)
  var currentGame = new Game(gameChoice,userPick);
    currentGame.determineWinner();
  return console.log(currentGame)
}



function toggle(idToToggle) {
 idToToggle.classList.toggle("hidden");
}

function toggleRules() {
toggle(normalRules);
toggle(enhancedRules);
}

function toggleStandard() {
  toggleRules();
  toggle(standardIcon[0]);
  toggle(standardIcon[1]);
  toggle(standardIcon[2]);
  // toggle(paperIcon);
  // toggle(scissorsIcon);
}

function toggleEnhanced() {
  toggleStandard();
  toggle(enhancedIcon[0]);
  toggle(enhancedIcon[1]);
  // toggle(kangarooIcon);

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
