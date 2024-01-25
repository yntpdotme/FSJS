// 2. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.

const fName = "Akash";
const lName = "Kadlag";
const isMarried = true;
const country = "India";
let age = 23;
let mStatus;
if (isMarried) {
    mStatus = "unmaried";
} else {
    mStatus = "married";
}

console.log(`
My name is ${fName} ${lName}. I live in country ${country}. I am ${age} years old and I am ${mStatus}.
`);
