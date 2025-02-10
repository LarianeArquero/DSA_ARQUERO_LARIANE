/*
Student Name: LARIANE A. ARQUERO
Class Instructor: CO Pascua
Year & Section: BSCS 1B
Class Subject: CC 104 DSA
Activity NO. Perf1
Class Schedule: MF-TTh
*/

// 1. Differentiation of let, const, and var in JavaScript.
let name = "Lariane"; { //let is you cannot declare it again within the same block.
    console.log(name)
}
const greetings = "Happy Birthday!Lariane."; { //const cannot be redeclared or changed
    console.log(greetings)
}
var age = 19; { //variable declaration, without block scope, unlike let an const.
    console.log(age) 
}

// 2. Discuss the concept of falsy values in JavaScript.
/*In JavaScript, every values has a Boolean equivalent. This means it can either be 
evaluatesd as true (truthy value) or false (falsy value) when used in a Boolean context.
A falsy value is something which evaluates to FALSE, for instance when checking a variable.
There are only six falsy values in JavaScript:undefined, null, NaN, O, "" (empty string), ans false of course.*/

//Examples of falsy
//EXAMPLE1
const num1 = null
if (num1) {
    console.log("num1 is not null");
} else {
    console.log("num1 is null");
}

//EXAMPLE2
let age;
if (age === undefined) {
    console.log("The age is undefined.")
}

//EXAMPLE3
let value1 = "Five"
let value2 = 5

let result = value1 / value2

if (isNaN(result)) {
    console.log("The results is not a number.")    
} else {
    console.log(result);
}




// Reference
/* Falsy Values in JavaScript.(December 14, 2019).https://www.freecodecamp.org/new/falsy-values-in-javascript/

What are Falsy Values in JavaScript? Explain with Examples.(January 30,2024).Benjamin Semah.
https://www.freecodecamp.org/news/what-are-falsey-values-in-javascript/

Null in JavaScript Example.(June 05, 2024).https://www.geeksforgeeks.org/null-in-javascript/

JavaScript let.(July 26,2024).https://www.geeksforgeeks.org/javascript-let/

JavaScript Constant.(October 29, 2024).https://www.geeksforgeeks.org/javascript-const/

JavaScript Var.(November 09, 2024).https://www.geeksforgeeks.org/javascript-var/ */

