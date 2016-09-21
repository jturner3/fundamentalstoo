var bankAccount = 5000;
var purchase = 400;
var appleWatchGold = 10000;


if (bankAccount > purchase) {
	console.log("Go ahead and make it rain money");
} else if (bankAccount < appleWatchGold) {
	console.log ("Start selling plasma to get this.");
} else {
	console.log ("Get a job");
}

//ToDo create a personAge then use if / else if/ else to check
//if that person is eligible to vote
//Review this Sir

var personAge = 17;
var voteAge = 18;
var registedVote = false;

if (personAge >= voteAge) {
	console.log("You can vote Buddy!");
} else if ((personAge >= voteAge) && (registedVote === false)){
	console.log("Go register and vote.");
} else {
	console.log("Keep Aging!")
}


//Challenge create a var and assign it a value
//Next create an if, else if, else to evaluate if
//the number is divisable by 2 or 3 and console.log that it is

var num = 66
var divisable = true
var divisable3 = false

if (66/ 2){
	console.log("It's divisable by 2!");
} else if (66 / 3) {
	console.log("Divisable by 3");
} else {
	console.log ("idk whats going on lol")
}

//Correct Way
//Needed modulo key
//Experiment with changing the order of conditionals

var numberOne = 7;

if ((numberOne % 2 === 0) && (numberOne % 3 ===0)) {
	console.log("Number is divisable by 2 and 3");
} else if ((numberOne % 2 === 0)){
	console.log ("Number is divisable by 2");
} else if ((numberOne % 3 === 0)) {
	console.log("Number is divisable by 3");
} else {
	console.log("Number is not divisable by 2 or 3")
}

var sillytestgitvariable = "Hello";





