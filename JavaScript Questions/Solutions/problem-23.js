// 23. Write a program which tells the number of days in a month, now consider leap year.

// function to check leap year.
function leapYear(year) {
	if (year % 400 == 0) {
		return true;
	}
	if (year % 100 == 0) {
		return false;
	}
	if (year % 4 == 0) {
		return true;
	}
	return false;
}

// function to find number of days.
let getDays = (month, year) => {
	if (month > 0 && month <= 7) {
		if (month % 2 == 0) {
			if (month == 2) {
				return leapYear(year) ? 28 : 27;
			}
			return 30;
		} else {
			return 31;
		}
	} else if (month > 7 && month <= 12) {
		if (month % 2 == 0) {
			return 31;
		} else {
			return 30;
		}
	} else {
		console.log("Invalid Month");
	}
};

// Driver Code.
const month = 2;
const year = "2022";
console.log(getDays(month, year));
