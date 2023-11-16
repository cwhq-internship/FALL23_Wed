console.log('Home.js Loaded');
console.log('Jquery Version:', jQuery.fn.jquery);

function dModeToggle() {
    let btnText = document.querySelector("#dMode").textContent;

    if(btnText == "Click for Dark Mode") {
      document.body.style.backgroundColor = "#232D3F";

      const element = document.querySelector(".text");
      element.style.color = "#008170";

      document.querySelector("#dMode").textContent = "Click for Light Mode";

    } else {
      document.body.style.backgroundColor = "#FFFFFF";
    
      const element = document.querySelector(".text");
      element.style.color = "#8EACCD";

      document.querySelector("#dMode").textContent = "Click for Dark Mode";
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

  function hideFooter(){
    var footer = document.getElementById("footer");
    if (document.getElementById("main-home")){var main_home = document.getElementById("main-home");}
    if (document.getElementById("main-about")) {var main_about = document.getElementById("main-about");}
    if (document.getElementById("main-stats")) {var main_stats = document.getElementById("main-stats");}
    footer.style.display = "none";
    if (main_home){main_home.style.marginBottom = "10px";}
    if (main_about){main_about.style.marginBottom = "10px";}
    if (main_stats){main_stats.style.marginBottom = "10px";}
  }