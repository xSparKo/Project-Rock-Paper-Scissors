//Define function called getComputerChoice
//Generate random number between 0 and 2
//Map the random number to "Rock", "Paper", "Scissors"
//Return choosen play
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

//Define function that decides who is the winner, or if it's a tie
function playRound(playerSelection, computerSelection) {
    
    //Checks if its a TIE
    if (playerSelection === computerSelection) {
        return "It's a tie! Replay the round.";
    }

    //Determine the winner and returns it with text
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        //Returns You Win! with selections changed to starting capital and then lowercase characters
        return `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
    } else {
        ////Returns You Loose! with selections changed to starting capital and then lowercase characters
        return `You Lose! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} looses against ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
    }
}

//Define function called game that plays 5 rounds of rock, paper, scissors
function game() {

    //Declares starting scores
    let playerScore = 0;
    let computerScore = 0;

    //Creates for loop which repeats 5 times 
    for (let i = 1; i <= 5; i++) {
        
        //Declares selections
        const playerSelection = prompt("Enter your choice (rock, paper or scissors):").toLowerCase();
        const computerSelection = getComputerChoice();

        //Writes in to the console number of current round with chosen selections
        console.log(`Round ${i}:`);
        console.log(`Player: ${playerSelection}`);
        console.log(`Computer: ${computerSelection}`);

        //Declares variable result, 
        //which then calls function playRound with selections as arguments,
        //which returns if player won or lost, or if it's a tie
        //Writes in to the console the result
        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        //Add points to player or computer score
        if (result.startsWith("You Win")) {
            playerScore++;
        } else if (result.startsWith("You Lose")) {
            computerScore++;
        }

        //Writes in to the console current score
        console.log(`Current Score: Player - ${playerScore}, Computer - ${computerScore}`);
        console.log(`______________________________________________`)
    }

    //Determines who won the game and writes in to the console the result
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("You loose the game!");
    } else console.log("It's a tie!");
}