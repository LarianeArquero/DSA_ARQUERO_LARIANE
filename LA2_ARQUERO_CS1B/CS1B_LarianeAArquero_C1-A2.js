/*NAME:LARIANE A. ARQUERO
SUBJECT: DATA STRUCTURES AND ALGORITHM
COURSE AND YEAR: BACHELOR OF SCIENCE IN COMPUTER SCIENCE
INSTRUCTOR: CO Pascua
ACTIVITY No. LA2_ARQUERO_CS1B
assignment2.js*/

//initialize the 4 variables and 1 constant
let a = '25'; //this is integer 
let b = '20'; //this is integer
let c = '12'; //this is integer
let d = "15"; //this is string because it is enclosed in double quotation mark.
const e = '15'; //this is constant

let sum = a + b + c + (d) + e;
console.log(sum)

// compare the variables of d and e
console.log(d > e)//It's d is greater than e
console.log(d < e)//It's d is lesser than e
console.log(d >= e)//It's d is greater than or equal to e
console.log(d <= e)//It's d is lesser than or equal to e
console.log(d === e)//It's d is strict equality to e

//subtract all the variables that we declared
let subraction = a - c - (d) - e;
console.log(subraction)

//multiply the values of variable a and c then divide to constant e
let multiplyAndDivide = (a * c) /e;
console.log(multiplyAndDivide)

//display the exponent value of constant e
let exponent = e**c;
console.log(exponent)

//reassign the value of c to constant e
c = e;
console.log(c)