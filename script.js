'use strict';

let isP1Turn = true;
let p1Score = document.querySelector('.p1Score');
let p2Score = document.querySelector('.p2Score');
let currScoreP1 = document.querySelector('.p1CurrScore');
let currScoreP2 = document.querySelector('.p2CurrScore');
let diceImg = document.querySelector('.diceImg');
let winnerNum = document.querySelector('.winnerNum');
let randomNum = 0;
const overlay = document.querySelector('.overlay');
const leftBackground = document.querySelector('.left');
const rightBackground = document.querySelector('.right');
const currButtonP1 = document.querySelectorAll('.currButtonP1');
const currButtonP2 = document.querySelectorAll('.currButtonP2');
const newGame = document.querySelectorAll('.newGame');
const rollDice = document.querySelector('.rollDice');
const hold = document.querySelector('.hold');
let middle = document.querySelector('.middle');

const imagePicker = () => {
  randomNum = Math.trunc(Math.random() * 6 + 1);
  if (randomNum === 1) {
    diceImg.src = `./dice-${1}.png`;
  } else if (randomNum === 2) {
    diceImg.src = `./dice-${2}.png`;
  } else if (randomNum === 3) {
    diceImg.src = `./dice-${3}.png`;
  } else if (randomNum === 4) {
    diceImg.src = `./dice-${4}.png`;
  } else if (randomNum === 5) {
    diceImg.src = `./dice-${5}.png`;
  } else {
    diceImg.src = `./dice-${6}.png`;
  }
};

let totalP1 = Number(p2Score.textContent);
const p1ScoreUpdater = () => {
  let sum = Number(currScoreP1.textContent);
  imagePicker();
  if (randomNum != 1) {
    sum = Number(currScoreP1.textContent) + randomNum;
    currScoreP1.textContent = sum;
  } else {
    sum = 0;
    currScoreP1.textContent = 0;
  }
};

let totalP2 = Number(p2Score.textContent);
const p2ScoreUpdater = () => {
  let sum = Number(currScoreP2.textContent);
  imagePicker();
  if (randomNum != 1) {
    sum = Number(currScoreP2.textContent) + randomNum;
    currScoreP2.textContent = sum;
  } else {
    sum = 0;
    currScoreP2.textContent = 0;
  }
};

const switcher = () => {
  totalP1 += Number(currScoreP1.textContent);
  p1Score.textContent = totalP1;
  if (totalP1 >= 100) {
    winnerNum.textContent = 1;
    overlay.style.display = 'flex';
  }
  isP1Turn = false;
  middle.style.left = '51%';
  currScoreP1.textContent = 0;
  leftBackground.style.opacity = '0.6';
  rightBackground.style.opacity = '1';
};

const switcher2 = () => {
  totalP2 += Number(currScoreP2.textContent);
  p2Score.textContent = totalP2;
  if (totalP2 >= 100) {
    winnerNum.textContent = 2;
    overlay.style.display = 'flex';
  }
  isP1Turn = true;
  currScoreP2.textContent = 0;
  middle.style.left = '49%';
  leftBackground.style.opacity = '1';
  rightBackground.style.opacity = '0.6';
};

const winnerChecker = () => {
};

const aNewGame = () => {
  totalP1 = 0;
  totalP2 = 0;
  p1Score.textContent = 0;
  p2Score.textContent = 0;
  currScoreP1.textContent = 0;
  currScoreP2.textContent = 0;
  diceImg.src = './dice-1.png';
  overlay.style.display = 'none';
};

rollDice.addEventListener('click', () => {
  if (isP1Turn) {
    p1ScoreUpdater();
  } else {
    p2ScoreUpdater();
  }
});
hold.addEventListener('click', () => {
  if (isP1Turn) {
    switcher();
  } else {
    switcher2();
  }
});
newGame.forEach((button) => {
    button.addEventListener('click', aNewGame);
})


