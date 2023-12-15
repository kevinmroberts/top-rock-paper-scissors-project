let computerSelection = ''
let playerScore = 0
let computerScore = 0
const resultsElement = document.querySelector('div#results');
const playerScoreElement = document.querySelector('#player-score');
const computerScoreElement = document.querySelector('#computer-score');
const buttonsElement = document.querySelector('.buttons');

function GetComputerChoice() 
{
    randomNumber = parseInt((Math.random() * 3) + 1)

    if(randomNumber == 1)
    {
        computerSelection = "ROCK"
    }
    if(randomNumber == 2)
    {
        computerSelection = "SCISSORS"
    }
    if(randomNumber == 3)
    {
        computerSelection = "PAPER"
    }
}

function Play(playerSelection)
{
    if(playerSelection == "ROCK" && computerSelection == "ROCK")
    {
        return "Tie!";
    }
    if(playerSelection == "ROCK" && computerSelection == "SCISSORS")
    {
        playerScore++;
        return "Player wins this round!"

    }
    if(playerSelection == "ROCK" && computerSelection == "PAPER")
    {
        computerScore++;
        return "Computer wins this round!"
    }
    if(playerSelection == "SCISSORS" && computerSelection == "ROCK")
    {
        computerScore++;
        return "Computer wins this round!"
    }
    if(playerSelection == "SCISSORS" && computerSelection == "SCISSORS")
    {
        return "Tie!";
    }
    if(playerSelection == "SCISSORS" && computerSelection == "PAPER")
    {
        playerScore++;
        return "Player wins this round!"
    }
    if(playerSelection == "PAPER" && computerSelection == "ROCK")
    {
        playerScore++;
        return "Player wins this round!"
    }
    if(playerSelection == "PAPER" && computerSelection == "SCISSORS")
    {
        computerScore++;
        return "Computer wins this round!"

    }
    if(playerSelection == "PAPER" && computerSelection == "PAPER")
    {
        return "Tie!";
    }
    else
    {
        return "ERROR"
    }
}

function resetScore()
{
    playerScore = 0;
    computerScore = 0;
}

function getWinner(playerScore, computerScore)
{
    if(playerScore > computerScore) return "Player";
    if(computerScore > playerScore) return "Computer";
}

function playAgain()
{
    window.location.reload();
}

function removeButtons()
{
    let child = buttonsElement.lastElementChild;

    while(child)
    {
        buttonsElement.removeChild(child);
        child = buttonsElement.lastElementChild;
    }

    let playAgainButton = document.createElement("button");
    buttonsElement.appendChild(playAgainButton);
    playAgainButton.textContent = "🔄";
    playAgainButton.addEventListener('click', playAgain);
}

function gameOver()
{
    let winner = getWinner(playerScore, computerScore);
    resultsElement.textContent = winner + " wins the game!";
    document.getElementById('results').style.fontWeight = 'bold';
    resetScore();
    removeButtons();
}




const buttonPressed = e => {
    playerSelection = e.target.id;
    GetComputerChoice();
    document.getElementById('results').style.fontWeight = 'normal';
    resultsElement.textContent = Play(playerSelection);
    playerScoreElement.textContent = "Player Score: " + playerScore
    computerScoreElement.textContent = "Computer Score: " + computerScore
    if(playerScore == 5 || computerScore == 5)
    {
        gameOver();
    }
}

const button = document.querySelectorAll('button').forEach(button => button.addEventListener('click', buttonPressed));





