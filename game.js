class Game {
  constructor(gameChoice,userPick) {
    this.human = new Player('human',gameChoice,userPick);
    this.computer = new Player('computer',gameChoice);
    this.gameType = gameChoice; // is this relevant?
    this.currentGameWinner = null;
  }

  determineWinner() {
    var hpick = this.human.pick;
    var cpick = this.computer.pick;

    if(hpick === cpick) {
      return this.draw();
    }

    if(hpick === 'rocket' || cpick === 'rocket') {
      return this.rocketPick(hpick,cpick);
    }

    if(hpick === 'kangaroo' || cpick === 'kangaroo') {
       return this.kangarooPick(hpick,cpick);
    }

    if (hpick === 'rock'){
      return this.rockPick(hpick,cpick);
    }

    if(hpick === 'paper'){
      return this.paperPick(hpick,cpick);
    }

    if(hpick === 'scissors'){
      return this.scissorPick(hpick,cpick);
    }

  }

  draw() {
    this.currentGameWinner = null;
    return console.log("it's a draw")
  }

  rocketPick(hpick,cpick){
    if(hpick === 'rocket'){
      return this.humanWins();
    }
    return this.computerWins();
  }

  kangarooPick(hpick,cpick) {
    if(hpick === 'kangaroo' && cpick === 'paper'){
      return this.humanWins()
    } else if (hpick === 'kangaroo') {
      return this.computerWins()
    }

    if(cpick === 'kangaroo' && hpick === 'paper'){
      return this.computerWins()
    } else if(cpick === 'kangaroo') {
      return this.humanWins()
    }
  }

  rockPick(hpick,cpick) {
    if(cpick === 'paper'){
      return this.computerWins()
    }
      return this.humanWins()
    }

  paperPick(hpick,cpick) {
    if(cpick === 'rock'){
      return this.computerWins()
    }
    return this.humanWins()
  }

  scissorPick(hpick,cpick) {
    if(cpick === 'rock') {
      return this.computerWins()
    }
    return this.humanWins()
  }

  humanWins() {
    this.human.wins++;
    this.currentGameWinner = this.human.name;
    this.human.saveWinsToStorage();
    return console.log('human won');
    //display humanwins message in DOM
  }

  computerWins() {
    this.computer.wins++;
    this.currentGameWinner = this.computer.name;
    this.computer.saveWinsToStorage();
    return console.log('computer won')
    //display Human wins message in DOM
  }

//some type of reset timer??
}
