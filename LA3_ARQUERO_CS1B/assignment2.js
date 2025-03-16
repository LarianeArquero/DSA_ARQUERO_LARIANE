let maxLimit = parseInt(prompt("Enter the Limit of the Double Loop:"));

// Validate if the input is a number and greater than zero
if (isNaN(maxLimit) || maxLimit <= 0) {
    console.log("Please enter a valid positive number.");
} else {
    console.log("Result:");

    // Outer loop
    for (let i = 0; i < maxLimit; i++) {
        // Inner loop
        for (let j = 0; j < maxLimit; j++) {
            console.log((i, j): Added value is (i + j));
        }
    }
}