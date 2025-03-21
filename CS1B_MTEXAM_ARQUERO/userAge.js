let age_grooup = prompt("Enter you age group:");
if (age_group < 5) {
    console.log("You are a Toddler."); //print: You are a Toddler.
    
}else if (age_group >= 5 && age_group <= 12) {
        console.log("You are a child."); //print: You are a child,
}else if (age_group >= 13 && age_group <=19) {
    console.log("You are a Teenager."); //print: You are a Teenager.
}else if (age_group >= 20 && age_group <= 60) 
    console.log("You are Young Adult."); //print: You are Young Adult.
}else if(age_group >= 36 && age_group <= 60)
    console.log("You are Middle-Aged."); //print: You are Middle-Aged.
}else if(age_group > 60){
    console.log("You are Senior."); //print: You are a Senior.
}else {
    console.log("Invalid age."); //print: Invalid age.
   