// Request JSON data via AJAX according to selected Metric and/or Category option
function sendAjaxRequest(svg, x, y, xAxis, padding, margin, h, w, barWidth, tooltip, user_id, bar, time) {
	var metric = $("#metric_select option:selected").attr("value");
	var category = $("#category_select option:selected").attr("value");
	var time = $("ul#time_scale li.current").text();
	$.ajax({
		url: "/users/" + user_id +"/workouts/analyze.json",
		data: { metric: metric, category: category, time: time },
		dataType: "json",
		success: function(response) {	
			
		// Perform Update, Enter and Exit selections for svg elements
		updateGraph(response, svg, x, y, xAxis, padding, margin, h, w, barWidth, tooltip, user_id, bar, metric);
		
			}, // end success callback
			error: function (xhr, textStatus) {
					alert('Server error: ' + textStatus)
			}  // end error handling
		}); // end ajax
} // end sendAjaxRequest()


/***
* Performs Update, Enter and Exit selections in D3.js.
* Implements transitions for a select number of svg elements.
* This function is called after processing the JSON data with the 
* consolidateData() and deriveMissingDates() functions.
***/
function updateGraph(data, svg, x, y, xAxis, padding, margin, h, w, barWidth, tooltip, user_id, bar, metric) {
		var time = $("ul#time_scale li.current").text();
		deduceTimeInterval(data, x, time);
		deduceTickFormat(xAxis, x, time);
		
		// Process Data.
		data = convertToMilliseconds(data); // Convert to milliseconds.
	
	   // Update Y domain.
	   y.domain([0, d3.max(data, function(d) { return d.load_volume; })]);
	
		// Re-select chart elements and bind them to new data
		var bar = svg.selectAll("rect").data(data, function(d) { return d.date; });
		var text = svg.selectAll("text").data(data, function(d) { return d.date; });
		var delay = function(d, i) { return i * 5; };
		var duration = 750;
		
		// Update the rects.
		bar.transition().duration(duration).delay(delay)
			.attr("x", function(d) { return x(d.date); })
		    .attr("y", function(d) { return d.load_volume == 0 ? (h - margin.bottom - margin.top - margin.bottom + 30) : y(d.load_volume) })
		    .attr("height", function(d) { return d.load_volume == 0 ? 30 : h - margin.top - margin.bottom - y(d.load_volume) })
			.style("fill", function(d) { return d.load_volume == 0 ? "#888" : "#00e0fe" });
			
		// Update the text.
		text.transition().duration(duration).delay(delay)
			 .attr("x", function(d,i) { return x(new Date(d.date)) + barWidth/2; })
		     .attr("y", function(d) { return y(d.load_volume) + 20; })
		     .text(function(d) { return d.load_volume == 0 ? null : format(d.load_volume, metric) });
        
		// Date format for tooltip.
		var formatTime = chooseToolTipDateFormat(time);	
		
		// Draw new bars
		bar.enter().append("rect")
			.attr("x", function(d) { return x(d.date); })
		    .attr("y", function(d) { return d.load_volume == 0 ? (h - margin.bottom - margin.top - margin.bottom + 30) : y(d.load_volume) })
		    .attr("height", function(d) { return d.load_volume == 0 ? 30 : h - margin.top - margin.bottom - y(d.load_volume) })
		    .attr("width", barWidth)
		    .attr("fill", "#2d578b")
			.style("fill", function(d) { return d.load_volume == 0 ? "#888" : "#00e0fe" })
			.on("mouseover", function(d, i) { barMouseOver(d, i, x, y, bar, tooltip, formatTime, user_id, time, metric); })
			.on("mouseout", function(d, i) { barMouseOut(d, i, bar, tooltip) });
		
		// Handle tooltip mouseover.
		toolTipMouseOver(tooltip);	
        
		// Draw new texts
		text.enter().append("text")
			 .attr("x", function(d,i) { return x(new Date(d.date)) + barWidth/2; })
		     .attr("y", function(d) { return d.load_volume < (.05 * h) ? y(d.load_volume) + 0 : y(d.load_volume) + 20; })
		     .attr("class", "bar")
			 .attr("text-anchor", "middle")
		     .text(function(d) { return d.load_volume == 0 ? null : format(d.load_volume, metric) });
        
		// Draw the xAxis (note: x position of bar's for different time scale's is off, hence ternary if for dx attribute)
		svg.append('g').attr('class', 'x axis')
		   	.attr('transform', 'translate(' + padding + ',' + (h - margin.top - margin.bottom) + ')')
		   	.call(xAxis).selectAll("text").attr("dx", function(d) { return time == "Days" ? "0.5em" : time == "Weeks" ? "1.5em" : "1.05em" }); 
			
        // Remove rect and text elements not in current dataset.
		bar.exit().remove();
		text.exit().remove();

} // End updateGraph() function.