/***************
aggregate_data.js helper functions

****************/

/* Choose dateFormat for user-chosen Time Interval*/
function decideDateFormat(time_scale, data, i) {
	return (time_scale == "Weeks") ? weekNumberOfYear(new Date(data[i].date)) : monthNumberOfYear(new Date(data[i].date))
}
/* Convert %Y-%m-%d date format to weekNumberOfYear(%W) in milliseconds */
function weekNumberOfYear(d) {
  	d = new Date(d); // get current date
	var day = d.getDay(),
	 	diff = d.getDate() - day + (day == 0 ? -6 : 1), // Subtract day number of month from day number of week, and adjust when day is sunday
	 	date = new Date(d.setDate(diff));
	return date.setHours(0);
}
/* Convert %Y-%m-%d date format to monthNumberOfYear(%M) in milliseconds */
function monthNumberOfYear(d) {
	d = new Date(d); // get current date
	var date = new Date(d.setDate(15)); // set to arbitrary day of month, in this case the 15th of the month
	return date.setHours(0);
}


