function fillDomainBounds(data, time) {
	var extent = getDomainBounds(time);
	data = fillLeftBound(data, extent);
	fillRightBound(data, extent);
}

function getDomainBounds(time) {
	var domainExtent = [];
	time == "One-Week" ? domainExtent.push(d3.time.day.offset(new Date(), -7), d3.time.day.offset(new Date(), 1)) :
	time == "Days" ? domainExtent.push(d3.time.day.offset(new Date(), -22), d3.time.day.offset(new Date(), 1)) :
	time == "Weeks" ? domainExtent.push(d3.time.week.offset(new Date(), -22), d3.time.week.offset(new Date(), 1)) :
	domainExtent.push(d3.time.month.offset(new Date(), -12), d3.time.month.offset(new Date(), 1))
	return domainExtent;
}

// Fill left bound.
// Iterator here is left bound of domain.
function fillLeftBound(data, extent) {
	// Get first and last data points.
	var left_bound = d3.min(data);
	left_bound = left_bound.date - (24 * 60 * 60 * 1000);
	var iterator = extent[0].getTime();
	var i = 0;
	while (iterator < left_bound) {
		var obj = {"date": iterator, "stub": true, "load_volume": 200, "workout_id": null};
		data.splice(i, 0, obj);
		iterator += (24 * 60 * 60 * 1000);
		i++;
	}
	return data;
}

// Fill right bound.
// Iterator here is max value of data.
function fillRightBound(data, extent) {
	// Get first and last data points.
	var len = Object.size(data);
	var max_date = data[len - 1].date;
	max_date += ((24 * 60 * 60 * 1000) * 1);
	var iterator = max_date;
	var right_bound = extent[1].getTime();
	var i = len;
	while (iterator <= right_bound) {
		var obj = {"date": iterator, "stub": true, "load_volume": 200, "workout_id": null};
		data.splice(i, 0, obj);
		iterator += (24 * 60 * 60 * 1000);
		i++;
	}
}

// Extend Object class to include a size function.
// See: http://stackoverflow.com/questions/5223/length-of-javascript-object-ie-associative-array
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};


