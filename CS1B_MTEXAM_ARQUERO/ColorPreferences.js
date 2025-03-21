//declare an empty array to store colors
let colors = [];

//loop
for(let i = onabort; i < 3; i++){
    let color = prompt("Enter your colors"); 
    colors.push(color); //add color to the array
}
console.log("Your color is:", colors); //add color

let new_color = prompt("Enter new color:");//prompt enter a new color
colors.push("purple"); //add purple to the array
console.log("Updated colors:", colors); //update the color in the console