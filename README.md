# OOP Game Show App

In this project we used Object Oriented Javascript to create a puzzle find the phrase game.
We impleemented on screen keyboard listeners using 'click' events and then implemented real time physical keyboard
listeners using 'keydown' events

User is dispalyed a set of hidden letters, qwerty keyboard buttons and option to use physical keyboard in order to
guess the hidden letters.
If the correct guess is made, the hidden letter is shown. In case of incorrect guess, one life is lost.
If the user loses 5 lives, the game is Over and user can play again with new phrase.

If user has revealed all the letters, a page is displayed with User displayed with number of mistake they made.
If user lost the game and lost 5 lives, the hidden phrase is shown with Game Over message.

We have added minor style changes including:

-   Increased Phrase Hunter Heading Large font size
-   Increased gameOver message text size - medium font size
-   Added hover state for the on screen qwerty keyboard
    -   Button colour changed
    -   Added border
    -   Font weight to bold
    -   Text colour changed
-   Changed Start, Win, Lose Overlay colours
-   Added hr (horizontal rules) between sections i.e. hidden phrase, qwerty keyboard and tries / lives
-   Added border to the main container
