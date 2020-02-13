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
            new Phrase("You talkihg to me"),
            new Phrase("You kidding bro"),
            new Phrase("Testing I am ")
        ];

        return phraseList;
    }
    startGame() {
        document.getElementById("overlay").style.display = "none";
        //calls getRandomPhrase() to get random text
        const text = new Phrase(this.getRandomPhrase());
        //Call add phrase to display from phrase class

        text.addPhraseToDisplay();
        //Set activePhrase to the chosen one.
        this.activePhrase = text;
    }

    getRandomPhrase() {
        //get a random phrase from phrases and return it
        const r = Math.floor(Math.random() * this.phrases.length);
        const phrase = this.phrases[r].phrase;
        return phrase;
    }

    handleInteraction(e) {
        // disabled selected letter from keyboard
        e.disabled = true;

        /*
        If the guess is incorrect and not in phrase
        add wrong css class to button and call removeLife()
        */
        const text = this.activePhrase;
        const charArray = [...text];
        const c = e.target.textContent;

        if (charArray.includes(c)) {
            e.target.className = "chosen";
            const char = document.getElementsByClassName(c)[0];
            char.className = `show letter ${c}`;
            console.log(char);
        } else {
            e.target.className = "wrong";
            console.log(`Dont' Include ${c}`);
            this.removeLife();
        }
        console.log(text);

        /*
        if the guess is correct and is in phrase add chosen css class 
        calss showMatchedLetter() and calls checkForWin()
        if player won show gameOver()
        */
    }

    removeLife() {
        //Remove Life from scoreboard by replacing heart image with loseHeart.png
        const lives = document.getElementsByClassName("tries");
        console.log(lives);
        const triesLeft = lives.length - this.missed;
        if (triesLeft > 0) {
            lives[triesLeft - 1].firstElementChild.src = "images/lostHeart.png";
            console.log(this.missed);
        }
        // Increase missed counter by 1
        this.missed += 1;
        if (this.missed == 5) {
            this.gameOver("You lose");
        }
        // If missed 5 times call gameOver()
    }

    checkForWin() {
        // check if all letters are revealed, return true of false
    }

    gameOver(message) {
        //display original startscreen overlay
        document.getElementById("overlay").style.display = "block";

        //update overlay h1 with win or lose message
        document.getElementById("game-over-message").textContent = message;
        //replace overlay Start class with in or lose class
        document.getElementById("overlay").className = "lose";
    }
}
