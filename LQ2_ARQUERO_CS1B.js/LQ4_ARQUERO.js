// Using a Conditonal and/or LOOP Statement, console, and prompt()
let createMatrix = prompt("Do you want to create a matrix?"); //let's use prompt to ask question or you ask question
if (createMatrix) { //lets create matrix
    let limit1 = prompt("Enter first loop limit):"); //first loop limit
    let limit2 = prompt("Enter second loop limit):"); //second loop limit
    let limit3 = prompt("Enter third loop limit):"); //third loop limit

    let string1 = prompt("Enter first string (word, char, number, symbol):"); //first string
    let string2 = prompt("Enter second string (word, char, number, symbol):"); //second string
    let string3 = prompt("Enter third string (word, char, number, symbol):"); //third string
    
    //if False lets use max tree times limit
    for (let i = 0; i < limit1; i++) {
        for (let j = 0; j < limit2; j++) {
            for (let k = 0; k < limit3; k++) {
                console.log(i,j,k);
        }
    }
}
    //if False lets use max tree times string
    for (let i = 0; i < string1; i++) {
        for (let j = 0; j < string2; j++) {
            for (let k = 0; k < string3; k++) {
                console.log(i,j,k);
        }
    }
}

}else{
    console.log("Thank you, re-run the program if you change your mind.");//if False the program lets print
}

