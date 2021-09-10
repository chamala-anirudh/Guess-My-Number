'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // When no number is entered
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number!';
    }
    // If the user wins the game
    else if (guess === number) {
        document.querySelector('.message').textContent = '🎉 Correct Answer!!';
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }

    // If the user's guess is greater than or less than the number
    else if (guess !== number) {
        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent =
                guess > number ? '📈 Too High!!' : '📉 Too Low!!';
        } else {
            document.querySelector('.message').textContent =
                '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
});

// Re-setting the game
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('input').value = ' ';
});
console.log(number);
