// const phrase = new Phrase("hello");
let game;

const startButton = document.getElementById("btn__reset");
const qwerty = document.getElementById("qwerty");

startButton.addEventListener("click", e => {
    game = new Game();
    game.startGame();
});

qwerty.addEventListener("click", e => {
    if (e.target.className == "key") {
        // console.log(e.target);
        game.handleInteraction(e);
    }
});
