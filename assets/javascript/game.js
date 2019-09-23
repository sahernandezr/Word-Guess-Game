//Create variables to store wins, tries and letters used

var wordToGuess = ""; 
var wins = 0;
var triesLeft = 6; //User has six chances to miss: head, torso, two arms, two legs
var lettersUsed = [];

//Array of options available to chose by the user (user can only chose letters, not numbers or signs)
var available = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//Create variables that hold references to the places in the HTML were info will be displayed
var wordToGuess = document.getElementById("hidden-word");
var winsText = document.getElementById("wins");
var triesLeftText = document.getElementById("tries-left");
var lettersUsedText = document.getElementById("letters-already-guessed");

var wordList = ["dragon", "elf", "kraken", "leprechaun", "mermaid", "phoenix", "sphinx", "troll", "unicorn", "yeti"]
//var wordList = ["mermaid", "fairy", "elf"];
// Choose a random Word from the wordList

var wordChosen = wordList[Math.floor(Math.random()* wordList.length)];
console.log(wordChosen);

// Show scores (-) for every letter in the wordChosen
    var wordHidden=[];
for (var i=0; i<wordChosen.length; i++) {
    wordHidden[i]="-";
}

//catch the user's keytroke

document.onkeyup = function(event) {
    var letterSelected = event.key.toLowerCase();
    //console.log(letterSelected);

        
   if ((available.indexOf(letterSelected)>-1) && lettersUsed.indexOf(letterSelected)==-1) { //if the user selection IS a letter and it hasn't been chosen by the user previously (to avoid showing repeated letters)
        lettersUsed.push(letterSelected); //add it to the array of lettersUsed
        //console.log(lettersUsed);
        lettersUsedText.textContent=lettersUsed.join(); //to show which letters have been selected
        
        
        if (wordChosen.indexOf(letterSelected)==-1) { //if the letter selected doesn't exist in the word to guess, lower tries left by one
            triesLeft--;
            triesLeftText.textContent="Tries left: " + triesLeft;

            if (triesLeft==0) { //if tries go down to zero, you lose
                alert("You lost! The correct answer was: " + wordChosen);
            }
        }

      

        else if (wordChosen.indexOf(letterSelected)>-1) { //if the letter selected is part of the word to be guessed
            
            //Compare each element of the array wordChosen to the selected letter
            for (j=0; j<wordChosen.length; j++) {
                if (letterSelected==wordChosen[j]) { //if it is the same, replace it
                    wordHidden[j]=letterSelected; 
                    wordToGuess.textContent=wordHidden.join("");
                }    
            }

            var wordHiddenString = wordHidden.join("");
            console.log(wordHiddenString);

            var wordChosenString = wordChosen.toString();
            console.log(wordChosenString);

            if (wordHiddenString===wordChosenString) {
                wins++;
                winsText.textContent=wins;
                alert('Great job! The correct word was "' + wordChosen.toUpperCase() + '"! Do you want to play again?');
            }
        }
    }

} //end of document onkeyup

// this is what is being shown in the DOM
wordToGuess.textContent=wordHidden.join("");
winsText.textContent=wins;
triesLeftText.textContent=triesLeft;
