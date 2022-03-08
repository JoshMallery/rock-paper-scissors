class Player {
  constructor(playerName) {
      this.name = playerName;
      this.wins = this.retrieveWinsFromStorage() || 0;
  }

  takeTurn() {
    this.gameLength = 5;
    var gameArray = ['rock','paper','scissors','rocket','kangaroo'];

    if(this.gameChoice === 'standard') {
      this.gameLength = 3;
    }
    return gameArray[Math.floor(Math.random() * this.gameLength)]
  }

  saveWinsToStorage() {
    return localStorage.setItem(this.name, this.wins);
  }

  retrieveWinsFromStorage() {
     return this.wins = localStorage.getItem(this.name);
  }
}
