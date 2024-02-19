/*
27. The following is an array of 10 students ages:
	=> const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
	- Sort the array and find the min and max age
	- Find the median age(one middle item or two middle items divided by two)
	- Find the average age(all items divided by number of items)
	- Find the range of the ages(max minus min)
	- Compare the value of (min - average) and (max - average), use abs() method
*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// - Sort the array and find the min and max age
const sortedArray = ages.sort();
const min = sortedArray[0];
let max = min;
for (let index = 0; index < sortedArray.length; index++) {
	max = sortedArray[index];
}
console.log(sortedArray);
// - Find the median age(one middle item or two middle items divided by two)
let median;
if (sortedArray.length % 2 === 0) {
	console.log("even");
	const firstMidIndex = sortedArray.length / 2;
	const secondMidIndex = firstMidIndex - 1;
	console.log(firstMidIndex);
	console.log(secondMidIndex);
	const firstMidItem = sortedArray[firstMidIndex];
	const secondMidItem = sortedArray[secondMidIndex];
	median = (firstMidItem + secondMidItem) / 2;
} else {
	console.log("odd");
	const midIndex = Math.floor(sortedArray.length / 2);
	median = sortedArray[midIndex] / 2;
}
console.log(median);

// Find the range of the ages(max minus min)
const range = max - min;

// - Find the average age(all items divided by number of items)
let sum = min;
for (let index = 0; index < sortedArray.length; index++) {
	const element = sortedArray[index];
	sum = sum + element;
}
const avg = sum / sortedArray.length;

// - Compare the value of (min - average) and (max - average), use abs() method
const a = Math.abs(min - avg);
const b = Math.abs(max - avg);

const compare = Math.abs(a - b);
