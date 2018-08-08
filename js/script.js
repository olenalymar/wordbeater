window.addEventListener('load', init);

// global vars

// levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 2
};

const currentLevel = levels.easy;

let time = currentLevel,
  score = 0,
  isPlaying;

// DOM elements
const wordInput = document.querySelector('#word-input'),
  currentWord = document.querySelector('#current-word'),
  scoreDisplay = document.querySelector('#score'),
  timeDisplay = document.querySelector('#time'),
  message = document.querySelector('#message'),
  seconds = document.querySelector('#seconds');

// words
const words = [
  'hat',
  'river',
  'lucky',
  'joke',
  'space',
  'magic',
  'smile',
  'javascript',
  'cocktail',
  'summer',
  'sunrise',
  'sunset',
  'delight',
  'joy',
  'hobby',
  'enjoy',
  'game',
  'happiness',
  'spring',
  'sky',
  'ocean',
  'cheer',
  'fun',
  'peace',
  'morning',
  'picnic',
  'day',
  'imagination',
  'idea',
  'humor',
  'party'
];

// init game
function init() {
  // show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // load word from array
  showWord(words);
  // start matching on word input
  wordInput.addEventListener('input', startMatch);
  // countdown
  setInterval(countdown, 1000);
  // check game status
  setInterval(checkStatus, 50);
}

// start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  // if score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// pick & show random word
function showWord(words) {
  // random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // output random word
  currentWord.innerHTML = words[randIndex];
}

// timer
function countdown() {
  // check if time isn't run out
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  // show time
  timeDisplay.innerHTML = time;
}

// check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!';
    score = -1;
  }
}
