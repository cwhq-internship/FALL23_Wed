console.log('Home.js Loaded');
console.log('Jquery Version:', jQuery.fn.jquery);

function dModeToggle() {
    let btnText = document.querySelector("#darkModeText").textContent;

    if(btnText == "Dark Mode") {
      document.body.style.backgroundColor = "#232D3F";

      const elements = document.getElementsByClassName("text");
      for (const element of elements) {
        element.style.color = "#FFFFFF";
      }

      document.querySelector("#darkModeText").textContent = "Light Mode";

    } else {
      document.body.style.backgroundColor = "#FFFFFF";
    
      const elements = document.getElementsByClassName("text");
      for (const element of elements) {
      element.style.color = "#000000";
      }
      document.querySelector("#darkModeText").textContent = "Dark Mode";
    }
  }

  function mainGame(numberWords, time, difficulty, allowPassing){
    /* idea for current typing system:
        get a word from a random list. that's setWord.
        every time the user types a letter, it fills in the word they're typing (updates wordTyped variable)
        if wordTyped==setWord, then complete and move to next word (run like nextWord() or something). This is our new setWord.
        Repeat until number of words complete is the number we want.
        or something like that
            --Daniel B. */
        
  }
  function nextWord(difficulty){
    /* this would just involve selecting a new word from the list and then setting up the word it shows 
    idk how to explain better
    -Daniel B. */
  }