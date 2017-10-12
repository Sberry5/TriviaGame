//Document ready function to wrap all javascript
$(document).ready(function(){

//Global Variables
  var questions = [
    {
    question: "Who made the lyrics 'What you want, Baby, I got it' famous?",
    choices: {
      incorrectAnswer: "Diana Ross", 
      correctAnswer: "Aretha Franklin",
      incorrectAnswer: "Gladys Knight", 
      incorrectAnswer: "Tammi Terrell",
      },
  },
  {
    question: "Which of the following songs was sung by Marvin Gaye?",
    choices: {
      incorrectAnswer: "If I Were a Boy", 
      incorrectAnswer: "Tracks of My Tears", 
      incorrectAnswer: "Isn't She Lovely", 
      correctAnswer: "Heard It Through The Grapevine"
      },
  },
  {
    question: "Who of the following is the founder of Motown?",
    choices: {
      correctAnswer: "Berry Gordy", 
      incorrectAnswer: "Tracks of My Tears", 
      incorrectAnswer:"Phil Spector", 
      incorrectAnswer: "Heard It Through The Grapevine"
      },
  }
];


console.log(questions);

	var correct = 0;
	var incorrect = 0;
	var endGame = false;
	var triviaContent =[];

//Reset

//Function to create quiz divs
$("button").on("click", function(){
		$("button").hide();
		//Place all of the below in triviaContent
		//Grab questions object and loop over to create trivia content
		for (var i = 0; i < questions.length; i++){
		//Take question value and place in div on page
			var a
		/*Take choices value and place in individual divs
		with the input type radio */
		//Iterate until all questions/choices are printed to page
		$(triviaContent).show();
	};

//Function to track scoring
	function scoring (){
		//When user selects an answer store the index of the answer
		//
		//if user selects value if the correct index, i++ correct div
		//else if i++ incorrect div
        //if (userAnswer === correctAnswer) {
		//                    wins++;
	    //                    reset();
        //      {
        //      if (userAnswer !=  correctAnswer) {
        //                    losses++;
		//                    CALL FUNCTION TO INDICATE CORRECT ANSWER
        //                    reset();
        //if timer = 0 hide container and show score divs
        //    {
//	}

/*Function to show quiz is complete, show # of correct answers
# number of incorrect answers, # of unanswered questions*/
	function finalscore() {
		if ()
	}



//Function update screen with first question and possible answers

$("button").on("click", function(){
		$("button").hide();
		$("#questionOne").html(firstQuestion);

		for (var i = 0; i < firstChoices.length; i++){
		//Call timer function
		run();
          // Create button for each div-
          var a = $("<button>");
          // Adding input type=radio to each button
//          a.each("input type", "radio");
          // Adding a class of "answers" to each answer
          a.addClass("answers");
          // Providing the initial button text
          a.text(firstChoices[i]);
          // Adding the button to the buttons-view div
          $("#answers").append(a);
        }
      });

//Function to set timer, called within the starting function
 	var number = 120;
	    function run() {
      intervalId = setInterval(decrement, 1000);
      decrement();
    }

    // Function for timer
    function decrement() {
    	$("#timer").html(number);
      //  Decrease number by one.
      	number--;
      //  Show the number in the #timer id
      $("#timer").html("<h2>" + ("Seconds Remaining: " +number) + "</h2>");
      	//If countdwon reaches 0 
      	if (number === 0) {
    	//Call the stop function
        stop();
        //Call scoring function
//        scoring();
        //  Alert the user that time is up.
        alert("Time is Up! Let's see how you did...");
        //Call scoring function

    //Function to stop countdown
    function stop() {
    	$("#timer").hide();
    }


//Function to indicate correct answer
 
//Corresponding answers - use "input type="radio"
//to allow user to select option create on.click event
//when final question is answered show user score

//On.click event 
 
//Loop to check userAnswer against correctAnswer
 
//Conditionals





      }
    }

});