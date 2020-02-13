class Phrase {
    constructor(_phrase) {
        this.phrase = _phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        console.log("Display Phrase");
        const text = this.phrase;
        const textArray = [...text];

        const ul = document.querySelector("#phrase ul");
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
            return true;
        } else {
            return false;
        }
    }

    //Reveals the letter on board if matches
    showMatchedLetter() {}
}
