class Game {
    constructor() {
        this.missed = 0; //failed tries
        this.phrases = this.createPhrases(); //set to a method which is creating list of phrase arrays
        this.activePhrase = null; //currently active in game and set to null on start
    }

    createPhrases() {
        //Generating list of Phrase Objects and passing phrases in it
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

        return phraseList; // Returning full phrase list we can use for game
    }
    startGame() {
        this.resetGame(); //This reset method is called every time on start of the game.
        document.getElementById("overlay").style.display = "none"; // first overlay is set to none so we can see the buttons and pharse
        this.activePhrase = new Phrase(this.getRandomPhrase()); //set active phrase to one of the randomly generated pharse

        this.activePhrase.addPhraseToDisplay(); // Setting the active phrase to display

        console.log(this.activePhrase.phrase); // Just so we can see which phrase is displayed
    }

    //Getting random phrase from phrases and returning
    getRandomPhrase() {
        const randNum = Math.floor(Math.random() * this.phrases.length);
        const phrase = this.phrases[randNum].phrase;
        return phrase;
    }

    //This is the main interaction method with all the logic
    handleInteraction(e) {
        // console.log(e.key.toLowerCase());
        const char = qwerty.querySelectorAll("button"); //find all the buttons
        for (let i = 0; i < char.length; i++) {
            const button = char[i];
            const buttonText = button.innerText;
            if (e.key.toLowerCase() == buttonText) {
                // if the buttons has the text of the key pressed

                button.disabled = true; //disable the button

                if (this.activePhrase.checkLetter(buttonText)) {
                    //if active phrase has the button text
                    button.className = "chosen"; //change the class of button to chosen
                    this.activePhrase.showMatchedLetter(buttonText); //display the matched letter
                    if (this.checkForWin()) {
                        this.gameOver(true); //check if the user is won. then display gameOver
                    }
                } else {
                    if (button.className != "wrong") {
                        //if the button class is not already wrong
                        button.className = "wrong"; //set it to wrong
                        this.removeLife(); //remove life
                    }
                }
            }
        }
    }

    /* 
    FOLLOWING CODE IS ONLY TO HANDLE INTERATCTION FROM THE ON SCREEN KEYBOARD
    //// START OF THE CODE /////
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

    //// END OF THE CODE ////
    */

    //This method removes the life if the incorrect guess is made.
    removeLife() {
        const lives = document.getElementsByClassName("tries"); //Total Lives
        const triesLeft = lives.length - this.missed; //Total tries left: length - missed

        //If we have more than 0 tries then change the pic and add to missed
        if (triesLeft > 0) {
            lives[this.missed].firstElementChild.src = "images/lostHeart.png"; //change heart image
            this.missed += 1; // add one to missed
        }

        //If missed count is 5, call gameOver
        if (this.missed == 5) {
            this.gameOver(false);
        }
    }

    //This method will check if the player has revealed all letters
    checkForWin() {
        const hiddenLetters = document.getElementsByClassName("hide letter"); //Total hidden litters which are set by Phrase class
        if (hiddenLetters.length > 0) {
            //if more than zero, not winning yet if 0 return true and player won
            return false;
        } else {
            return true;
        }
    }

    //Game over method will display overlay and message depending on the outcome
    gameOver(gameWon) {
        //if the game won has input of true it will display and dset the content to this winning block
        if (gameWon) {
            console.log("gameOver true ran");
            document.getElementById("overlay").style.display = "flex";
            document.getElementById(
                "game-over-message"
            ).textContent = `Great Job!. You Won with ${this.missed} live(s) lost`;
            document.getElementById("overlay").className = "win";
        } else {
            console.log("gameOver false ran");
            document.getElementById("overlay").style.display = "flex";
            //This block is updated when the user lost
            document.getElementById(
                "game-over-message"
            ).textContent = `Sorry, The phrase was "${this.activePhrase.phrase}".
                Better luck next time!`;
            document.getElementById("overlay").className = "lose";
        }
    }
    //This method reset the game all the values, properties are set to default
    resetGame() {
        document.getElementById("overlay").className = "start";
        //On screen Keyboard Reset
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
            // while ul has firstChild, another way to clear the li items
            ul.removeChild(ul.firstChild); //remove that firstChild
        }
    }
}
