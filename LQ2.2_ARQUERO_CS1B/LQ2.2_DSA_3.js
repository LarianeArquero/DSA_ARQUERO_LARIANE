//Name: LARIANE A. ARQUERO
//Activity No: LQ2.2_DSA
//Subject: DATA STRUCTURE AND ALGORITHM
//Laboratory Quiz DSA

//Using SWITCH (Condition Statement and prompt), alert(), and using prompt()
//let's console all items
console.log(`List of items:
                A. Pepsi Cola         Php 30.00
                B. Coca Cola          Php 35.00 
                C. Apple (per kg)     Php 100.00
                D. Orange (per kg)    Php 120.00
                E. Hotdogs (per kg)   Php 180.00
    `)

//let's prompt the user to enter their choice (A, B, C, D, or E) and convert it to uppercase
let item_choce = prompt("Item of choice:").toUpperCase();
let qty = paseInt(prompt("Qty to be Ordered:")); //string
let tot_price = 0; //let's initialize total price to zero

//let's use switch to determine the price based on the item choice
switch(item_choice){
case "A":
    //if the user select A (Pepsi Cola), lets set price to Php 30.00 per unit
    tot_price = qty * 30.00;
    alert(`The Total Price of the order ${item_choice} x ${qty}: ${tot_price}`);
    break;
case "B":
    //if the user select B (Coca Cola), lets set price to Php 35.00 per unit
    tot_price = qty * 35.00;
    alert(`The Total Price of the order ${item_choice} x ${qty}: ${tot_price}`);
    break;
case "C":
    //if the user select C (Apple), lets set price to Php 100.00 per kilo
    tot_price = qty * 100.00;
    alert(`The Total Price of the order ${item_choice} x ${qty}: ${tot_price}`);
    break;
case "D":
    //if the user select D (Orange), lets set price to Php 120.00 per kilo
    tot_price = qty * 120.00;
    alert(`The Total Price of the order ${item_choice} x ${qty}: ${tot_price}`);
    break;
case "E":
    //if the user select E (Hotdogs), lets set price to Php 180.00 per kilo
    tot_price = qty * 180.00;
    alert(`The Total Price of the order ${item_choice} x ${qty}: ${tot_price}`);
    break;
default:
    alert(`No matching Item! Try to re-run the program`);
}
