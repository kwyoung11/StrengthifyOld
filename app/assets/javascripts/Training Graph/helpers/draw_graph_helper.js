/**
* Converts date objects in data to millisecond time.
**/

// Convert dates to millisecond time.
// @param data. The data.
function convertToMilliseconds(data) {
  	for (i = 0; i < data.length; i++) {
		data[i].date = new Date(data[i].date).getTime(); // convert dates to millisecond time
	}
  return data;
}

// Rounds numbers at the thousands and greater positions
// and appends an SI prefix. e.g. 1732 => 1.7K
function format(num, metric) {
  var prefix = d3.formatPrefix(num, 1);
  var num_scaled = prefix.scale(num)
  var rounded = d3.round(num_scaled, 1);
  if (metric == "Time") {
	return (num/3600).toFixed(1) + "h" 
  } else {
  	return rounded + prefix.symbol;
  }
}