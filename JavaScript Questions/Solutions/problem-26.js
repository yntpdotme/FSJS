let countries = ["India", "USA", "China", "Brazil"];

// Check if 'Ethiopia' exists in the array
if (countries.includes("Ethiopia")) {
	console.log("ETHIOPIA");
} else {
	// Add 'Ethiopia' to the countries list if it doesn't exist
	countries.push("Ethiopia");
	console.log("Ethiopia added to the countries list");
}

// Updated countries array
console.log("Updated Countries List:", countries);
