//Document ready function to wrap all javascript
$(document).ready(function(){
	$(gameQuestion).hide();

//Global Variables
	var questions = {
    question: "Who made the lyrics 'What you want, Baby, I got it' famous?",
    choices: ["Diana Ross", "Aretha Franklin", "Gladys Knight", "Tammi Terrell"],
    correctAnswer: 1
	};
	
	// var question2 = 
	{
    question: "Which of the following songs was sung by Marvin Gaye?",
    choices: ["If I Were a Boy", "Tracks of My Tears", "Isn't She Lovely", "Heard It Through The Grapevine"],
    correctAnswer: 3
	};

	// var question3 = 
	{
    question: "Who of the following is the founder of Motown?",
    choices: ["Berry Gordy", "Tracks of My Tears", "Phil Spector", "Heard It Through The Grapevine"],
    correctAnswer: 0
	};

console.log(question1.question);
console.log(question1.choices);

	var wins = 0;
	var losses = 0;
	var endGame = false;
	var quizContent =[];

//Reset

//Function to show first question and possible answers
// when the start button is pressed
$("button").click(function(){
	$("button").hide();
	$(gameQuestion).show();
	$("#gameQuestion").text(question1.question);
	
	for (var i = 0; i < question1.choices.length; i++){
		answers=question1.choices[i];
		$("answers").map(question1.choices[i]);
		};
	});

//Function to .push questions to HTML element, way to hide questions 
//and push questions in order
// $("div.question").append(".questions.question");
// console.log(question);
 
//Function to set timer, within the function above?
 
//Function to indicate correct answer
 
//Corresponding answers - use "input type="radio"
//to allow user to select option create on.click event
//when final question is answered show user score

//On.click event 
 
//Loop to check userAnswer against correctAnswer
 
//Conditionals
//            if (userAnswer === correctAnswer) {
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

});