'use strict';

const dispMessage = document.querySelector('.message');
const dispNumber = document.querySelector('.number');
const dispHighscore = document.querySelector('.highscore');
const inpGuess = document.querySelector('.guess');
const dispScore = document.querySelector('.score');
const colorBody = document.querySelector('body');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = message => {
  dispMessage.textContent = message;
};

const displayNumber = (number, style) => {
  dispNumber.textContent = number;
  dispNumber.style.width = style;
  return number, style;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(inpGuess.value);

  // when there is no input
  if (!guess) {
    displayMessage('🚨 No Number!');

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    colorBody.style.backgroundColor = '#60b347';
    displayNumber(secretNumber, '30rem');

    if (score > highScore) {
      highScore = score;
      dispHighscore.textContent = highScore;
    }

    //When guess is high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      dispScore.textContent = score;
    } else {
      displayMessage('😫 You lost the game!');
      dispScore.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  colorBody.style.backgroundColor = '#222';
  displayNumber('?', '15rem');
  dispScore.textContent = score;
  inpGuess.value = '';
});
