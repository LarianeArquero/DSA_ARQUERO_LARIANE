// Prompt the user to enter the first word RACECAR
const word1 = prompt("Enter the first word (RACECAR):");

// Prompt the user to enter the second word RECORDER
const word2 = prompt("Enter the second word (RECORDER):");

// Function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Reverse both words
const reversedWord1 = reverseString(word1);
const reversedWord2 = reverseString(word2);

// Log the original words
console.log("Original word 1: ", word1);
console.log("Original word 2: ", word2);

// Log the reversed words
console.log("Reversed word 1: ", reversedWord1);
console.log("Reversed word 2: ", reversedWord2);

// Check and log if the words are palindromes (true if original equals reversed)
console.log("Is the first word a palindrome? ", word1 === reversedWord1);
console.log("Is the second word a palindrome? ", word2 === reversedWord2);