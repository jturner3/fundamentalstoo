// alert("Hey Hey Hey");
//console.log("Look at me..we work together on the same project!")
//Remember to save javascript and html

//Targeting by ID
var hobbiesList = document.getElementById("hobby-list");
console.log(hobbiesList)

//Targeting by class

var hobbies = document.getElementsByClassName("hobby");
console.log(hobbies[0].innerHTML);
console.log(hobbies[1].innerHTML);
console.log(hobbies[2].innerHTML);//an array


//Your examples

var favoriteGames = document.getElementById("favoriteGames");
console.log(favoriteGames);

//ToDo - MY WAY

var Music = document.getElementById("Music");
console.log(favorite.innerHTML);
console.log(best.innerHTML);
console.log(worst.innerHTML);


//Teacher Example
//Freebird targeted because favorite is linked with Travi$ Scott

function favoriteSong() {
	document.getElementById("favorite").innerHTML = "Freebird!";	
}
favoriteSong();

//TODO write two function that target id worst and id beset and 
//use innerHTML to change it

function favoriteSong(){
	document.getElementById("best").innerHTML = "Big Daddy Ye";
	document.getElementById("worst").innerHTML = "XO till we Overdose"
}
favoriteSong();

//Own Examples

function favoriteMovie(){
	document.getElementById("one").innerHTML = "The big Antz";
	document.getElementById("two").innerHTML = "Buggy Life";
	document.getElementById("three").innerHTML = "Big Boat Ship";
}
favoriteMovie();