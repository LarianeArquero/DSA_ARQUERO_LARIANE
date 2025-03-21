let DSA = [];
let WebDev = [];

function selectSubject() {
    while (true) {
        let subjectChoice = prompt("Select a subject:\n(A) DSA\n(B) WebDev\n(C) Exit").toUpperCase();

        if (subjectChoice === "A") {
            handleOperations("DSA", DSA);
        } else if (subjectChoice === "B") {
            handleOperations("WebDev", WebDev);
        } else if (subjectChoice === "C") {
            displayEnrolledStudents();
            break;
        } else {
            alert("Invalid choice. Please select A, B, or C.");
        }
    }
}
