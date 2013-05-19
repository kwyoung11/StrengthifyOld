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



/***************

update_graph.js helper functions

***************/
/* Choose date format for tooltips according to time scale. */
function chooseToolTipDateFormat(t) {
	return t == "Days" ? d3.time.format("%A %b %e") : t == "Weeks" ? d3.time.format("%W") : d3.time.format("%B")
}



/****************************

Functions to Update the Graph's Time Scale (x-axis): consolidateData()

******************************/

function deduceTimeInterval(data, x, time) {
	time == "One-Week" ? x.domain([d3.time.day.offset(new Date(), -7), d3.time.day.offset(new Date(), 1)]) :
	time == "Days" ? x.domain([d3.time.day.offset(new Date(), -22), d3.time.day.offset(new Date(), 1)]) :
	time == "Weeks" ? x.domain([d3.time.week.offset(new Date(), -22), d3.time.week.offset(new Date(), 1)]) :
	time == "Months" ? x.domain([d3.time.month.offset(new Date(), -12), d3.time.month.offset(new Date(), 1)]) :
	x.domain([d3.time.day.offset(new Date(), -22), d3.time.day.offset(new Date(), 1)]); // time interval did not change, return default domain
}

function deduceTickFormat(xAxis, x, time) {
	time == "One-Week" ? xAxis.scale(x).ticks(d3.time.days, 1).tickFormat(d3.time.format('%d')) :
	time == "Days" ? xAxis.scale(x).ticks(d3.time.days, 1).tickFormat(d3.time.format('%d')) : 
	time == "Weeks" ? xAxis.scale(x).ticks(d3.time.weeks, 1).tickFormat(d3.time.format('%W')) :
	time == "Months" ? xAxis.scale(x).ticks(d3.time.months, 1).tickFormat(d3.time.format('%b')) : 
	xAxis.scale(x) // time scale did not change, return default scale
}