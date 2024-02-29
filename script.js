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