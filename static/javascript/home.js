console.log('Home.js Loaded');
console.log('Jquery Version:', jQuery.fn.jquery);

var totalWordsTyped = 0;

function lModeStuff() {
  document.body.style.backgroundColor = "#232D3F";
  localStorage.setItem("Dark", 1);


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

  darkModeText.textContent = "Light Mode";
}

function dModeStuff() {
  document.body.style.backgroundColor = "#FFFFFF";
  localStorage.setItem("Dark", 0);

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

  darkModeText.textContent = "Dark Mode";
}

if(localStorage.getItem("Dark") == 0) {
  lModeStuff();
} else {
  $("#darkModeToggle").prop("checked", true);
  dModeStuff();
}

function dModeToggle() {
  if(localStorage.getItem("Dark") == 0) {
      lModeStuff();
    } else {
      dModeStuff();
  }
}

window.onload = function () {
  let storedDarkMode = localStorage.getItem("darkMode");

  if (storedDarkMode === "true") {
      // Apply Dark Mode styles
      dModeToggle();
  }
};

function startGame(numberWords, time, difficulty, allowPassing){
  console.log("game start");    
  nextWord(difficulty);
  document.getElementById("maininputbox").addEventListener("keyup", function (evt) {checkWord(difficulty, time);}, false);
}

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
     endGame();
    }
  }
}

function nextWord(difficulty){
  var randomWord = selectRandomWord(difficulty);
  document.getElementById("currentWord").innerHTML = randomWord;
}

function endGame(){
  clearInterval(timerInterval);
  document.getElementById("maingame").style.display = "none";
  document.getElementById("aftergame").style.display = "block";
  var wordsPerMinute = calculateWPM()
  document.getElementById("WPMCounter").innerHTML = wordsPerMinute[0] + " wpm (words per minute)";
}

/* Returns an array: index 0 is words per minute, index 1 is the time spent in-game */
function calculateWPM(){
  timeSpent = time*60-timer; 
  //console.log(timeSpent + " seconds spent on game");
  wordsPerMinute = (totalWordsTyped*60)/timeSpent;
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
  var skippedRatio = wordsSkippedNumber/(wordsTypedNumber + wordsSkippedNumber)*100;
  
console.log("WPM: " + WPM + "\nTime spent on game: " + timeSpent + " seconds\nTimer ran out: " + failedGame
+ "\nWords typed: "+ wordsTypedArray + "\nWords skipped: " + wordsSkippedArray
+ "\nTotal words typed: " + wordsTypedNumber + "\nTotal words skipped: " + wordsSkippedNumber
+ "\nPercentage of words typed: " + typedRatio + "%\nPercentage of words skipped: " + skippedRatio + "%");

  //send to database
}

function skipWord(){
  //call an event listener on spacebar or clicking #skipButton
  //add the skipped word to wordsSkippedArray
  //call nextWord()
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
    endGame();
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
    if (difficulty == 0){ //pull random word from easy list
      randomWord = easyWordsList[Math.floor(Math.random() * easyWordsList.length)];
    } else if (difficulty == 1){ //pull word from medium list
      randomWord = mediumWordsList[Math.floor(Math.random() * mediumWordsList.length)];
    } else if (difficulty == 2){ //pull word from hard list
      randomWord = hardWordsList[Math.floor(Math.random() * hardWordsList.length)];
    } else{
      alert("Incorrect variable input, error");
      window.location.href = "../../../../";
    }
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
  