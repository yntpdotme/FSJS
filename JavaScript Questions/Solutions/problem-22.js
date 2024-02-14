// 22. Write a program which tells the number of days in a month.
let date = new Date();
let month = date.getMonth() + 1;
let days;

if (month > 0 && month <= 7) {
	if (month % 2 == 0) {
		if (month == 2) {
			days = "27 or 28";
		} else {
			days = 30;
		}
	} else {
		days = 31;
	}
} else if (month > 7 && month <= 12) {
	if (month % 2 == 0) {
		days = 31;
	} else {
		days = 30;
	}
} else {
	console.log("Invalid Month");
}

console.log(
	`Month is ${date.toLocaleString("en-US", {
		month: "long",
	})} and it has ${days} days.`
);
