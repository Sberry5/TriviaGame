//Document ready function to wrap all javascript
$(document).ready(function(){
	$("#gameQuestion").hide();
//Global Variables
	var question1 = {
    question: "Who made the lyrics 'What you want, Baby, I got it' famous?",
    choices: ["Diana Ross", "Aretha Franklin", "Gladys Knight", "Tammi Terrell"],
    correctAnswer: 1
	};
	
	var question2 = {
    question: "Which of the following songs was sung by Marvin Gaye&#63",
    choices: ["If I Were a Boy", "Tracks of My Tears", "Isn't She Lovely", "Heard It Through The Grapevine"],
    correctAnswer: 3
	};

	var question3 = {
    question: "Who of the following is the founder of Motown&#63",
    choices: ["Berry Gordy", "Tracks of My Tears", "Phil Spector", "Heard It Through The Grapevine"],
    correctAnswer: 0
	};


console.log(question1.question);
console.log(question1.choices);

	var firstQuestion = (question1.question);
	var firstChoices = (question1.choices);
	var firstAnswer = (question1.correctAnswer);

console.log(firstQuestion);
console.log(firstChoices);
console.log(firstAnswer);

	var wins = 0;
	var losses = 0;
	var endGame = false;
	var quizContent =[];

//Reset

//Function update screen with first question and possible answers

$("button").on("click", function(){
		$("button").hide();
		$("#gameQuestion").html(firstQuestion);
		$("#gameQuestion").show();
		for (var i = 0; i < firstChoices.length; i++){
		//Call timer function
		run();
          // Create button for each div-
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<input>");
          // Adding input type=radio to each button
          a.attr("type", "radio");
          // Adding a class of "answers" to each answer
          a.addClass("answers");
          // Adding a data-attribute
          a.attr("data-name", firstChoices[i]);
          // Providing the initial button text
          a.text(firstChoices[i]);
          // Adding the button to the buttons-view div
          $("#answers").append(a);
        }
      });

//Function to set timer, called within the starting function above
 	var number = 100;
	    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    // Function to countdown
    function decrement() {
    	$("#timer").html(number);
      //  Decrease number by one.
      	number--;
      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>" + number + "</h2>");
      	//If countdwon reaches 0 
      	if (number === 0) {
    	//Call the stop function
        stop();
        //  Alert the user that time is up.
        alert("Time Up!");
    	}
        //Call score function
    function stop() {
	    clearInterval(intervalId);
    	};
	};


//Function to indicate correct answer
	// function () {

	// }
 
//Corresponding answers - use "input type="radio"
//to allow user to select option create on.click event
//when final question is answered show user score

//On.click event 
 
//Loop to check userAnswer against correctAnswer
 
//Conditionals
//            if (userAnswer === firstAnswer) {
//                            wins++;
//                            reset();
//            {
//            if (userAnswer !=  correctAnswer) {
//                            losses++;
//                            CALL FUNCTION TO INDICATE CORRECT ANSWER
//                            reset();
//            {
//Use setInterval method to timeout if user does not guess and call
//the function to update the question and possible answers
//Function to show quiz is complete, show # of correct answers
//# number of incorrect answers, # of unanswered questions


//Reset
	// function reset(){
	// 	question: [];
	// 	choices: "";

	// }

});
