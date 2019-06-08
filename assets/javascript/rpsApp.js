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

//Initialize Firebase 
var config = {
  apiKey: "AIzaSyAkv_QRAm4tJNyyc2o4LbR1R81aA-VCwoY",
  authDomain: "rps-multiplayer-c6b74.firebaseapp.com",
  databaseURL: "https://rps-multiplayer-c6b74.firebaseio.com",
  storageBucket: "rps-multiplayer-c6b74.appspot.com",
};

firebase.initializeApp(config);
// Create a variable to reference the database
var database = firebase.database();
    
    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var gameButtons = ["r", "p", "s"];

    var amPlayer1 = false;
    var amPlayer2 = false;

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
      //PLAYER 1 VARIABLES
    var p1name = "";
    var p1wins = 0;
    var p1losses = 0;
    // Player 2 variables
    var p2name = "";
    var p2wins = 0;
    var p2losses = 0;
    var ties = 0;

    //Textbox variables
    var messages = document.getElementById("messages");
    var textbox = document.getElementById("textbox");
    var button = document.getElementById("button");

    //create event listener for button clicks
    button.addEventListener("click", function(){
      //create new list item
      var newMessage = document.createElement("li");
      newMessage.innerHTML = textbox.value
      messages.appendChild(newMessage);
      textbox.nodeValue = "";

      // Create variables that hold references to the places in the HTML where we want to display things.
    var directionsText = document.getElementById("directions-text");
    var user1ChoiceText = document.getElementById("user1choice-text");
    var user2ChoiceText = document.getElementById("user2choice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var tiesText = document.getElementById("ties-text");

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

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
        user1ChoiceText.textContent = "You chose: " + userGuess;
        user2ChoiceText.textContent = "You chose: " + userGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        tiesText.textContent = "ties: " + ties;
    });