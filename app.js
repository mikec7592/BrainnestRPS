                       ////////////   OBJECTS   //////////
const player = {
    currentChoice: null
}
const computer = {
    currentChoice: null
}
                       ////////////   GLOBAL VARIABLES  //////////
let win = 0;
let loss = 0;
let ties = 0;
  
const choices = ["rock", "paper", "scissors"];

let computerPlay = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    computer.currentChoice = choices[randomIndex];
    console.log(computer.currentChoice)
}

let playerPlay = () => {
    player.currentChoice = window.prompt('Enter: rock, paper or scissors').toLowerCase()
    while (player.currentChoice != 'rock' && player.currentChoice !=  'paper' &&  player.currentChoice != 'scissors' &&  player.currentChoice != null) {
        alert('Invalid entry! Please enter "rock", "paper" or "scissors".')
        player.currentChoice = window.prompt('Enter: rock, paper or scissors').toLowerCase()
    }
    console.log(player.currentChoice)
    return player.currentChoice
}

                        ////////////   GAME LOGIC   //////////
let compare = () => {
    if (computer.currentChoice === choices[0] && player.currentChoice === choices[1]) {
        alert(`You win!  You chose ${player.currentChoice} and the computer chose ${computer.currentChoice}!  Ready to go again?`)
        return win++
    } else if (computer.currentChoice === choices[0] && player.currentChoice === choices[2]) {
        alert(`Ouch! You lose!  You chose ${player.currentChoice} and the computer chose ${computer.currentChoice}!  Ready to go again?`)
        return loss++
    } else if (computer.currentChoice === choices[1] && player.currentChoice === choices[2]) {
        alert(`You win!  You chose ${player.currentChoice} and the computer chose ${computer.currentChoice}!  Ready to go again?`)
        return win++
    } else if (computer.currentChoice === choices[1] && player.currentChoice === choices[0]) {
        alert(`Ouch! You lose!  You chose ${player.currentChoice} and the computer chose ${computer.currentChoice}!  Ready to go again?`)
        return loss++
    } else if (computer.currentChoice === choices[2] && player.currentChoice === choices[0]) {
        alert(`You win!  You chose ${player.currentChoice} and the computer chose ${computer.currentChoice}!  Ready to go again?`)
        return win++
    } else if (computer.currentChoice === choices[2] && player.currentChoice === choices[1]) {
        alert(`Ouch! You lose!  You chose ${player.currentChoice} and the computer chose ${computer.currentChoice}!  Ready to go again?`)
        return loss++
    } else alert(`It's a tie! You both chose ${player.currentChoice}`)
    return ties++
}

let gameRound = (playerSelection, computerSelection) => {    
    playerSelection = player.currentChoice
    computerSelection = computer.currentChoice

    computerPlay();
    playerPlay();
    compare();
}

let game = () => {
    for (let i = 0; i < 5; i++) {
        gameRound();
    } 
    if (win > loss) {
        alert(`Wow you win! Final score: Wins:${win} Losses:${loss} Ties:${ties}`)
    } else if ( win < loss) {
        alert(`RIP! You lost! Final score: Wins:${win} Losses:${loss} Ties:${ties}`)
    } else alert(`Looks like it's a draw! Final score: Wins:${win} Losses:${loss} Ties:${ties}`)
}

game();