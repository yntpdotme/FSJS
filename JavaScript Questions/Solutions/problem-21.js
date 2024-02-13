// 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// - September, October or November, the season is Autumn.
// - December, January or February, the season is Winter.
// - March, April or May, the season is Spring
// - June, July or August, the season is Summer

// Using Date() API of Javascript to get current month in string (i.e. September) format.
let Month = new Date().toLocaleString("en-US", { month: "long" });
let season;
if (Month === "September" || Month === "October" || Month === "November") {
	season = "Autumn";
} else if (
	Month === "December" ||
	Month === "January" ||
	Month === "February"
) {
	season = "Winter";
} else if (Month === "March" || Month === "April" || Month === "May") {
	season = "Spring";
} else if (Month === "June" || Month === "July" || Month === "August") {
	season = "Summer";
}

console.log(`Month is ${Month} and it is ${season} season`);
