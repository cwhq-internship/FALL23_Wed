window.addEventListener('load', init);



const levels = {
  easy: 5,
  medium: 3,
  hard: 2
}


const currentLevel = levels.easy;


let time = currentLevel;
let score = 0;
let isPlaying;


const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition',
  "tree",
  "grass",
  "rose",
  "daisy",
  "fire",
  "water",
  "earth",
  "air",
  "space",
  "football",
  "basketball",
  "soccer",
  "tennis",
  "golf",
  "doctor",
  "teacher",
  "engineer",
  "artist",
  "scientist",
  "elephant",
  "giraffe",
  "pineapple",
  "watermelon",
  "strawberry",
  "crocodile",
  "butterfly",
  "orchestra",
  "television",
  "university",
  "technology",
  "chocolate",
  "happiness",
  "mysterious",
  "adventure",
  "wonderful",
  "restaurant",
  "celebration",
  "beautiful",
  "imagination",
  "fantastic",
  "extravaganza",
  "creativity",
  "magnificent",
  "fascinating",
  "curiosity",
  "hilarious",
  "enthusiastic",
  "delicious",
  "exquisite",
  "tremendous",
  "reflection",
  "captivating",
  "breathtaking",
  "inspiration",
  "accomplishment",
  "effervescent",
  "elaborate",
  "spontaneous",
  "wonderland",
  "unbelievable",
  "remarkable",
  "effulgent",
  "vibrant",
  "jubilation",
  "curvaceous",
  "serendipity",
  "effervescence",
  "mellifluous",
  "paradoxical",
  "elephantine",
  "giraffesaurus",
  "pineappleicious",
  "watermelonopolis",
  "strawberryspectacular",
  "crocodilicious",
  "butterflywonder",
  "orchestraland",
  "televisionary",
  "universitytopia",
  "technologicality",
  "chocolatetastic",
  "happinessination",
  "mysteriouslywondrous",
  "adventurequest",
  "wonderfulnessity",
  "restaurantopia",
  "celebrationary",
  "breathtakingnomenal",
  "inspirationation",
  "accomplishmaster",
  "effervescentacular",
  "elaborateopolis",
  "remarkablificent",
  "effulgentacular",
  "vibrantastic",
  "jubiliciousation",
  "sensationalicious",
  "unparalleledtastic",
  "extraordinarilywonderful",
  "unconventionallyawesome",
  "inquisitiviouslywonderful",
  "incomprehensiblification",
  "magnificationopolis",
  "flourishingtropolis",
  "unfathomablification",
  "perpendicularulous",
  "resplendentacular"
];



function init() {
  seconds.innerHTML = currentLevel;  
  showWord(words);
  wordInput.addEventListener('input', startMatch);
  setInterval(countdown, 1000);
  setInterval(checkStatus,50);
} 

function startMatch() {
  if(matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  if(score === -1 ) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
  
}

function matchWords() {
  if(wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}




function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
}


function countdown() {
  if(time > 0) {
    time--;
  } else if(time === 0) {
    isPlaying = false;
  } 
  timeDisplay.innerHTML = time;
}

function checkStatus() {
  if(!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
  }
}