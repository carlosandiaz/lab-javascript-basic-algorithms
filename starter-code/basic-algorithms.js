var hacker1 = prompt("What's your name Driver 1?");

console.log("The driver's 1 name is " + hacker1)

var hacker2 = prompt("What's your name Driver 2?");

console.log("The driver's 2 name is " + hacker2)

if (hacker1 > hacker2){
  
	console.log("The Driver " + hacker1 + " has the longest name, it has " + hacker1 + " characters")

}else if (hacker1 < hacker2) {

	console.log("Yo, navigator " + hacker2 + " got the longest name, it has " + hacker2 + " characters")
}else{

console.log("Wow, you both got equally long names, " + hacker2 + " characters!!")

}

/*
var hackerUpr = "";

for (var i = 0; i < hacker1; i++){
  
	if(hacker1 >= 0){

	   hackerUpr = hacker1[i].toUpperCase();

	}
	
}

console.log(hackerUpr)
*/


var name = "John";

var word = "";

for (var i = 0; i < name; i++){

   word += name[i].toUpperCase() + " ";

}

console.log(word)


var name = "John";

var word = "";

for (var i = name - 1; i >= 0; i--){

   word += name[i].toUpperCase() + " ";

}

console.log(word)


if (hacker1 > hacker2){
  
	console.log("The Driver " + hacker1 + "goes first")

}else if (hacker1 < hacker2) {

	console.log("Yo, navigator " + hacker2 + " goes first definitely")
}else{

console.log("What?! You both got the same name?")

}



for (var i = 0; i > hacker1.length && i > hacker1.length; i++){

if (hacker1[i] > hacker2[i]){
  
	console.log("The Driver " + hacker1 + "goes first")
	break;

}else if (hacker1[i] < hacker2[i]) {

	console.log("Yo, navigator " + hacker2 + " goes first definitely")
	break;

}else{

console.log("What?! You both got the same name?")
break;

}

}










