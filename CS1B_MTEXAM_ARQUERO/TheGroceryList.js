//propmt user to create a grocery list
let createList = prompt("Do you want to create a grocerry list?(y/n)").toLowerCase();

if(createList === "y"){
    //let ask for the number of items
    let itemCount = parselnt(prompt("Enter the number of items to be added to the grocery list:"));

    //initialize an empty array for the grocery list
    let groceryList = [];

    //collect grocery items from user
    for(let i = 0; i < itemCount; i++){
        let item = prompt(`Enter item ${i + 1}:`)
        groceryList.push(item)
    }

    //sorted and reverse 
    let groceryList_Sort = [groceryList].sort();
    let groceryList_Reverse = [groceryList].reverse();

    //display the results
    alert(`Original List: ${groceryList.join(", ")}\nSortedd List: 
        ${groceryLis_Sort.join(", ")}\nReversed List: ${groceryList_Reverse()};}`)

    //log results
    console.log("Original List:", groceryList);
    console.log("Sorted List:", groceryList_Sort);
    console.log("Reversed List:", groceryList_Reverse);  
}else {
    alert("Grocery list creation cancelled.");
}