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
  return score;
}

$(document).ready(function() {
	var guessWords;
	var yourSecretWord;
	var yourGuessWord;
  $("form#secreting").submit(function(event) {
	yourSecretWord = $("input#secret-word").val();
  	// alert(yourSecretWord);
	$("form#secreting").hide();
	$("form#guessing").show();
	event.preventDefault();
  })
  $("form#guessing").submit(function() {
    yourGuessWord = $("input#guess-word").val();
	var yourScore = fiveLetterWordGame(yourSecretWord, yourGuessWord);
	$("#guesses").show();
	alert(yourScore);
	$(".current-guess").text(yourGuessWord.toUpperCase());
	$(".current-score").text(yourScore);
    $("ul#guessed-words").append("<li>" + yourGuessWord.toUpperCase() + " : " + yourScore + "</li>");
    $("input#guess-word").val("");
    if (yourGuessWord === yourSecretWord) {
      $("form#guessing").hide();
      $("#win-message").show();
      $(".current-secret-word").text(yourSecretWord);
    }
  event.preventDefault();
  })
})

// <li><span class="past-guesses"></span> : <span class="pastScores"></span></li>