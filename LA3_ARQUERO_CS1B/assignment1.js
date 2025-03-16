/*If Else if with Conditional Ternary Operators*/
let grades = prompt("Enter your grade:"); //prompt user for the grades 
grades = parseInt(grades); 

let equivalentGrade = 
    (grades >= 97) //greater than or equal 97 
    ? "Your equivalent Grade is 1.00 Excellent."
    : (grades >= 94) //greater than or equal 94  
    ? "Your equivalent Grade is 1.25 Excellent."
    : (grades >= 91) //greater than or equal 91
    ? "Your equivalent Grade is 1.50 Above Average."
    : (grades >= 88) //greater than or equal 88
    ? "Your equivalent Grade is 1.75 Above Average."
    : (grades >= 85) //greater than or equal 85 
    ? "Your equivalent Grade is 2.00 Average."
    : (grades >= 82) //greater than or equal 82
    ? "Your equivalent Grade is 2.25 Average."
    : (grades >= 79) //greater than or equal 79
    ? "Your equivalent Grade is 2.50 Below Average."
    : (grades >= 76) //greater than or equal 76 
    ? "Your equivalent Grade is 2.75 Below Average."
    : (grades === 75) //greater than or equal 75
    ? "Your equivalent Grade is 3.00 Below Average."
    : (grades >= 72) //greater than or equal 72 
    ? "Your equivalent Grade is 4.00 Poor."
    : "Your equivalent Grade is 5.00 Failed."; 

console.log(equivalentGrade);
alert(equivalentGrade); 

let remarks;
if (grades >= 90) { //if your grade is greater than or equal to 90
    remarks = "HIGH PASS, Candidate for Cum Laude"; //print: HIGH PASS, Candidate for Cum Laude
} else if (grades >= 80) { //if your grade is greater than or equal to 80
    remarks = "AVERAGE PASS"; //print: AVERAGE PASS
} else if (grades >= 75) { //if your grade is greater than or equal to 75
    remarks = "LOW PASS"; //print: LOW PASS
} else { //if your grade is below to 75
    remarks = "FAILED, Needs Improvement"; //print: Failed, Needs Improvement
}

console.log("Result:");
console.log(`Your equivalent Grade is ${grades}`); 
console.log(`Final Remarks: ${remarks}`); 