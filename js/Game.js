class Game {
    constructor() {
        this.missed = 0; //failed tries
        this.phrases = this.createPhrases(); //array of 5 Phrase Objects
        this.activePhrase = null; //currently active in game
    }

    createPhrases() {
        const phraseList = [
            new Phrase("Life is a box of Chocolate"),
            new Phrase("May the force be with you"),
            new Phrase("You talking to me"),
            new Phrase("Eat Your Foot"),
            new Phrase("Jingle Bells"),
            new Phrase("Easy Peasy"),
            new Phrase("I love you"),
            new Phrase("Nice to meet you"),
            new Phrase("I speak English"),
            new Phrase("The ball is in your court"),
            new Phrase("A piece of cake"),
            new Phrase("Once in a blue moon"),
            new Phrase("Jack and Jill"),
            new Phrase("Salt and Pepper"),
            new Phrase("A flying koala"),
            new Phrase("School is lame"),
            new Phrase("Sing a song")
        ];

        return phraseList;
    }
    startGame() {
        this.resetGame();
        document.getElementById("overlay").style.display = "none";
        this.activePhrase = new Phrase(this.getRandomPhrase());

        this.activePhrase.addPhraseToDisplay();
        console.log(this.activePhrase.phrase); // Just so we can see which phrase is displayed
    }

    getRandomPhrase() {
        const r = Math.floor(Math.random() * this.phrases.length);
        const phrase = this.phrases[r].phrase;
        return phrase;
    }

    handleInteraction(e) {
        e.disabled = true;

        const c = e.target.textContent;

        if (this.activePhrase.checkLetter(c)) {
            e.target.className = "chosen";
            this.activePhrase.showMatchedLetter(c);
        } else {
            e.target.className = "wrong";
            this.removeLife();
        }

        this.gameOver(this.checkForWin());
    }

    removeLife() {
        const lives = document.getElementsByClassName("tries");
        const triesLeft = lives.length - this.missed;
        if (triesLeft > 0) {
            lives[this.missed].firstElementChild.src = "images/lostHeart.png";
            this.missed += 1;
        }

        if (this.missed == 5) {
            this.gameOver(true);
        }
    }

    checkForWin() {
        const hiddenLetters = document.getElementsByClassName("hide letter");
        if (hiddenLetters.length > 0) {
            return false;
        } else {
            this.resetGame();
            return true;
        }
    }

    gameOver(gameWon) {
        if (gameWon) {
            document.getElementById("overlay").style.display = "flex";
            document.getElementById("game-over-message").textContent =
                "Great Job!. You Won.";
            document.getElementById("overlay").className = "win";
        } else {
            document.getElementById("game-over-message").textContent =
                "Sorry, better luck next time!";
            document.getElementById("overlay").className = "lose";
        }
    }

    resetGame() {
        //Keyboard Reset
        const qwerty = document.getElementById("qwerty");
        const qwertyButtons = qwerty.querySelectorAll("button");
        qwertyButtons.forEach(button => {
            button.className = "key";
        });

        //Missed Reset
        this.missed = 0;

        //Hearts Resets
        const images = document.querySelectorAll("li img");
        for (const i of images) {
            i.src = "images/liveHeart.png";
        }

        //display blocks
        const ul = document.querySelector("#phrase ul");
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
    }
}
