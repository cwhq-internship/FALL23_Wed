console.log('Home.js Loaded');
console.log('Jquery Version:', jQuery.fn.jquery);

// import { verbose as sqlite3 } from 'sqlite3';

// const db = new sqlite3.Database('database/database.db');

// db.run(`CREATE TABLE IF NOT EXISTS wordsTyped(
//     id INTEGER PRIMARY KEY,
//     words INTEGER
// )`);

// const insertQuery = `INSERT INTO wordsTyped (words) VALUES (?)`;
// const word = 5;
// db.run(insertQuery, [word], function (err) {
//     if (err) {
//         console.error(err.message);
//     } else {
//         console.log(`Inserted data with id ${this.lastID}`);
//     }
// });

// db.close();

var totalWordsTyped = 0;

function lModeStuff() {
  document.body.style.backgroundColor = "#232D3F";
  localStorage.setItem("darkMode", "true"); // Use "darkMode" as the key

  const elements = document.getElementsByClassName("text");
  for (const element of elements) {
      element.style.color = "#FFFFFF";
  }

  const navbar = document.getElementsByClassName("navbar-custom")[0];
  if (navbar) {
      navbar.style.backgroundColor = "#2c3f50";
  }

  const blueContainer = document.querySelector(".blue-container");
  if (blueContainer) {
      blueContainer.style.backgroundColor = "#2c3f50";
  }

  darkModeText.textContent = "Dark Mode";
}

function dModeStuff() {
  document.body.style.backgroundColor = "#FFFFFF";
  localStorage.setItem("darkMode", "false"); // Use "darkMode" as the key

  const elements = document.getElementsByClassName("text");
  for (const element of elements) {
      element.style.color = "#000000";
  }

  const navbar = document.getElementsByClassName("navbar-custom")[0];
  if (navbar) {
      navbar.style.backgroundColor = "#cae3ec";
  }

  const blueContainer = document.querySelector(".blue-container");
  if (blueContainer) {
      blueContainer.style.backgroundColor = "#cae3ec";
  }

    darkModeText.textContent = "Light Mode";
}


function dModeToggle() {
  if (localStorage.getItem("darkMode") === "true") {
    dModeStuff();
  } else {
    lModeStuff();
  }
}

window.onload = function () {
  let storedDarkMode = localStorage.getItem("darkMode");

  if (storedDarkMode === "true") {
    // Apply Dark Mode styles
    $("#darkModeToggle").prop("checked", true);
    lModeStuff();
  } else {
    dModeStuff();
  }
};

function startGame(numberWords, time, difficulty, allowPassing){
  console.log("game start");
  nextWord(difficulty);
  document.getElementById("maininputbox").addEventListener("keyup", function (evt) {checkWord(difficulty, time);}, false);
 
  if (allowPassing == "true"){
    document.getElementById("maininputbox").addEventListener("keyup", event => {
      if (event.code === 'Space') {
        
        skipWord(allowPassing);
      }
     }, false);
     document.getElementById("skipButton").addEventListener("click", function (evt) {skipWord(allowPassing);}, false);
    } else {
      document.getElementById("skipEnabled").style.display = "none";
    }
}

/*
 */

function checkWord(difficulty, time){
    if (wordsLeft > 0){
    currentWord = document.getElementById("currentWord").textContent;
    typedWord = document.getElementById("maininputbox").value;
    //console.log(currentWord + "\n" + typedWord);
    if (currentWord == typedWord){
      document.getElementById("maininputbox").value = "";
      nextWord(difficulty);
      totalWordsTyped++;
      wordsLeft--;
      document.getElementById("wordsToGo").innerHTML = "Words left: " + wordsLeft;
      //console.log("Total words typed: " + totalWordsTyped + "\nTotal words to type: " + wordNumber);
      wordArray[wordArray.length] = currentWord;
      //console.log("Words typed: " + wordArray.toString());
    }
   if (totalWordsTyped == wordNumber){
     endGame(1);
    }
  }
}

function nextWord(difficulty){
  var randomWord = selectRandomWord(difficulty);
  document.getElementById("currentWord").innerHTML = randomWord;
}

function endGame(value){
  clearInterval(timerInterval);
  document.getElementById("maingame").style.display = "none";
  document.getElementById("aftergame").style.display = "block";
  var wordsPerMinute = calculateWPM();
  document.getElementById("WPMCounter").innerHTML = wordsPerMinute[0] + " WPM (Words Per Minute)";
  if (value == 1){
    document.getElementById("endingType").innerHTML = "You typed the required number of words!";
  } else if (value == 2){
    document.getElementById("endingType").innerHTML = "You ran out of time!";
  } else if (value == 3){
    document.getElementById("endingType").innerHTML = "You ran out of possible words to type! Maybe lay off the skip button...";
  }
}

/*Takes a decimal, number, and rounds it to digitsRounded number of digits */
function roundNumber(number, digitsRounded){
  //console.log(number);
  digitsRounded = 10 ** digitsRounded;
  number = Math.round(number*digitsRounded);
  number = number/digitsRounded;
  //console.log(number);
  return number;
}

/* Returns an array: index 0 is words per minute, index 1 is the time spent in-game */
function calculateWPM(){
  timeSpent = time*60-timer; 
  //console.log(timeSpent + " seconds spent on game");
  wordsPerMinute = (totalWordsTyped*60)/timeSpent;
  //console.log(wordsPerMinute + " wpm");
  wordsPerMinute = roundNumber(wordsPerMinute, 2);
  //console.log(wordsPerMinute + " wpm");
  var array = [wordsPerMinute, timeSpent];
  return array; 
}

function submitScores(){
  //collect all variables
  var WPMArray = calculateWPM();
  var WPM = WPMArray[0];
  var timeSpent = WPMArray[1];
  var failedGame = gameFailure;
  var wordsTypedArray = wordArray;
  var wordsSkippedArray = skippedArray;
  var wordsTypedNumber = wordsTypedArray.length;
  var wordsSkippedNumber = wordsSkippedArray.length;
  var typedRatio = wordsTypedNumber/(wordsTypedNumber + wordsSkippedNumber)*100;
  typedRatio = roundNumber(typedRatio, 2);
  var skippedRatio = wordsSkippedNumber/(wordsTypedNumber + wordsSkippedNumber)*100;
  skippedRatio = roundNumber(skippedRatio, 2);
  var gameDifficulty = difficulty;
  

  console.log("WPM: " + WPM + "\nTime spent on game: " + timeSpent + " seconds\nTimer ran out: " + failedGame
  + "\nWords typed: "+ wordsTypedArray + "\nWords skipped: " + wordsSkippedArray
  + "\nTotal words typed: " + wordsTypedNumber + "\nTotal words skipped: " + wordsSkippedNumber
  + "\nPercentage of words typed: " + typedRatio + "%\nPercentage of words skipped: " + skippedRatio + "%"
  + "\nGame difficulty: " + gameDifficulty);

  //send to database
  alert("Score added!");
  goHome();


}

function skipWord(allowPassing){
  if (allowPassing){
    skippedArray[skippedArray.length] = document.getElementById("currentWord").textContent; 
    document.getElementById("maininputbox").value = "";
    document.getElementById("skipCounter").textContent = "Words skipped: " + skippedArray.length;
    nextWord(difficulty);
  }
}

function timerDown(){
  var timerText;
  var minutes = parseInt(timer/60);
  var seconds = timer%60;
  if (seconds==0){
    seconds = "00";
  } else if (seconds <= 9){
    seconds = "0" + seconds;
  }
  timer--;
  if (timer == 0){
    gameFailure = true;
    endGame(2);
  } 

  if (timer == 1){
    timerText = "Time left: " + minutes + ":" + seconds;
  } else {
    timerText = "Time left: " + minutes + ":" + seconds;
  }
  document.getElementById("gameTimer").textContent = timerText;
  //console.log(timerText);
  //console.log(timer);
  return timer;
}

function selectRandomWord(difficulty){
    var randomWord = "";
    var wordsArray = [];
    if (difficulty == 0){ //pull random word from easy list
      wordsArray = easyWordsList;
    } else if (difficulty == 1){ //pull word from medium list
      wordsArray = mediumWordsList;
    } else if (difficulty == 2){ //pull word from hard list
      wordsArray = hardWordsList;
    } else{
      console.log("Incorrect variable input, error");
      alert("Incorrect variable input, error");
      goHome();
      return false
    }
    if (wordsArray.length == 0){
      endGame(3);
    }
    randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    var index = wordsArray.indexOf(randomWord);
    wordsArray.splice(index, 1);
    //console.log(wordsArray.toString());
    return randomWord;
}

function hideFooter(){
    var footer = document.getElementById("footer");
    if (document.getElementById("main-home")){var main_home = document.getElementById("main-home");}
    if (document.getElementById("main-about")) {var main_about = document.getElementById("main-about");}
    if (document.getElementById("main-stats")) {var main_stats = document.getElementById("main-stats");}
    footer.style.display = "none";
    if (main_home){main_home.style.marginBottom = "10px";}
    if (main_about){main_about.style.marginBottom = "10px";}
    if (main_stats){main_stats.style.marginBottom = "10px";}
    sessionStorage.setItem("clickCount", 1);
}

function showFooter() {
    footer.style.display = "inline";
}

function footerVisibility() {
  var sessionclickCount = sessionStorage.getItem("clickCount");
  if (Number(sessionclickCount) > 0) {
    hideFooter();
  }
  else {
    showFooter();
  }
}

document.addEventListener("DOMContentLoaded", function() {
  footerVisibility();
});
  