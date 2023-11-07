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
      document.body.style.backgroundColor = "#F9F3CC";
    
      const element = document.querySelector(".text");
      element.style.color = "#8EACCD";

      document.querySelector("#dMode").textContent = "Click for Dark Mode";
    }
  }

  function mainGame(numberWords, time, difficulty, allowPassing){

  }
  function nextWord(difficulty){

  }