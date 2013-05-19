/****************************

Function to Fill in Missing Data: deriveMissingDates()

******************************/

/**
* This function takes JSON data retrieved via ajax with dates in %Y-%m-%d format, extracts 
* the "%d" for each JSON object and pushes it into an array. It then loops for the difference in days
* between two adjacent array elements, pushing these missing days into a new array. Finally it builds a JSON string
* from these missing dates, merges it with the original array, and converts it to millisecond time. It returns
* this new merged array. The missing dates act as stub svg rect elements (appearing as light grey on the graph).
* No longer sorted.
**/
function deriveMissingDates() {
  date_array = getCurrentDates();
  missingDates = getMissingDates(date_array);
  new_json = buildJSONFromMissingDates(missingDates);
  new_data = mergeMissingDates(new_json);
  var derived_json = sortJSON(data);
  return derived_json;
}

// Get all current dates in dataset
// @param date_array. 
function getCurrentDates(date_array) {
var date_array = [];
for (i = 0; i < data.length; i++) {
  var json_object = " {\"date\":\"" + data[i].date + "\", \"load_volume\":\"" + data[i].load_volume + "\"},"
  date_array.push(json_object.slice(10,20));
}
return date_array;
}

// Interpolates missing dates.
// @param arr. Array of current dates in original data set.
function getMissingDates(arr) {
	var predptr = 0, leadptr = 1, missingDates = []; // initialize predecessor pointer, lead pointer, and missing dates array
	
	while (true) {
	  if (predptr == arr.length) break;
	  var predDatePtr = new Date(arr[predptr]).getTime(); // first element
	  var leadDatePtr = new Date(arr[leadptr]).getTime(); // second element
	  
	  var iterator = predDatePtr + ((24 * 60 * 60 * 1000) * 2); // get the next day after first date in element
	  while (iterator <= leadDatePtr) {  // Push missing dates onto array.
		var d = new Date(iterator);
	  	missingDates.push(d.getFullYear() + '-' + ('0' + (d.getMonth()+1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2));
	  	iterator += (24 * 60 * 60 * 1000); // add one day
	  }			
	predptr++;
	leadptr++;
	}
	return missingDates;	
}

// Builds JSON string from missingDates array.
// @param arr. Array with each missing date.
function buildJSONFromMissingDates(arr) {
	json = ""
	for (i = 0; i < arr.length; i++) {
		json += "{\"date\":" + "\"" + arr[i] + "\",\"stub\":" + true + ",\"load_volume\":" + 200 + "},";
	}
	json = json.slice(0,json.length-1);
	json = "[" + json + "]";
	json = $.parseJSON(json);
	return json;
}

// Concatenate missingDates array with original input data
// @param new_json. New JSON string built from missing date values.
function mergeMissingDates(new_json) {
	data = data.concat(new_json);
	var content = [];
	for (i=0; i < data.length; i++) {
		content += "{" + data[i].date + "," + data[i].load_volume + "},";
	}
	return data;
}

// Sort new JSON dataset in ascending order.
// @param data. New JSON data with missing date objects.
function sortJSON(data) {
	for (i = 0; i < data.length; i++) {
		data[i].date = new Date(data[i].date).getTime(); // convert dates to millisecond time
	}
	
	// data.sort(function(a,b) { return parseInt(a.date) - parseInt(b.date) });
}


// Rounds numbers at the thousands and greater positions
// and appends an SI prefix. e.g. 1732 => 1.7K
function format(num) {
  var prefix = d3.formatPrefix(num, 1);
  var num_scaled = prefix.scale(num)
  var rounded = d3.round(num_scaled, 1);
  return rounded + prefix.symbol;
}

