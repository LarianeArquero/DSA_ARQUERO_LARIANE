// Prompt user for input
let namesInput = prompt("Enter names (Genevieve, Juan, Luna, Gabriel, Elise):");
let agesInput = prompt("Enter ages (24, 65, 21, 5, 9):");

// Convert input strings to arrays
let names = namesInput.split(',');
let ages = agesInput.split(',').map(Number);

// Restructure the multi-dimensional array
let restructuredArray = names.map((name, index) => [name.trim(), ages[index]]);

// Log the restructured multidimensional array
restructuredArray.forEach(item => {
    console.log("Name and Age:", item);
});