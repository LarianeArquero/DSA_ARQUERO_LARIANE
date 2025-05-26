// Prompt user for input
let numbersInput = prompt("Enter numbers (24, 65, 21, 5, 9, 32, 42, 80, 57):");
let namesInput = prompt("Enter names (Zenvo, Erica, Jordie, Alicia, Redon):");

// Convert input strings to arrays
let numbers = numbersInput.split(',').map(Number);
let names = namesInput.split(',').map(name => name.trim()); // Trim whitespace

// Merge both arrays
let mergedArray = numbers.concat(names);
console.log("Merged Array:", mergedArray);

// Sort numbers in reverse order
let sortedNumbers = numbers((a, b) => b - a);
console.log(sortedNumbers.sort);

// Sort names alphabetically
let sortedNames = names();
console.log(sortedNames.sort);
