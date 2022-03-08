class Game {
  constructor() {
    this.human = new Player('human');
    this.computer = new Player('computer');
  }

  determineWinner() {
    var hpick = this.human.pick;
    var cpick = this.computer.takeTurn();
    this.computer.pick = cpick;

    if(hpick === cpick) {
      return this.draw();
    }

    if(hpick === 'rocket' || cpick === 'rocket') {
      return this.eitherRocketPick(hpick,cpick);
    }

    if(hpick === 'kangaroo' || cpick === 'kangaroo') {
       return this.eitherKangarooPick(hpick,cpick);
    }

    if (hpick === 'rock'){
      return this.userRockPick(hpick,cpick);
    }

    if(hpick === 'paper'){
      return this.userPaperPick(hpick,cpick);
    }

    if(hpick === 'scissors'){
      return this.userScissorPick(hpick,cpick);
    }
  }

  draw() {
    gamePrompt.innerText =`It's draw!!`;
    return
  }

  eitherRocketPick(hpick,cpick){
    if(hpick === 'rocket'){
      return this.humanWins();
    }
    return this.computerWins();
  }

  eitherKangarooPick(hpick,cpick) {
    if(hpick === 'kangaroo' && cpick === 'paper'){
      return this.humanWins();
    } else if (hpick === 'kangaroo') {
      return this.computerWins();
    }

    if(cpick === 'kangaroo' && hpick === 'paper'){
      return this.computerWins();
    } else if(cpick === 'kangaroo') {
      return this.humanWins();
    }
  }

  userRockPick(hpick,cpick) {
    if(cpick === 'paper'){
      return this.computerWins();
    }
      return this.humanWins();
    }

  userPaperPick(hpick,cpick) {
    if(cpick === 'scissors'){
      return this.computerWins()
    }
    return this.humanWins()
  }

  userScissorPick(hpick,cpick) {
    if(cpick === 'rock') {
      return this.computerWins();
    }
    return this.humanWins();
  }

  humanWins() {
    this.human.wins++;
    this.human.saveWinsToStorage();
    gameWinnerPrompt('human');
    return
  }

  computerWins() {
    this.computer.wins++;
    this.computer.saveWinsToStorage();
    gameWinnerPrompt('computer');
    return
  }

  restartGame() {
    if (normalRules.classList.contains("hidden")){
      gameIconSelection();
    }
  }

  clearScores(){
    localStorage.clear()
  }

}
