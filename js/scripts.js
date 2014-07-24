var fiveLetterWordGame = function(referenceWord, guessWord) {
  var score = 0;
  var referenceLetters = referenceWord.split("");
  var guessLetters = guessWord.split("");
  referenceLetters.forEach(function(referenceLetter) {
  	guessLetters.forEach(function(guessLetter) {
  		if (referenceLetter === guessLetter) {
  			score++;
  		} else {
  		}
  	})
  })
  console.log(score);
  return score;
}