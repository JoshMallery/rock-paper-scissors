class Player {
  constructor(playerName,gameChoice,userPick) {
      this.name = playerName;
      // this.token = ;
      this.wins = 0;
      this.pick = userPick || takeTurn();
  }

  takeTurn() {
//if(userPick) return userPick
  var gameLength = 5;//this is to choose for the computer
  if(gameChoice === "standard") {
  gameLength = 3;
  }
  var gameArray = ['rock','paper','scissors','rocket','kangaroo']
  return gameArray[Math.floor(Math.random() * gameLength]


//else pick randonmly based on game Choice of 3 or 5 random
//only fires off if is computer?
    //have a variable that determines enchanced or standard game
//select an object if computer
  }

  // computerPick() {
  //
  // }

  saveWinstoStorage(this.wins) {
    //refer to JSOn lesson and do later
    //will need this.name as a key perhaps? to store computer or player values dynamically
  }

  retrieveWinsFromStorage() {
    // this.wins = Json   refer to JSON lesson and do later
    //will need this.name as a key perhaps? to store computer or player values dynamically
  }

}
