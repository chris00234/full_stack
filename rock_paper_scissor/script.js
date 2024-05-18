choice = ["rock", "paper", "scissor"];
playerDisplay = document.getElementById("playerDisplay");
computerDisplay = document.getElementById("computerDisplay");
resultDisplay = document.getElementById("resultDisplay");
pscoreDisplay = document.getElementById("pscoreDisplay");
cscoreDisplay = document.getElementById("cscoreDisplay");
pscore = document.getElementById("pscore");
cscore = document.getElementById("cscore");
playerScore = 0;
computerScore = 0;

function playGame(playerChoice){
    const computerChoice = choice[Math.floor(Math.random() * 3)];
    let result = "";
    if(playerChoice === computerChoice){
        result = "It's a tie!";
    }
    else{
        switch(playerChoice){
            case "rock":
                (computerChoice === "scissor") ? result = "You win!" : result = "You lose!";
                break;
            case "paper":
                (computerChoice === "rock") ? result = "You win!" : result = "You lose!";
                break;
            case "scissor":
                (computerChoice === "paper") ? result = "You win!" : result = "You lose!";
                break;
        }
    }
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    switch(result){
        case "You win!":
            resultDisplay.style.color = "green";
            playerScore++;
            pscoreDisplay.textContent = playerScore + "";
            break;
        case "You lose!":
            resultDisplay.style.color = "red";
            computerScore++;
            cscoreDisplay.textContent = computerScore + "";
            break;
        case "It's a tie!":
            resultDisplay.style.color = "black";
            break;
    }
}

