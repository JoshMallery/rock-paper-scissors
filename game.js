class Game {
  constructor(gameChoice,userPick) {
    this.human = new Player('human',gameChoice,userPick);
    this.computer = new Player('computer',gameChoice);
    this.gameType = gameChoice; // is this relevant?
  }

  determineWinner() {
    var hpick = this.human.pick;
    var cpick = this.computer.pick;

    if(hpick === cpick) {
      //this is a draw! what do I return?
      //draw()?
    }

    if(hpick === 'rocket' || cpick === 'rocket') {
      //that beats eveything, stop there
      if(hpick === 'rocket'){
        //human wins
        this.human.wins++
      }
      //else computer wins
      this.computer.wins++
    }

    if(hpick === 'kangaroo' || cpick === 'kangaroo') {

    }

    if (hpick === 'rock'){
      if(cpick === 'paper'){
        //computer wins
      } else if(cpick === 'scissors'){
        //human wins
      } else if(cpick === 'kangaroo') {

      }
      //else human wins
    }

    if(hpick === 'paper'){

    }

    if(hpick === 'scissors'){

    }

    if(hpick === 'rocket') {

    }

    if(hpick === 'kangaroo') {

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
  }

//some time of reset timer


}
