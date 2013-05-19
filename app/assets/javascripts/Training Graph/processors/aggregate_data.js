
/***
* The consolidateData() function takes a JSON object requested via ajax and
* determines which time scale(x-axis) to update the graph with.
*
***/
function consolidateData(data, time_scale) {
	return (time_scale == "Days") ? data : 
	(time_scale == "Weeks") ? getNewTimeInterval(data, time_scale) :
	getNewTimeInterval(data, time_scale); // value is equal to months
}

/****
* The getNewTimeInterval() function takes the sum of all load_volume values that correspond to a
* given week or month time interval range. It converts the JSON data date keys to weekNumberOfYear or
* monthNumberOfYear, pushing them into an array and then removing all duplicate values. It then sums the load_volume's
* corresponding to that time interval range, and then builds a JSON string. 
* Returns new JSON object with altered date key values corresponding to the specified time interval.
****/
function getNewTimeInterval(data, time_scale) {
	var week_dates = [];
	var load_volume_sums = [];
	for (i = 0; i < data.length; i++) {
		if (data[i].stub != true) {	
			week_dates.push(decideDateFormat(time_scale, data, i));
		}
	}
	// Remove duplicate values.
	week_dates = $.grep(week_dates, function(v, k) {
	    return $.inArray(v, week_dates) === k;
	});
	
	// Sum load volumes into array.
	for (i = 0; i < week_dates.length; i++) {
		var sum = 0;
		for (j = 0; j < data.length; j++) {	
			if (decideDateFormat(time_scale, data, j) == week_dates[i] && data[j].stub != true) {
				sum += data[j].load_volume;
			}
		}
			load_volume_sums[i] = sum;
	}
	
	// Build the JSON string.
	var new_json = "";
	for (i = 0; i < week_dates.length; i++) {
		today = new Date();
		new_json += "{\"date\":" + week_dates[i] + ",\"load_volume\":" + parseInt(load_volume_sums[i]) + "},";
	}
	new_json = new_json.slice(0, new_json.length-1); // Remove the trailing comma.
	new_json = "[" + new_json + "]";
	var json = [];
	new_json = json.concat(new_json); // Concat string into array.
	new_json = JSON.parse(new_json); // Parse JSON.
	return new_json;
}

