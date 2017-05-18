

//set word variable
var word = 'hello';
var guessedCharacter = 'a';
var guessesLeft = 10;

//listen for on keyup
document.addEventListener('keyup', function(e){
	//store user input
	var userGuessedChar = e.key;
	
	//convert to lowercase
	userGuessedChar = userGuessedChar.toLowerCase();
	
	//check to see if the guessed letter is a-z
	if (isLetter(userGuessedChar)){
		//check if letter was already guessed
		if (userGuessedChar.search(guessedCharacter) === -1) {
			//character already guessed
			console.log('character already guessed');
		} else {
			//if new character
			//check if word contains character
			if (userGuessedChar.search(word) > -1) {
				//highlight letter
				console.log('one step closer');
				//add to already guessed
				guessedCharacter = guessedCharacter + userGuessedChar;
			}
				
			//if word does not contain character
				//increase incorrectCount
				//add to already guessed
		}
	}

})





//function to make sure the guess is a letter
function isLetter(str) {
	if (str.match(/[a-z]/) && str.length === 1){
		return true;
	} else {
		return false;
	}
}


