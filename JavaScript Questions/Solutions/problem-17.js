function getFormattedDateTime(format) {
	const now = new Date();

	const year = now.getFullYear();
	const month = String(now.getMonth() + 1).padStart(2, "0");
	const day = String(now.getDate()).padStart(2, "0");
	const hours = String(now.getHours()).padStart(2, "0");
	const minutes = String(now.getMinutes()).padStart(2, "0");

	switch (format) {
		case "YYYY-MM-DD HH:mm":
			return `${year}-${month}-${day} ${hours}:${minutes}`;
		case "DD-MM-YYYY HH:mm":
			return `${day}-${month}-${year} ${hours}:${minutes}`;
		case "DD/MM/YYYY HH:mm":
			return `${day}/${month}/${year} ${hours}:${minutes}`;
		default:
			return "Invalid format";
	}
}

const formattedDateTime1 = getFormattedDateTime("YYYY-MM-DD HH:mm");
const formattedDateTime2 = getFormattedDateTime("DD-MM-YYYY HH:mm");
const formattedDateTime3 = getFormattedDateTime("DD/MM/YYYY HH:mm");

console.log(formattedDateTime1);
console.log(formattedDateTime2);
console.log(formattedDateTime3);
