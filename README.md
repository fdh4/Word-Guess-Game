# Word-Guess-Game
Hw 3 for UCR CBC - Word Guess Game
This is a student exercise consisting of constructing a game app and pushing it to a newly created repo.

The app randomly picks a letter, and then asks the user to guess which letter the app chose.
If the user choice matches the app's randomly chosen letter, the user wins, otherwise, the user looses.
Each game gives the user 9 chances to choose.  The app is stopped by closing the web page.





The app displays the following text: (description in parentheses)


Guess what letter I’m thinking of . . . type the letter on the keyboard . . . (requests user input)


Wins:
     (# of times the user has guessed the letter correctly)
     
     
Losses:
     (# of times the user has failed to guess the letter correctly after exhausting all guesses)
     
     
Guesses Left:
     (# of guesses left. This will update)


Your Guesses So Far: 
     (the specific letters that the user typed - these are displayed until the user either wins or loses)





When the player wins, the Wins counter increments by 1 and the game restarts.

When the player loses, increase the Losses counter and and the game restarts.

And that is it.  Pretty basic.
