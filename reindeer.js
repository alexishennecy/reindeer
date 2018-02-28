// goal is to loop through all the reindeer in the array, and add the name of the reindeer to the single HTML <div> element provided. The name of the reindeer should be prepended with the corresponding color from the other array. meaning combine the colors with the reindeer names as the output.



var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];



var hohohoElement = document.getElementById("reindeer");

for (var i = 0; i < reindeer.length; i += 1){  
    hohohoElement.innerHTML += colors[i] + " " + reindeer[i] + "</br>";   
};
console.log(colors[2]);
    
    


//the reindeer array is used because there are more items in the colors array and not enough in the reindeer array to combine them in order to have an even amount of each to match up   
// this for loop is looping through colors and looping through reindeer and add them together 
//the += is used to hold the value of each combination at each index and each incrementation


