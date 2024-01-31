// 8. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.

let sentence = 'You cannot end a sentence with because because because is a conjunction';
// search gives first occurance.
let textPositionFirst = sentence.search("because");
console.log(textPositionFirst);

// lastINdexOf gives last occurance.
let textPositionLast = sentence.lastIndexOf("because");
console.log(textPositionLast);