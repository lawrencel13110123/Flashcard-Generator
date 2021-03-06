var basicCard = require('./basic-card');
var questions = require('./basic-question.json');
var inquirer = require('inquirer');
var questionsList = []; 
var correct = 0;
var incorrect = 0; 
var number = 0; 


for (var i = 0 ; i < questions.length ; i++) { 
	var cards = new basicCard(questions[i].front, questions[i].back)
	console.log(cards)
	questionsList.push(cards)
	console.log(questionsList)
}


function addQuestions () {
	inquirer.prompt([
		{
			type: "list",
			name: "add",
			message: "Do you want to add your own questions?",
			choices: ["YES", "NO"]
		}
	]).then(function(response) {
		if (response.add === "YES") {
			inquirer.prompt([
				{
					type: "input",
					name: "newQuestion",
					message: "Type your new question here!",
					// validate: function(value) {
					// 	if (value === "") {
					// 		console.log("please enter a question")
					// 		return
					// 	}
					// }
				},
				{
					type: "input",
					name: "newAnswer",
					message: "Type the answer to your question here!",
					// validate: function(value) {
					// 	if (value === "") {
					// 		console.log("please enter a question")
					// 		return
					// 	}
					// }
				}
			]).then(function(response) {
				var newCards = new basicCard(response.newQuestion, response.newAnswer.toLowerCase())
				questionsList.push(newCards)
				console.log(questionsList)
				// fs.writeFile("basic-question.json", questionsList, function(err) {
				// 	if (err) {
				// 		console.log(err)
				// 	}
				// 		console.log("questions updated")
						inquiry()
				// })


			});
		}
		else {
			console.log("ok no problem!")
			inquiry()
		}
	}); 
}


function replay () {
	inquirer.prompt([
		{
			type: "list",
			name: "replay",
			message: "Do you want to try again?",
			choices: ["YES", "NO"]
		}
	]).then(function(response) {
		if (response.replay === "YES") {
			console.log("Let's Try Again")
			correct = 0 
			incorrect = 0
			number = 0
			addQuestions()
			// inquiry()
		}
		else {
			console.log("See you next time!") 
			return
		}
	
	}); 
}; 


function inquiry () {

	if (number < questionsList.length) {

		inquirer.prompt([
			{
				type: "input",
				name: "question",
				message: questionsList[number].front
			}
		]).then(function(answer) {
			if (answer.question.toLowerCase() === questionsList[number].back) {
				console.log("You're Right! The correct answer is " + questionsList[number].back.toUpperCase())
				correct ++ 
				number ++
				inquiry()
			}
			else {
				console.log("You're Wrong! The correct answer is " + questionsList[number].back.toUpperCase())
				incorrect ++ 
				number ++
				inquiry()
			}
		
		}); 
	}
	else {
		console.log("Incorrect: " + incorrect)
		console.log("Correct: " + correct)
		console.log("No More Questions")
		replay()
		
	}
}

inquiry() 