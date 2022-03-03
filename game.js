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
      //insert draw function here
      return this.draw()
    }

    //this is the rocket function
    if(hpick === 'rocket' || cpick === 'rocket') {
      this.rocketPick(hpick,cpick)
    }

    if(hpick === 'kangaroo' || cpick === 'kangaroo') {
      this.kangarooPick(hpick,cpick)
    }

    if (hpick === 'rock'){
      this.rockPick(hpick,cpick)
    }

    if(hpick === 'paper'){
      this.paperPick(hpick,cpick)
    }

    //scissors function
    if(hpick === 'scissors'){
      this.scissorPick(hpick,cpick)
    }

  }
    draw() {
      this.currentGameWinner = null;
      return console.log("it's a draw")
    }

    rocketPick(hpick,cpick){
    //that beats eveything, stop there
      if(hpick === 'rocket'){
      //human wins
      this.humanWins()
      }
    //else computer wins
      this.computerWins()
    }


//kangaroo function

    kangarooPick(hpick,cpick) {
      if(hpick === 'kangaroo' && cpick === 'paper'){
        //human wins
        return this.humanWins()
      } else if (hpick === 'kangaroo') {
        //computer wins
        return this.computerWins()
      }

      if(cpick === 'kangaroo' && hpick === 'paper'){
        //computer wins
        return this.computerWins()
      } else if(cpick === 'kangaroo') {
        //human wins
        return this.humanWins()
      }

    }


//rock function

    rockPick(hpick,cpick) {
      if(cpick === 'paper'){
        //computer wins
        return this.computerWins()
      }
        //human wins
        return this.humanWins()
      }

//paper function

    paperPick(hpick,cpick) {
      if(cpick === 'rock'){
        //computer wins
        return this.computerWins()
      }
      //else human wins
      return this.humanWins()
    }



    scissorPick(hpick,cpick) {
      if(cpick === 'rock') {
        //computer wins
        return this.computerWins()
      }
      //else human wins with paper
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
    //if statements for a winner
      //this.human.pick
      //this.computer.pick
    //update text for who won
    //update text for a draw
    //this.human.wins++
    //this.computer.wins++

    //make helper functions to save and retrieve local wins
      //run the saveWins toStorage
      //run the retrueve wins


//some time of reset timer


}
