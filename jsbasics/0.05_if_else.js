var elevatorUp = true; //Read in blocks of code, if ___ is true the if function will run,
						// if ___ false the else function will run
var elevatorBroken = false;
var elevatorDown = true;
var elevatorStop = true;

if (elevatorUp === true){
	console.log("Going Up.");
} else {
	console.log("You aren't going anywher young sir");
}


//Develop cases where you could use && or ||
if (elevatorUp === true && elevatorBroken === false){
	console.log("Elevator is in moving state, please wait");
}else{
	console.log("Elevator is broken")
}

if(elevatorDown || elevatorUp){
	console.log ("Please keep your legs and arms inside.");
}else{
	console.log("You do the same thing!")
}







