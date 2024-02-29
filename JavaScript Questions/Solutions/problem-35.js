// 35. Write a functions which checks if all items are unique in the array.

let arr = [22, 32, 43, "Alok", "verma", 43, false, 8.9.toExponential, true];
let uniqueArray = [];
let notUniqueArray = [];
arr.forEach((num) => {
    if (arr.indexOf(num) === arr.lastIndexOf(num)) {
        uniqueArray.push(num);
    } else {
        notUniqueArray.push(num);
    }
})
console.log(uniqueArray);
console.log(notUniqueArray);