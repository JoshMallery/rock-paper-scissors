class Player {
  constructor(playerName,gameChoice,userPick) {
      this.name = playerName;
      // this.token = ;
      this.wins = this.retrieveWinsFromStorage() || 0;
      this.gameChoice = gameChoice
      this.pick = userPick || this.takeTurn();
  }

  takeTurn() {
    var gameLength = 5;
    var gameArray = ['rock','paper','scissors','rocket','kangaroo']

    if(this.gameChoice === 'standard') {
      gameLength = 3;
    }

    return gameArray[Math.floor(Math.random() * gameLength)]
  }

  saveWinsToStorage() {
    return localStorage.setItem(this.name, this.wins);
  }

  retrieveWinsFromStorage() {
     return this.wins = localStorage.getItem(this.name);
  }
}
