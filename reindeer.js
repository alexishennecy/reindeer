
// goal is to loop through all the reindeer in the array, and add the name of the reindeer to the single HTML <div> element provided. The name of the reindeer should be prepended with the corresponding color from the other array. meaning combine the colors with the reindeer names as the output.



var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

// colors[3] = purple

var hohohoElement = document.getElementById("reindeer");


// this for loop is looping through colors and looping through reindeer and add them together then outputting that result to the variable "string"

//the string variable is holding the values at each iteration, this is a placeholder
var string = ""; 
for (var i = 0; i < reindeer.length; i++){  //the reindeer array is used because there are more items in the colors array and not enough in the reindeer array to combine them in order to have an even amount of each to match up   
     string += colors[i] + " " + reindeer[i] + "</br>"; //the += is used to hold the value of each combination at each index and each incrementation
}

//the variable hohoho is the location in the html where the string value is being placed
hohohoElement.innerHTML = string;




// goal is to loop through all the reindeer in the array, and add the name of the reindeer to the single HTML <div> element provided. The name of the reindeer should be prepended with the corresponding color from the other array. meaning combine the colors with the reindeer names as the output.



var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];



var hohohoElement = document.getElementById("reindeer");
