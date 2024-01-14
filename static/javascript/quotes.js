const paragraphs = [
    "Programming is awesome because it allows you to create and bring your ideas to life. With just a few lines of code, you can build websites, apps, and software that can solve real-world problems or simply entertain people. It's like having a superpower that lets you shape the digital world.",
    "The coolness of programming lies in its endless possibilities. You can use it to automate tasks, analyze data, or even control robots. It's a skill that empowers you to think logically and solve complex problems. Plus, the satisfaction of seeing your code work flawlessly is truly rewarding.",
    "Another reason why programming is cool is the vibrant community that surrounds it. There are countless online forums, communities, and coding events where you can connect with like-minded individuals, learn from experts, and collaborate on exciting projects. It's a field that encourages creativity, innovation, and continuous learning."
  ];

const typeText = document.querySelector(".typing-text p"),
inpField = document.querySelector(".wrapper .input-field"),
tryAgainBtn = document.querySelector(".content button"),
mistakeTag = document.querySelector(".mistake span"),
wpmTag = document.querySelector(".wpm span"),
cpmTag = document.querySelector(".cpm span"),
timeTag = document.querySelector(".time span b");


let timer,
maxTime = 60,
timeLeft = maxTime,
charIndex = mistakes = isTyping = 0;

function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typeText.innerHTML = "";
    paragraphs[ranIndex].split("").forEach(char => {
        let span = `<span>${char}</span>`
        typeText.innerHTML += span;
    });
    typeText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typeText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    let characters = typeText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if(charIndex < characters.length - 1 && timeLeft > 0) {
        if(!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if(typedChar == null) {
            if(charIndex > 0) {
                charIndex--;
                if(characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if(characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - mistakes)  / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;

        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
    } else {
        clearInterval(timer);
        inpField.value = "";
    }   
}

function initTimer() {
    if(timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes)  / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
    }
}

function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
}

loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);