$(document).ready(function() {

    var magic8Ball = {};
    magic8Ball.listOfAnswers =["Naw", "Yea", "I don't think so...", "Fasho", "Nope", "In your dreams.","Don't count on it","Ask again later", "Most likely", "Better not tell you now", "Let it go","negative","postive","nah"];
  
    $("#answer").hide();
  
    magic8Ball.askQuestion = function(question) {
      $("#8ball").effect("shake");
  
      $("#8ball").attr("src", "img/blank8ball.jpg");
  
      $("#answer").fadeIn(5000);
  
      let randomNumber = Math.random();
  
      let randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
  
      let randomIndex = Math.floor(randomNumberForListOfAnswers);
  
      let answer = this.listOfAnswers[randomIndex];
  
      $("#answer").text(answer);
  
      //console.log(question);
      //console.log(answer);
    };
  
    var onClick = function() {
  
      $("#answer").hide();
  
      $("#8ball").attr("src", "img/8ball.jpg");
  
  
      setTimeout(function(){
        var question = prompt("ASK A YES/NO QUESTION!");
        magic8Ball.askQuestion(question);
      }, 500);
  
  
    };
  
    $("#answerButton").click(onClick);
  
  });
  