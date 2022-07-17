function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function updateResults(winningChoice, losingChoice, winner) { 
    const result = document.querySelector('.result')
    const winnerDiv = document.querySelector('.winner')

    result.textContent = `${winningChoice} beats ${losingChoice}!`;

    if (winner == 'Computer') {
        const scoreUpdate = document.querySelector('.computer-score');
        const currentScore = parseInt(scoreUpdate.textContent) + 1
        scoreUpdate.textContent = currentScore
        winnerDiv.textContent = `${winner} beats Human!`;

        checkForWin(currentScore, "Computer")

    } else {
        const scoreUpdate = document.querySelector('.player-score');
        const currentScore = parseInt(scoreUpdate.textContent) + 1
        scoreUpdate.textContent = currentScore
        winnerDiv.textContent = `${winner} beats Computer!`;

        checkForWin(currentScore, "Player")
    }
}

function checkForWin(numWins, player) { 
    console.log(numWins)
    if (numWins != 5) return;

    if (player == 'Computer') {
        const endgameMsg = document.querySelector('.endgame-msg');
        endgameMsg.textContent = 'Computer Wins';

        const modal = document.querySelector('.modal');
        modal.classList.add("active");

    } else {
        const endgameMsg = document.querySelector('.endgame-msg');
        endgameMsg.textContent = 'Player Wins';

        const modal = document.querySelector('.modal');
        modal.classList.add("active");
    }
}

function handleButtonClick(e) {
    const computerChoice = getComputerChoice();
    const humanChoice = e.target.id;

    if (computerChoice === humanChoice) {
        console.log('Tie')
    }

    switch (humanChoice) {
        case "Rock":
            if (computerChoice == "Paper") {
                updateResults(computerChoice, humanChoice, "Computer");
            } else if (computerChoice == "Scissors") {
                updateResults(humanChoice, computerChoice, "Human");
            }
            return;

        case "Paper":
            if (computerChoice == "Scissors") {
                updateResults(computerChoice, humanChoice, "Computer");
            } else if (computerChoice == "Rock") {
                updateResults(humanChoice, computerChoice, "Human");
            }
            return;

        case "Scissors":
            if (computerChoice == "Rock") {
                updateResults(computerChoice, humanChoice, "Computer");
            } else if (computerChoice == "Paper") {
                updateResults(humanChoice, computerChoice, "Human");
            }
            return;
    }
}

function resetGame() {
    const playerScore = document.querySelector('.player-score');
    playerScore.textContent = 0;

    const computerScore = document.querySelector('.computer-score');
    computerScore.textContent = 0;

    const result = document.querySelector('.result');
    result.textContent = "Choose Below"

    const winnerDiv = document.querySelector('.winner');
    winnerDiv.textContent = "First to 5 Wins"

    const modal = document.querySelector('.modal.active');
    modal.classList.remove('active');
}

buttons = document.querySelectorAll('.btn')
buttons.forEach(btn => {
    btn.addEventListener('click', handleButtonClick);
  });

resetButton = document.querySelector('.reset-btn');
resetButton.addEventListener('click', resetGame)
