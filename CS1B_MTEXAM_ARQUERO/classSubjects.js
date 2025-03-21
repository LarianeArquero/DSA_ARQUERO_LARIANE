//let's prompt the user for their class information

//let's ask the user to enter the my subject title
let subjectTitle = prompt("Enter your subject title:");
//let's ask the user to enter my class schedule
let classSchedule = prompt("Enter your class schedule (Time, Days):");
//let's ask the user to enter my classroom number
let classroom = prompt("Enter your classroom number:");
//let's ask the user to enter my class instructor
let classInstructor = prompt("Enter the class instructor name:");
//let's ask the user to enter my student name
let studentName = prompt("Enter your name:");

//display the collected information
console.log(`${studentName} is currently enrolled in ${subjectTitle}
    with a class schedule of ${classSchedule} at room ${classroom}.
    The instructor for the subject is ${classInstructor}`);