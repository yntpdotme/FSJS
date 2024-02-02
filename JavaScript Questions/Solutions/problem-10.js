// 10. Boolean value is either true or false.
// - Write three JavaScript statement which provide truthy value.
// - Write three JavaScript statement which provide falsy value.

// Truthy values
let a = 1;
let b = [1, 2, 3];
let c = "Akash";

console.log(`
a is ${a == true}
b is ${b == true}
c is ${c == true}
`);

// Falsy Values: only 7 falsy values i JS.
let d = 0;
let e = "";
let f;
let g = NaN;
let h = null;
let i = 0n;

console.log(`
d is ${d == true}
e is ${e == true}
g is ${g == true}
h is ${h == true}
i is ${i == true}
`);
