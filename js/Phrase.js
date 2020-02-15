class Phrase {
    constructor(_phrase) {
        this.phrase = _phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        const ul = document.querySelector("#phrase ul");
        const text = this.phrase;
        const textArray = [...text];

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
    showMatchedLetter(letter) {
        const char = document.getElementsByClassName(letter);
        for (const c of char) {
            c.className = `show letter ${letter}`;
        }
    }
}
