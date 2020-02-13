class Phrase {
    constructor(_phrase) {
        this.phrase = _phrase.toLowerCase(); //grab the phrase passed in here
    }

    //Display the phrase on the screen and hide it
    addPhraseToDisplay() {
        const ul = document.querySelector("#phrase ul"); //grab the ul parent element
        const text = this.phrase; //text of the phrase
        const textArray = [...text]; //create array from the phrase to single letters

        //for each letter in array create li and add the class names to letters
        textArray.forEach(text => {
            const li = document.createElement("li");
            if (text == " ") {
                li.className = "space";
                li.textContent = " ";
            } else {
                li.className = `hide letter ${text}`;
                li.textContent = text;
            }
            ul.appendChild(li);
        });
    }

    //check if the letter is in array
    checkLetter(letter) {
        const text = this.phrase;
        const textArray = [...text];

        if (textArray.includes(letter)) {
            // if the letter array includes the single letter passed in return true else false
            return true;
        } else {
            return false;
        }
    }

    //Reveals the letter on board if matches
    showMatchedLetter(letter) {
        const char = document.getElementsByClassName(letter); // show the letter passed on the screen and change its class to show
        for (const c of char) {
            c.className = `show letter ${letter}`;
        }
    }
}
