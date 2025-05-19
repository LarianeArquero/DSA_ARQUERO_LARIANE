// Simple hash function: returns a unique number based on the current index
function generateHash(name, index) {
    return index + 1; // simple hash: just index+1
}

// Initialize the queue and hash table with default customers
let hashTable = {};
let queue = [];

let initialCustomers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Populate queue and hash table
initialCustomers.forEach((name, index) => {
    let hash = generateHash(name, index);
    queue.push(hash);
    hashTable[hash] = name;
});

// Display initial hash table
console.log("Initial Hashed Table:");
for (let num of queue) {
    console.log(`${num}. ${hashTable[num]}`);
}
console.log("\n");

// Loop until the user cancels
while (true) {
    let action = prompt("(FOR CUSTOMER SERVICE REPRESENTATIVE)\nEnter a new customer? or Service a customer? (enter/service)");

    if (action == null) break;
    action = action.toLowerCase().trim();

    // Handle customer entry
    if (action === "enter") {
        let newCustomer;

        while (true) {
            newCustomer = prompt("FOR CUSTOMER:\nEnter your name to join the queue:");
            if (newCustomer === null) break;
            if (newCustomer.trim() === "") {
                alert("Please enter a valid name.");
            } else {
                newCustomer = newCustomer.trim();
                break;
            }
        }

        if (newCustomer == null) continue;

        let newHash = queue.length > 0 ? Math.max(...queue) + 1 : 1;
        queue.push(newHash);
        hashTable[newHash] = newCustomer;

        alert(`Welcome, ${newCustomer}! Your queue number is ${newHash}.`);
        console.log(`\nUpdated Hashed Table after adding ${newCustomer}:`);
        for (let num of queue) {
            console.log(`${num}. ${hashTable[num]}`);
        }
        console.log("\n");

    // Handle servicing
    } else if (action === "service" && queue.length > 0) {
        let numberToService;

        while (true) {
            numberToService = prompt("Enter the queue number to service:\n(Press Cancel to exit.)");
            if (numberToService == null) break;

            numberToService = parseInt(numberToService);

            if (!queue.includes(numberToService)) {
                alert("Invalid number. Please enter a valid queue number.");
            } else {
                break;
            }
        }

        if (numberToService == null) continue;

        let servicedCustomer = hashTable[numberToService];
        alert(`Now servicing number ${numberToService}: ${servicedCustomer}`);

        // Remove from queue and hash table
        queue = queue.filter(num => num !== numberToService);
        delete hashTable[numberToService];

        console.log(`\nUpdated Hashed Table after servicing ${servicedCustomer}:`);
        for (let num of queue) {
            console.log(`${num}. ${hashTable[num]}`);
        }
        console.log("\n");

    } else if (queue.length === 0) {
        alert("No customers in queue. Please add a customer first.");
        continue;

    } else {
        alert('Invalid input! Please type "enter" or "service" only.');
        continue;
    }
}
