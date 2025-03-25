//Name: Lariane A. Arquero
//Course and Year: BSCS 1B
//Subject: Data Structure and Algorithms
//Activity No: Perf3

//Use concat()
let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let addArray = arr1.concat(arr2); //concat the arr1 and arr2
console.log("After concat", addArray); //print

//Use push()
//index          0          1        2         3           
let fruits = ["Banana", "Orange", "Mango", "Grapes"];
fruits.push("Kiwi"); //add an element "Kiwi" to the array
console.log("After push", fruits); //print

//Use unshift()
//index       0  1  2
let array1 = [1, 2, 3];
array1.unshift(4, 5); //add two numbers 4 and 5 to the beginning of the array
console.log("After unshift", array1); //print

//Use pop()
fruits.pop(); //remove the last element from the fruits array
console.log("After pop", fruits); //print

//Use shift()
//index       0  1  2
let array2 = [1, 2, 3];
array2.shift(); //remove the first element from the array1
console.log("After shift", array2); //print

//Use sort()
fruits.sort(); //sort the fruits array alphabetically
console.log("After sort", fruits); //print

//Use slice()
let sliceFruits = fruits.slice(1, 3); //extract elements from index 1 to 2
console.log("After slice", sliceFruits); //print

//Use splice()
//insert and remove elements in the months array
//index            0          1          2      3       4       5        6          7           8          9          10
let months = ["January", "February", "March", "May", "June", "July", "August", "September", "October", "November", "December"];
months.splice(3, 0, "April"); //insert April at index 3
months.splice(10, 1); //remove November at index 10
console.log("After splice", months); //print