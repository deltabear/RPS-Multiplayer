// Create a two-player game of Rock Paper Scissors using Javascript and Firebase.
//Initialize Firebase
// Players will input their names and have it displayed as long as they are playing
  // Create variables to hold choices that both users can input.
  // Create variables to hold number of wins, losses, and draws. (start at 0)
  // Create variables to hold references to places in HTML where they should be displayed
  // Create a function that determines when both users have pressed a key, and will ONLY display
    // the choices after both users have made their choice
  //After both choices are made, game will announce [Player NAME] is the WINNER!
  // Game will increment wins for victorious player, and increment losses for losing player.
  // Create an in-game chatting system that allows both players to chat with each other on the page
    // User types out message (with character limit?) in chat field, presses submit, and page will display it in chat feed
    
    
    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var gameButtons = ["r", "p", "s"];

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
      //PLAYER 1 VARIABLES
    var p1Name = "";
    var p1Wins = 0;
    var p1Losses = 0;

      //PLAYER 2 VARIABLES
    var p2Name = "";
    var p2Wins = 0;
    var p2Losses = 0;

    //Shared variables since a Tie applies to both players
    var ties = 0;

    // Create variables that hold references to the places in the HTML where we want to display things.
    var directionsText = document.getElementById("directions-text");
    var userChoiceText = document.getElementById("userchoice-text");
    var computerChoiceText = document.getElementById("computerchoice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var tiesText = document.getElementById("ties-text");

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      // Only run the following code block if the user presses "r" or "p" or "s".
      if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

        // If we choose rock and the computer guesses scissors, increment our wins variable.
        if ((userGuess === "r") && (computerGuess === "s")) {
          wins++;
        }

        // If we choose rock and the computer guesses paper, increment our losses variable.
        if ((userGuess === "r") && (computerGuess === "p")) {
          losses++;
        }

        // If we choose scissors and the computer guesses rock, increment our losses variable.
        if ((userGuess === "s") && (computerGuess === "r")) {
          losses++;
        }

        // If we choose scissors and the computer guesses paper, increment our wins variable.
        if ((userGuess === "s") && (computerGuess === "p")) {
          wins++;
        }

        // If we choose paper and the computer guesses rock, increment our wins variable.
        if ((userGuess === "p") && (computerGuess === "r")) {
          wins++;
        }

        // If we choose paper and the computer guesses scissors, increment our losses variable.
        if ((userGuess === "p") && (computerGuess === "s")) {
          losses++;
        }

        // If we choose the same thing as the computer, increment our ties variable.
        if (userGuess === computerGuess) {
          ties++;
        }

        // Hide the directions
        directionsText.textContent = "";

        // Display the user and computer guesses, and wins/losses/ties.
        userChoiceText.textContent = "You chose: " + userGuess;
        computerChoiceText.textContent = "The computer chose: " + computerGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        tiesText.textContent = "ties: " + ties;
      }
    }