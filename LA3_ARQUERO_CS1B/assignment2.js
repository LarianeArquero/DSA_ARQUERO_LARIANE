/*Iteration Mapping with Double Loops*/
let maxLimit = prompt("Enter the Limit of the Double Loop:"); //prompt user for the maxLimit

for (let i = 0; i < maxLimit; i++) { //outer loop
  for (let j = 0; j < maxLimit; j++) { //inner loop
    let sum = i + j; //add
    console.log(`[${i}][${j}] Added value is ${sum}`); //added value
  }
}