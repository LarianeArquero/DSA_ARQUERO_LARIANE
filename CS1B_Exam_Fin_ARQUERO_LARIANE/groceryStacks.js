// Create an empty array to hold grocery items
let groceryStack = [];

// Function to check if the stack is empty and return the current size
function peek() {
  if (groceryStack.length === 0) {
    console.log("The stack is empty.");
    return null;
  } else {
    console.log("Current top item:", groceryStack[groceryStack.length - 1]);
    return groceryStack[groceryStack.length - 1];
  }
}

// Function to add an item to the stack
function push(item) {
  groceryStack.push(item);
  console.log(Added "${item}" to the stack.);
  console.log("Current stack:", groceryStack);
  peek(); // Check the top item after pushing
}

// Function to remove the last added item from the stack
function pop() {
  if (groceryStack.length === 0) {
    console.log("Cannot pop from an empty stack.");
  } else {
    const removedItem = groceryStack.pop();
    console.log(Removed "${removedItem}" from the stack.);
    console.log("Current stack:", groceryStack);
    peek(); // Check the top item after popping
  }
}

// Prompt user to enter five grocery items
for (let i = 0; i < 5; i++) {
  const item = prompt("Enter a grocery item:");
  push(item);
}

// Example of popping an item from the stack
pop(); // You can call this function to remove the last item
