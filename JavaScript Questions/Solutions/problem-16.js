// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.


let radius = prompt("Enter Radius");

let areaOfCircle = Math.PI * radius * radius;
let circumOfCircle = 2 * Math.PI * radius;

console.log(`
Area is ${areaOfCircle}
Circumference is ${circumOfCircle}
`)