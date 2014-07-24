var fiveLetterWordGame = function(secretWord, guessWord) {
  var score = 0;
  secretWord.split("").forEach(function(secretLetter) {
  	guessWord.split("").forEach(function(guessLetter) {
  		if (secretLetter === guessLetter) {
  			score++;
  		} else {
  		}
  	})
  })
  console.log(score);
  return score;
}

$(document).ready(function() {
	