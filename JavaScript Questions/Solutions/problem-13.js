// 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let b = prompt("Enter base");
let h = prompt("Enter height");
console.log(`base is ${b}`);
console.log(`height is ${h}`);

let area = 0.5 * b * h;
console.log(`area is ${area}`);

// Works in browser console not in NODE environment. 