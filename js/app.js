// const phrase = new Phrase("hello");
const game = new Game();

const startButton = document.getElementById("btn__reset");
const qwerty = document.getElementById("qwerty");

startButton.addEventListener("click", e => {
    // const newGame = new Game();
    game.startGame();
});

qwerty.addEventListener("click", e => {
    if (e.target.className == "key") {
        console.log(e.target);
        game.handleInteraction(e);
    }
});
