//Declaration of the function

function helloWorld(){
	console.log("Hello World");
}

//Call
helloWorld();

//Create function to print and call name

function printName(){
	console.log("John Turner");
}

printName();

//Scope
//adding numbers

function addNumbers(){
	var x = 10;
	var y = 10;
	console.log(x + y);
}

addNumbers();

//multiplying numbers

function multiplyNumbers(){
	var x = 3;
	var y = 7;
	console.log(x + y);
}

multiplyNumbers();

///Parameters & Arguments
// You will need to build parameters when building some type of code
function randomNumber(x){
	console.log("The number you entered was: " + x);
}

randomNumber(7);

//Function

function bankPin(x){
	console.log(x + " is the correct number");
}

//Argument
//The value should match with the function variable 

//bankpin
function enterpin(xyz) {
	var pin = 131;

	if (pin != xyz) {
		console.log("Pin not accepted");
} 	else {
		console.log("Correct");
	}	
}
	enterpin(234)


//password with sting instead of integers
function enterpassword(pass) {
	var password = "bang";

	if (password != pass) {
		console.log("password not accepted");
}	else {
		console.log("You are Correct");
	}
}

	enterpassword("bang");

function numAdd(a,b){
	return a + b; 
}

console.log(numAdd(1,2));
console.log(numAdd("John ","Turner "));









