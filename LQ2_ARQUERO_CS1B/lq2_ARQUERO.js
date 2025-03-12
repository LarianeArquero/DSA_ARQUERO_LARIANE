//LARIANE A. ARQUERO
//BSCS 1B

//III. CODING PROBLEM
let name = prompt("Enter your Name:"); //let store the user's of name
let address = prompt("Enter your Address:"); //let store the user's of address
let age = prompt("Enter your Age:"); //let store the user's of age
let classRole = prompt("Enter your Class Role (Officer, Student, Teacher):"); //let store the user's of classRole
let course = prompt("Enter your Course (BSCS, BSM, BAEL):"); //let store the user's of course

// let's check if they entered a course using a conditional statement
if (course === "BSCS" || course === "BSM" || course === "BAEL") {
    
    switch (classRole) {
        case "Officer":
            alert("I'm assigned to the Officer in " + course); //display an alert if thr user is an Office
            break;
        case "Student":
            alert("I'm a first year Student in " + course); //display an alert if the user is a Student
            break;
        case "Teacher":
            alert("I'm one of Teacher in " + course); //display an alert if the user is a Teacher
            break;
        default:
            alert("No specific class role detected, assuming 'Student'"); //display an alert if the user is invalid class role
            classRole = "Student"; //default class role
    }
    
    let iterations = 4; //print the user's name four times
    alert("Your name will be displayed " + iterations + " times in the console.");
    
    for (let i = 1; i <= iterations; i++) {
        console.log(i + " " + name);
    }
} else {
    alert("Invalid course entered. Please re-run the program and choose BSCS, BSM, or BAEL."); //display an alert if an invalid course is entered
}