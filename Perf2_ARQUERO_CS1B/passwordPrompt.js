let correctPassword = "Lariane"; //hardcoded correct password
let wrongPassword = "19" //declare variable for user input

do {
    wrongPassword = prompt("Enter your password:"); //prompt user for input
    if (wrongPassword != correctPassword) { 
        console.log("Incorrect, try again."); //print Incorrect, try again
    }
} while (wrongPassword != correctPassword); //keep looping until the correct password is entered
console.log("Access granted."); //print Access granted