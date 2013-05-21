
/***************

update_graph.js helper functions

***************/
/* Choose date format for tooltips according to time scale. */
function chooseToolTipDateFormat(t) {
	return t == "Days" ? d3.time.format("%A %b %e") : t == "Weeks" ? d3.time.format("%b %d") : d3.time.format("%B")
}



/****************************

Functions to Update the Graph's Time Scale (x-axis): consolidateData()

******************************/

function deduceTimeInterval(data, x, time) {
	time == "One-Week" ? x.domain([d3.time.day.offset(new Date(), -7), d3.time.day.offset(new Date(), 0)]) :
	time == "Days" ? x.domain([d3.time.day.offset(new Date(), -22), d3.time.day.offset(new Date(), 0)]) :
	time == "Weeks" ? x.domain([d3.time.week.offset(new Date(), -22), d3.time.week.offset(new Date(), 0)]) :
	time == "Months" ? x.domain([d3.time.month.offset(new Date(), -12), d3.time.month.offset(new Date(), 0)]) :
	x.domain([d3.time.day.offset(new Date(), -22), d3.time.day.offset(new Date(), 0)]); // time interval did not change, return default domain
}

function deduceTickFormat(xAxis, x, time) {
	time == "One-Week" ? xAxis.scale(x).ticks(d3.time.days, 1).tickFormat(d3.time.format('%d')) :
	time == "Days" ? xAxis.scale(x).ticks(d3.time.days, 1).tickFormat(d3.time.format('%d')) : 
	time == "Weeks" ? xAxis.scale(x).ticks(d3.time.weeks, 1).tickFormat(d3.time.format('%W')) :
	time == "Months" ? xAxis.scale(x).ticks(d3.time.months, 1).tickFormat(d3.time.format('%b')) : 
	xAxis.scale(x) // time scale did not change, return default scale
}

