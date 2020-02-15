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
            new Phrase("Sing a song"),
            new Phrase("bruno mars is bae"),
            new Phrase("All my life I had to fight"),
            new Phrase("daisy is an angel"),
            new Phrase("Elephant Shoe"),
            new Phrase("Foggy London awaits"),
            new Phrase("I like long bananas"),
            new Phrase("olive juice"),
            new Phrase("you are adopted"),
            new Phrase("Dollar Deals"),
            new Phrase("I lord you"),
            new Phrase("You moved my cheese"),
            new Phrase("What ran over grandma"),
            new Phrase("Popping pure puree"),
            new Phrase("Too late to debate on fate"),
            new Phrase("Feelings reveal real feels"),
            new Phrase("Wipe that smile off your face"),
            new Phrase("Green tea KitKat"),
            new Phrase("You are a tomato"),
            new Phrase("Unicorns are fluffy")
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
<<<<<<< HEAD
<<<<<<< HEAD
        // console.log(e.key.toLowerCase());
        const char = qwerty.querySelectorAll("button"); //find all the buttons
        for (let i = 0; i < char.length; i++) {
            const button = char[i];
            const buttonText = button.innerText;
            if (e.key.toLowerCase() == buttonText) {
                // if the buttons has the text of the key pressed

                button.disabled = true; //disable the button

                if (!this.activePhrase.checkLetter(buttonText)) {
                    this.removeLife();
                    if (button.className != "wrong") {
                        //if the button class is not already wrong
                        button.className = "wrong"; //set it to wrong
                        //remove life
                    }
                } else if (this.activePhrase.checkLetter(buttonText)) {
                    if (button.className != "chosen") {
                        button.className = "chosen"; //change the class of button to chosen
                        this.activePhrase.showMatchedLetter(buttonText); //display the matched letter
                        if (this.checkForWin() == true) {
                            this.gameOver(true);
                        }
                    }
                }
            }
        }
    }
    //This is the main interaction method with all the logic
    // handleInteraction(e) {
    //     // console.log(e.key.toLowerCase());
    //     const char = qwerty.querySelectorAll("button"); //find all the buttons
    //     for (let i = 0; i < char.length; i++) {
    //         const button = char[i];
    //         const buttonText = button.innerText;
    //         if (e.key.toLowerCase() == buttonText) {
    //             // if the buttons has the text of the key pressed

    //             button.disabled = true; //disable the button

    //             if (this.activePhrase.checkLetter(buttonText)) {
    //                 //if active phrase has the button text
    //                 button.className = "chosen"; //change the class of button to chosen
    //                 this.activePhrase.showMatchedLetter(buttonText); //display the matched letter
    //             } else {
    //                 this.removeLife();
    //                 if (button.className != "wrong") {
    //                     //if the button class is not already wrong
    //                     button.className = "wrong"; //set it to wrong
    //                     //remove life
    //                 }
    //             }
    //         }
    //     }

    // }

    /* 
    FOLLOWING CODE IS ONLY TO HANDLE INTERATCTION FROM THE ON SCREEN KEYBOARD
    //// START OF THE CODE /////
    handleInteraction(e) {

=======
>>>>>>> parent of dc1f4ff... complete with keyboard
=======
>>>>>>> parent of dc1f4ff... complete with keyboard
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
<<<<<<< HEAD
<<<<<<< HEAD
        console.log("remove life");
        const lives = document.getElementsByClassName("tries"); //Total Lives
        console.log("Lives: " + lives.length);
        const triesLeft = lives.length - this.missed; //Total tries left: length - missed
        console.log(triesLeft);

        //If we have more than 0 tries then change the pic and add to missed
        if (triesLeft > 0) {
            lives[this.missed].firstElementChild.src = "images/lostHeart.png"; //change heart image
            this.missed += 1; // add one to missed
            console.log(triesLeft);
=======
        const lives = document.getElementsByClassName("tries");
        const triesLeft = lives.length - this.missed;
        if (triesLeft > 0) {
            lives[this.missed].firstElementChild.src = "images/lostHeart.png";
            this.missed += 1;
>>>>>>> parent of dc1f4ff... complete with keyboard
=======
        const lives = document.getElementsByClassName("tries");
        const triesLeft = lives.length - this.missed;
        if (triesLeft > 0) {
            lives[this.missed].firstElementChild.src = "images/lostHeart.png";
            this.missed += 1;
>>>>>>> parent of dc1f4ff... complete with keyboard
        }

        if (this.missed == 5) {
            console.log(triesLeft, this.missed);
            this.gameOver();
        }
    }

    checkForWin() {
<<<<<<< HEAD
<<<<<<< HEAD
        const hiddenLetters = document.getElementsByClassName("hide letter"); //Total hidden litters which are set by Phrase class
        if (hiddenLetters.length == 0) {
            //if more than zero, not winning yet if 0 return true and player won
            console.log("Game Won");
=======
=======
>>>>>>> parent of dc1f4ff... complete with keyboard
        const hiddenLetters = document.getElementsByClassName("hide letter");
        if (hiddenLetters.length > 0) {
            return false;
        } else {
            this.resetGame();
<<<<<<< HEAD
>>>>>>> parent of dc1f4ff... complete with keyboard
=======
>>>>>>> parent of dc1f4ff... complete with keyboard
            return true;
        } else {
            console.log("Not won yet");
            return false;
        }
    }

    gameOver(gameWon) {
<<<<<<< HEAD
<<<<<<< HEAD
        console.log("gameOver called with " + gameWon);
        //if the game won has input of true it will display and dset the content to this winning block
        if (gameWon == true) {
=======
=======
>>>>>>> parent of dc1f4ff... complete with keyboard
        if (gameWon) {
>>>>>>> parent of dc1f4ff... complete with keyboard
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
