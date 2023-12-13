let playerSelection
let computerSelection
let playerScore = 0
let computerScore = 0

function GetPlayerChoice()
{
    playerSelection = prompt("Rock, paper, or scissors?")
    playerSelection = playerSelection.toUpperCase()
    console.log(playerSelection)
}

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

    console.log(computerSelection)
}

function Play()
{
    if(playerSelection == "ROCK" && computerSelection == "ROCK")
    {
        console.log("Tie!")
    }
    if(playerSelection == "ROCK" && computerSelection == "SCISSORS")
    {
        console.log("Player wins!")
        playerScore++
    }
    if(playerSelection == "ROCK" && computerSelection == "PAPER")
    {
        console.log("Computer wins!")
        computerScore++
    }
    if(playerSelection == "SCISSORS" && computerSelection == "ROCK")
    {
        console.log("Computer wins!")
        computerScore++
    }
    if(playerSelection == "SCISSORS" && computerSelection == "SCISSORS")
    {
        console.log("Tie!")
    }
    if(playerSelection == "SCISSORS" && computerSelection == "PAPER")
    {
        console.log("Player wins!")
        playerScore++
    }
    if(playerSelection == "PAPER" && computerSelection == "ROCK")
    {
        console.log("Player wins!")
        playerScore++
    }
    if(playerSelection == "PAPER" && computerSelection == "SCISSORS")
    {
        console.log("Computer wins!")
        computerScore++
    }
    if(playerSelection == "PAPER" && computerSelection == "PAPER")
    {
        console.log("Tie!")
    }
    else
    {
        return null
    }
}

function GameLoop()
{
    let wantsToPlay = confirm("Let's play rock, paper, scissors! Best of 5 rounds. Click okay to start!")

    if(wantsToPlay)
    {
        let round = 1
        let isRegularRound = true

        while(round <= 5)
        {
            if(isRegularRound)
            {
                console.log("Round " + round + ". Fight!")
            }
            else
            {

            }

            GetPlayerChoice()
            GetComputerChoice()
            Play()
            console.log("Player: " + playerScore)
            console.log("Computer: " + computerScore)

            if(round == 5)
            {
                if(playerScore > computerScore)
                {
                    console.log("Player wins the game!")
                    break
                }
                if(computerScore > playerScore)
                {
                    console.log("Computer wins the game!")
                    break
                }
                if(playerScore == computerScore)
                {
                    console.log("Tie breaker round!")
                    isRegularRound = false
                    round = 5
                }
            }
            else
            {
                round++
            }

        }
    }
}

GameLoop()