//Name: LARIANE A. ARQUERO
//Activity No: LQ2.2_DSA
//Subject: DATA STRUCTURE AND ALGORITHM
//Laboratory Quiz DSA

//Using a CONDITIONAL Statement, Alert() and Prompt()
//let's prompt the user to enter a user name
let user_name = prompt("Username:");
//let's prompt the user to enter user password
let user_password = prompt("Password:")
let password = "password123"; //this is the correct password

//let's check if the user_password matches to the password
if(user_password === password){
    //if the password is correct, it will display a welcome message with the user name
    alert(`Welcome ${user_name}`); //if TRUE
}else{
    //if the password is does not match, it will display an error
    alert(`Maybe Username or Password is Invalid or Does not Match.`); //if FALSE
}
