

//set word variable
var word = 'javascript';
var guessedCharacter = '';
var guessesRemaining = 10;

//temp, run function
displayWord();
displayGuessesRemaining();
//end temp, run functions

//listen for on keyup
document.addEventListener('keyup', function(e){
	//store user input and convert to lowercase
	var userGuessedChar = e.key.toLowerCase();
	//check to see guesses left
	if (guessesRemaining > 0){
		//check to see if the guessed letter is a-z
		if (isLetter(userGuessedChar)){
			//check if letter was already guessed
			if (guessedCharacter.search(userGuessedChar) > -1) {
				//character already guessed
				displayMessage('character already guessed');
			} else {
				//if new character
				//check if word contains character
				if (word.search(userGuessedChar) > -1) {
					//highlight letter
					displayMessage('Found One...');
					//find character-of-word div and populate the character
					for (var i=0; i < word.length; i++){
						var characterDiv = document.getElementsByClassName('character-of-word')[i];
						if (word.charAt(i) === userGuessedChar){
							characterDiv.innerHTML = userGuessedChar.toUpperCase();
						}
					}	
				} else {
					//if word does not contain character
					//decrease guessesRemaining by 1
					guessesRemaining--;
					displayGuessesRemaining();
					displayMessage('Sorry, that character is not in the word');
				}
				//add to userGuessedChar to guessedCharacter string
				guessedCharacter = guessedCharacter + userGuessedChar;
				//display the guessed characters
				var characterGuessedDiv = document.getElementsByClassName('js-character-guessed')[0];
				characterGuessedDiv.innerHTML = characterGuessedDiv.innerHTML + userGuessedChar + '  ' ;
			}
		}else {
		//display that the character is not A through Z.
		displayMessage('The character is not A through Z.')
		}
	}else {
		//display that you have lost the game
		displayMessage('You have lost the Game, Better Luck Next Time!');
	}
})

//function display user message
function displayMessage(message){
	var messageDiv = document.getElementsByClassName('js-user-message')[0];
	messageDiv.innerHTML = message;
}

//function show word to guess
function displayWord() {
	var wordDiv = document.getElementsByClassName('js-word-to-guess')[0];
	for (i=0; i < word.length; i++){
		//cycle through word length to display each div
		var characterDiv = document.createElement('div');
		characterDiv.innerHTML = '_';
		//characterDiv.innerHTML = word.charAt(i);
		characterDiv.className = 'character-of-word';
		wordDiv.appendChild(characterDiv);
	}
}
//function to display the guesses remaining
function displayGuessesRemaining() {
	var guessesRemainingDiv = document.getElementsByClassName('js-guesses-remaining')[0];
	guessesRemainingDiv.innerHTML = guessesRemaining;
}

//function to make sure the guess is a letter
function isLetter(str) {
	if (str.match(/[a-z]/) && str.length === 1){
		return true;
	} else {
		return false;
	}
}


//create all character buttons to screen

