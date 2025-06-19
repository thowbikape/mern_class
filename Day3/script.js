function playGame(userChoice) {
    const choices = ['stone', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('user-choice').textContent = `Your Choice: ${userChoice}`;
    document.getElementById('computer-choice').textContent = `Computer's Choice: ${computerChoice}`;
    document.getElementById('winner').textContent = `Result: ${getWinner(userChoice, computerChoice)}`;
}

function getWinner(user, computer) {
    if (user === computer) {
        return "It's a Draw!";
    } else if (
        (user === 'stone' && computer === 'scissors') ||
        (user === 'paper' && computer === 'stone') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return "You Win!";
    } else {
        return "Computer Wins!";
    }
}
