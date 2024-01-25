const paragraphs = [
    "Programming is awesome because it allows you to create and bring your ideas to life. With just a few lines of code, you can build websites, apps, and software that can solve real-world problems or simply entertain people. It's like having a superpower that lets you shape the digital world.",
    "The coolness of programming lies in its endless possibilities. You can use it to automate tasks, analyze data, or even control robots. It's a skill that empowers you to think logically and solve complex problems. Plus, the satisfaction of seeing your code work flawlessly is truly rewarding.",
    "Another reason why programming is cool is the vibrant community that surrounds it. There are countless online forums, communities, and coding events where you can connect with like-minded individuals, learn from experts, and collaborate on exciting projects. It's a field that encourages creativity, innovation, and continuous learning.",
    "In a parallel universe, cows tell udderly hilarious jokes at the comedy barn. Their moo-ments on stage leave the audience in stitches, proving that laughter is the best medicine, even for barnyard animals.",
    "The town of Sillyville hosted an annual contest for the silliest walk. Participants wiggled, wobbled, and moonwalked their way to victory, turning the streets into a riot of laughter and absurdity.",
    "At the Potato Olympics, spuds competed in events like the 100-meter mash and synchronized peeling. The couch potato category, however, had no contenders – they were all too busy lounging.",

  "In the land of Punderful, citizens communicated exclusively through puns. Conversations were a pun-derful experience, with laughter peeling through the air like an onion's layers.",

  "The superhero 'Captain Obvious' fought crime by stating the obvious. Criminals trembled as he exclaimed, 'You're breaking the law!' His power of stating the obvious was both his strength and weakness.",

  "The comedy club for chickens featured stand-up acts that left the coop roaring with laughter. The headliner, a charismatic rooster, had the audience in stitches with his 'egg-squisite' jokes.",

  "In the enchanted forest of Laffalot, the trees giggled, and the mushrooms cracked jokes. Visitors couldn't help but leave the forest with a belly full of laughter and a newfound appreciation for the lighter side of nature.",

  "The circus for clumsy clowns featured performers tripping over their own oversized shoes and squirting water on each other from flower lapels. The audience roared with laughter as chaos ensued under the big, floppy tent.",

  "In the kingdom of Punnyland, knights engaged in jousting matches armed with puns instead of lances. The audience winced and laughed simultaneously as they witnessed the pun-ishing blows.",

  "The alien stand-up comedian from Mars had Earthlings in stitches with jokes about the 'universal' struggles of extraterrestrial life. His punchlines, delivered in Martian, left the audience wondering if laughter truly transcends language barriers.",
  "The town of Chuckleville held an annual contest for the best dad jokes. The winner received a trophy shaped like a groan, and participants left with aching sides from laughter-induced workouts.",

  "In a parallel universe where cats rule, a feline comedian hosted a late-night talk show called 'Whiskers Tonight.' The audience couldn't resist the charm of the witty cat and their purr-fectly timed punchlines.",

  "The Coffee Bean Stand-Up Club featured beans from around the world sharing their hilarious tales of percolation and brewing mishaps. The espresso roast was known for its quick wit, leaving the audience buzzed with laughter.",

  "A wizard with a knack for comedic spells cast laughter spells on unsuspecting townsfolk. Laughter echoed through the streets as people found themselves spontaneously chuckling at the most unexpected moments.",

  "The retired rubber chicken factory became a hotspot for improv comedy. Each rubber chicken had its own comedic personality, and the audience eagerly awaited the next fowl joke that would leave them in stitches.",

  "The sun dipped below the horizon, casting a warm glow across the tranquil sea. Waves gently lapped against the shore, creating a soothing melody. Seagulls soared overhead, their cries echoing in the peaceful evening. A lone sailboat glided across the water, its silhouette framed by the hues of the setting sun.",

  "In the heart of the bustling city, neon lights illuminated the streets. People hurriedly navigated through the urban jungle, lost in a sea of faces. Street vendors offered exotic cuisines, filling the air with tempting aromas. Skyscrapers towered above, their reflective surfaces capturing the vibrant energy pulsating below.",

  "Deep in the enchanted forest, ancient trees stood tall, their branches forming a natural canopy. Shafts of sunlight filtered through, creating a magical play of light and shadow. Wildflowers carpeted the forest floor, their colors a testament to nature's artistry. A gentle breeze whispered through the leaves, carrying tales of centuries past.",

  "The old bookstore exuded the scent of aged paper and wisdom. Dusty shelves held forgotten stories waiting to be discovered. Each book seemed to have a history, a life of its own. The creaking wooden floors echoed with the footsteps of curious souls, tracing the literary paths of those who came before.",

  "High in the mountains, a serene lake reflected the snow-capped peaks surrounding it. Pine trees lined the shore, their needles rustling in the mountain breeze. A lone eagle soared overhead, its majestic wingspan cutting through the crisp air. The air was pure, the silence broken only by the occasional call of a distant mountain goat.",

  "Amidst the vast desert, dunes stretched endlessly under the scorching sun. The golden sand glittered like a sea of grains, undisturbed by human presence. Mirage-like illusions played tricks on the eyes, creating fleeting visions of oasis. The air shimmered with heat, creating a surreal landscape of nature's own design.",

  "A quaint village nestled in the rolling hills painted a picturesque scene. Stone cottages with thatched roofs stood in harmony with the landscape. A bubbling brook meandered through the heart of the village, providing life to flourishing gardens. The villagers greeted each other with smiles, embodying a simple and content way of life.",

  "On the urban rooftop, a garden flourished against the backdrop of skyscrapers. Potted plants and flowers created an oasis in the concrete jungle. Bees buzzed around, pollinating blooms in this unexpected haven. The skyline framed a juxtaposition of nature and human ingenuity, showcasing the resilience of life in unexpected places.",

  "As night fell, the city's skyline transformed into a dazzling display of lights. Buildings sparkled like jewels, competing for attention in the nocturnal spectacle. Traffic lights and car headlights created trails of color, weaving through the urban labyrinth. The city that never sleeps embraced its true identity, a vibrant beacon in the darkness.",

  "In a hidden meadow, a symphony of crickets and frogs filled the night air. Fireflies danced around, creating a magical light show under the starlit sky. Tall grass swayed gently in the breeze, revealing the nocturnal creatures that called this serene sanctuary home. The tranquility of the meadow offered a respite from the chaotic world beyond."
  ];

const typeText = document.querySelector(".typing-text p"),
inpField = document.querySelector(".wrapper .input-field"),
tryAgainBtn = document.querySelector(".content button"),
mistakeTag = document.querySelector(".mistake span"),
wpmTag = document.querySelector(".wpm span"),
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
}

loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);