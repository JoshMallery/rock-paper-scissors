var main = document.querySelector('main');
var changeGame = document.querySelector('.change-game')


main.addEventListener('click', function(event) {
  console.log(event.target.id)

  if(event.target.id === 'standard' || event.target.id === 'enhanced') {
    var gameChoice = event.target.id;
    gameSelection(event.target.id)
    }

    startGame(gameChoice, event.target.id); //this should be the string of the id of a game icon
});

changeGame.addEventListener('click', switchGame);


function switchGame() {
  console.log('changegame please')
}

function gameSelection(gameType) {
  if (gameType === 'standard') {
    //displaystandard icons
    } else {
    //displayenhanced icons which includes standard within it
    }
  }

function startGame(gameChoice, userpick) {
  console.log('gamestarted')
  var currentGame = new Game(gameChoice,userPick)
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
