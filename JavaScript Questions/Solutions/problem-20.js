// 20. Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

const MARKS = 59;

// TERBARY OPERATOR

// Checking the edge case
MARKS < 0 || MARKS > 100
	? console.log("Incorrct Marks")
	: MARKS >= 80 && MARKS <= 100
	? console.log("Grade is A")
	: MARKS >= 70 && MARKS <= 79
	? console.log("Grade is B")
	: MARKS >= 60 && MARKS <= 69
	? console.log("Grade is C")
	: MARKS >= 50 && MARKS <= 59
	? console.log("Grade is D")
	: console.log("FAIL");

// IF ELSE

if (MARKS < 0 || MARKS > 100) {
	console.log("Incorrct Marks");
} else if (MARKS >= 80 && MARKS <= 100) {
	console.log("Grade is A");
} else if (MARKS >= 70 && MARKS <= 79) {
	console.log("Grade is B");
} else if (MARKS >= 60 && MARKS <= 69) {
	console.log("Grade is C");
} else if (MARKS >= 50 && MARKS <= 59) {
	console.log("Grade is D");
} else {
	console.log("FAIL");
}
