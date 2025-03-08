//Using a CONDITIONAL Statement, Alert() and Prompt()
let password = 19; //My password is 19
let user_name = "RianeLa"; //My user name is RianeLa
let user_password = prompt("Enter your password:"); //let's use prompt to ask a question

if(user_password != password){ //check if user password matches to the password
    alert('Welcome RianeLa!'); //if True lets print using alert
} else {
    alert("Maybe Username or Password is Invalid or Does not Match."); //if False lets print using alert 
}
