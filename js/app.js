let game;

const startButton = document.getElementById("btn__reset"); //Reset button on the overlay
const qwerty = document.getElementById("qwerty"); //Qwerty keyboard which excludes spaces and special keys

//Click Listener fro the start button
startButton.addEventListener("click", e => {
    game = new Game(); //assigned new Game object to the empty game variable
    game.startGame(); // calling startGame method through the game object
});

/* UNCOMMENT FOLLOWING CODE IF YOU WANT TO TRY AND ENABLE ON SCREEN KEYBOARD
/// START OF THE CODE ///
// qwerty.addEventListener("click", e => {
//     if (e.target.className == "key") {
//         game.handleInteraction(e);
//     }
// });

//// END OF THE CODE////
*/

//Keyboard keydown listener set on the document so it can be captured anywhere on the document
document.addEventListener("keydown", e => {
    //calling Intraction method on game object and passing the event to handler

    game.handleInteraction(e);
});
