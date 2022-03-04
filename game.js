class Game {
  constructor(gameChoice,userPick) {
    this.human = new Player('human',gameChoice,userPick);
    this.computer = new Player('computer',gameChoice);
  }

  determineWinner() {
    var hpick = this.human.pick;
    var cpick = this.computer.pick;

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
    gamePrompt.innerText =`It's draw!!`
    return console.log("it's a draw")
  }

  eitherRocketPick(hpick,cpick){
    if(hpick === 'rocket'){
      return this.humanWins();
    }
    return this.computerWins();
  }

  eitherKangarooPick(hpick,cpick) {
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

  userRockPick(hpick,cpick) {
    if(cpick === 'paper'){
      return this.computerWins()
    }
      return this.humanWins()
    }

  userPaperPick(hpick,cpick) {
    if(cpick === 'rock'){
      return this.computerWins()
    }
    return this.humanWins()
  }

  userScissorPick(hpick,cpick) {
    if(cpick === 'rock') {
      return this.computerWins()
    }
    return this.humanWins()
  }

  humanWins() {
    this.human.wins++;
    this.human.saveWinsToStorage();
    gamePrompt.innerHTML = `
    <img class="player-image-mini" src="./assets/player.png" alt="Player">
    Human Wins!!
    <img class="player-image-mini" src="./assets/player.png" alt="Player">`
    return console.log('human won');
  }

  computerWins() {
    this.computer.wins++;
    this.computer.saveWinsToStorage();
    gamePrompt.innerHTML = `
    <img class="player-image-mini" src="./assets/computer.png" alt="Computer Player">
    Computer Wins!!
    <img class="player-image-mini" src="./assets/computer.png" alt="Computer Player">`
    return console.log('computer won')
  }

}
