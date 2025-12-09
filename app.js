let userScore = 0;
let computerScore = 0;
let userChoice;
let choice = ['rock', 'paper', 'scissors'];
let emojis = { 'rock': '🥌', 'paper': '📃', 'scissors': '✂' };

function game() {
    let computerChoice = choice[Math.floor(Math.random() * 3)];
    let result = "";

    if (userChoice === computerChoice) {
        result = `It's a tie 🤝 , try again ❤`;
    } 
    else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = `You win! 🎉 You chose ${emojis[userChoice]} and Computer chose ${emojis[computerChoice]}`;
        userScore++;
    } 
    else {
        result = `You lose! 😢 Computer chose ${emojis[computerChoice]} and You chose ${emojis[userChoice]}`;
        computerScore++;
    }

    document.getElementById('result').innerHTML = result;
    document.getElementById('score').innerHTML = `Score : You - ${userScore}, Computer - ${computerScore}`;
}
