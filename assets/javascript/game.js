//Document ready function to wrap all javascript
$(document).ready(function(){
	$("#gameQuestion").hide();
//Global Variables
	var questions = [
	// var question1 = {
    {
    question: "Who made the lyrics 'What you want, Baby, I got it' famous?",
    choices: {
    	1: "Diana Ross", 
    	2: "Aretha Franklin",
    	3: "Gladys Knight", 
    	4: "Tammi Terrell",
    	},
    	correctAnswer: "2"
	},
	
	// var question2 = {
	{
    question: "Which of the following songs was sung by Marvin Gaye&#63",
    choices: {
    	1: "If I Were a Boy", 
    	2: "Tracks of My Tears", 
    	3: "Isn't She Lovely", 
    	4: "Heard It Through The Grapevine"
    	},
    	correctAnswer: "4"
	},

	// var question3 = {
	{
    question: "Who of the following is the founder of Motown&#63",
    choices: {
    	1: "Berry Gordy", 
    	2: "Tracks of My Tears", 
    	3:"Phil Spector", 
    	4: "Heard It Through The Grapevine"
    	},
    	correctAnswer: "1"
	}
];

console.log(questions.question);
console.log(questions.choices);


	var wins = 0;
	var losses = 0;
	var endGame = false;
	var answers = [];

//Reset

//Function update screen with first question and possible answers

$("button").on("click", function(){
		$("button").hide();
		//Variable to hold the quiz content
		var quiz = [];
		for (var i = 0; i < questions.question; i++) {
			questions
		}
        });
      });

//Function to set timer, called within the starting function above
 	var number = 120;
	    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    // Function to countdown
    function decrement() {
    	$("#timer").html(number);
      //  Decrease number by one.
      	number--;
      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>" + "Seconds left:" number + "</h2>");
      	//If countdwon reaches 0 
      	if (number === 0) {
    	//Call the stop function
        stop();
        //  Alert the user that time is up.
        alert("Time Up! Let's see how you did...");
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
