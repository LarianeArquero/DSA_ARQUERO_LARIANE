// let's declare my favorite number
let favoriteNumber = 25; //let's declare a variable with a favorite number which is 25.

//let use while loop to prompt the user for guesses
let guess = null; //initialize the guess variable with null
while (guess !== favoriteNumber){ //loop
    guess = parseInt(prompt("Guess my favorite number")); 
    
    if (guess === favoriteNumber){
        console.log("Correct! You guessed it!"); //if the guess is correct, it will  print the message.
    } else if (guess < favoriteNumber){
        console.log("Too low. Try again."); //if the guess is too low, it will  print the message.
    }else{
        console.log("Too high. Try again."); //if the guess is too high, it will  print the message.
    }
}