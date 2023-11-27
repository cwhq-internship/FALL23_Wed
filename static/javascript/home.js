console.log('Home.js Loaded');
console.log('Jquery Version:', jQuery.fn.jquery);



  function mainGame(numberWords, time, difficulty, allowPassing){

    /* idea for current typing system:
        get a word from a random list. that's setWord.
        every time the user types a letter, it fills in the word they're typing (updates wordTyped variable)
        if wordTyped==setWord, then complete and move to next word (run like nextWord() or something). This is our new setWord.
        Repeat until number of words complete is the number we want.
        or something like that
            --Daniel B. */
        
        
        
        
  }

  function checkWord(difficulty){
    currentWord = document.getElementById("currentWord").textContent;
    typedWord = document.getElementById("maininputbox").value;
    console.log(currentWord + "\n" + typedWord);
    if (currentWord == typedWord){
      alert("yay!")
      document.getElementById("maininputbox").value = "";
      nextWord(difficulty);
    }
  }

  function nextWord(difficulty){
    /* this would just involve selecting a new word from the list and then setting up the word it shows 
    idk how to explain better
    -Daniel B. */
    console.log(difficulty);
  }
  
  function randomWord(difficulty){
    if (difficulty == 0){ //pull random word from easy list

    } else if (difficulty == 1){ //pull word from medium list or easy list

    } else if (difficulty == 2){ //pull word from any of the three lists

    } else{
      alert("Incorrect variable input, error")
      window.location.href = "{{url_for('home')}}"
    }
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