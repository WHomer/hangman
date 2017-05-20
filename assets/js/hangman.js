

//set word variable
var word = 'hello';
var guessedCharacter = 'ab';
var guessesLeft = 10;

//listen for on keyup
document.addEventListener('keyup', function(e){
	//store user input and convert to lowercase
	var userGuessedChar = e.key.toLowerCase();
	console.log(userGuessedChar);
	
	//check to see if the guessed letter is a-z
	if (isLetter(userGuessedChar)){
		//check if letter was already guessed
		if (guessedCharacter.search(userGuessedChar) > -1) {
			//character already guessed
			console.log('character already guessed');
		} else {
			//if new character
			//check if word contains character
			if (word.search(userGuessedChar) > -1) {
				//highlight letter
				console.log('one step closer ');
				
			} else {
				//if word does not contain character
				//decrease guessesLeft by 1
				guessesLeft--;
				console.log('Sorry, that was incorrect');
			}
			//add to userGuessedChar to guessedCharacter string
			guessedCharacter = guessedCharacter + userGuessedChar;		
		}
	}else {
	//display that the character is not A through Z.
	console.log('The character is not A through Z.')
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


//create all character buttons to screen

