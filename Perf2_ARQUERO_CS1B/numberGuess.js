let correctNumber = "8"; // declared a number between 1 and 10
let userGuess = prompt("Guess a number between 1 and 10:") //prompt user for input

while (userGuess != correctNumber) {
    userGuess = prompt("Guess a number between 1 and 10:"); //prompt user for input

    if (userGuess > correctNumber) { 
        console.log("Too high!"); //Too high
    } else if (userGuess < correctNumber) {
        console.log("Too low!"); //Too low
    } else if (userGuess != correctNumber) {
        console.log("Correct!"); //Correct
    } else {
        console.log("Invalid input. Please enter a number between 1 and 10.");
    }
}