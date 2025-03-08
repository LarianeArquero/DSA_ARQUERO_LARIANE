//Using SWITCH (Condition Statement),alert(), and prompt()
let item_choice = prompt("Enter the letter of your item choice (A-E):");//you choice items name
let QTY = prompt("Enter quantity:"); //let's use prompt to ask the quality or question

let Tot_Price; //let a variable total price
let item_name; //let a variable item name

switch (item_choice) { //let's use switch to execution of different blocks of codes
    case "A":
        item_name = "Pepsi Cola";
        Tot_Price = QTY * 1.50; 
        break;
    case "B":
        item_name = "Coca Cola";
        Tot_Price = QTY * 1.75;
        break;
    case "C":
        item_name = "Apple";
        Tot_Price = QTY * 3.00;
        break;
    case "D":
        item_name = "Orange";
        Tot_Price = QTY * 2.50;
        break;
    case "E":
        item_name = "Hotdogs";
        Tot_Price = QTY * 4.00;
        break;
    default: //if the item is false lets defined default
        alert("No matching item! Try to re-run the program.");
        Tot_Price = null;
}

if(Tot_Price !== null){
    alert('The Total Price of the order ${item_name} x ${QTY}: &{Total_Price)}'); //lets print alert
}