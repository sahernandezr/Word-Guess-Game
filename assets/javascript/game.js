//Create variables to store wins, tries and letters used

var wordToGuess = ""; 
var wins = 0;
var triesLeft = 6; //User has six chances to miss: head, torso, two arms, two legs
var lettersUsed = [];


//Create variables that hold references to the places in the HTML were info will be displayed
var wordToGuess = document.getElementById("hidden-word");
var winsText = document.getElementById("wins");
var triesLeftText = document.getElementById("tries-left");
var lettersUsedText = document.getElementById("letters-already-guessed");


// var wordList = ["dragon", "elf", "kraken", "leprechaun", "mermaid", "phoenix", "sphinx", "troll", "unicorn", "yeti"]
var wordList = ["mermaid", "fairy", "elf"];
// Choose a random Word from the wordList
var wordChosen = wordList[Math.floor(Math.random()* wordList.length)];
console.log(wordChosen);


// Show scores (-) for every letter in the wordChosen
    var wordHidden="";
for (var i=0; i<wordChosen.length; i++) {
    wordHidden = wordHidden + " - "  ;
}

//HASTA AQUI VAMOS BIEN

//catch the user's keytroke




// this is what is being shown in the DOM
wordToGuess.textContent=wordHidden;
winsText.textContent="Wins: "+ wins;
triesLeftText.textContent="Tries left: " + triesLeft;
lettersUsedText.textContent="Letters already chosen: " + lettersUsed;








