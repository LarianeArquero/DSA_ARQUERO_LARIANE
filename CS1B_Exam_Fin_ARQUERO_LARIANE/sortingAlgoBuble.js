// Create an empty array 
let numbers = [];

// Prompt user to enter numbers and push 
for (let i = 0; i < 10; i++) {
  const num = parseInt(prompt("Enter a number (42, 25, 12, 63, 48, 10, 16, 5, 30, 78):"));
  numbers.push(num); // Add the entered number to the numbers array
}

// Function to implement the Bubble Sort Algorithm
function bubbleSort(arr) {
  const n = arr.length; // Get the length of the array
  let swapped; // Variable to track if a swap occurred

  // Outer loop for each pass through the array
  for (let i = 0; i < n - 1; i++) {
    swapped = false; // Reset swapped for this pass

    // Inner loop for comparing adjacent elements
    for (let j = 0; j < n - 1 - i; j++) {
      console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`); // Log the comparison
      if (arr[j] > arr[j + 1]) {
        // Swap if the element found is greater
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap elements
        swapped = true; // Mark that a swap occurred
        console.log(`Swapped ${arr[j + 1]} and ${arr[j]}`); // Log the swap
      }
    }

    // If no two elements were swapped, the array is sorted
    if (!swapped) {
      break; // Exit the loop 
    }
    console.log(`Array after pass ${i + 1}:`, arr); // Log the array state after each pass
  }
}

// Call the bubble sort
bubbleSort(numbers);

// Log the sorted array
console.log("Sorted Array:", numbers);
