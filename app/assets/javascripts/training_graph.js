$(document).ready(function () {
	
  // ******* DATA ******** //
	var user_id = $("#tabContainer").data("user")
  d3.json("/users/" + user_id + "/workouts/analyze.json", function(error, json) {
      data = json;

      // Define graph area and margin areas.
      var margin = {top: 20, right: 10, bottom: 20, left: 10},
              graphHeight = 250 - margin.top - margin.bottom,
              barWidth = 80,
              graphWidth = ((barWidth + 10) * data.length);

      // Create the SVG graph.
      var svg = d3.select("#graphContainer").insert("svg", "#training_stats")
              .attr("class", "chart")
              .attr("width", graphWidth + margin.left + margin.right)
              .attr("height", graphHeight + margin.top + margin.bottom)
              .append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      // ***** SCALES ***** //

      // Set the Y scale.
      var y = d3.scale.linear()
              .domain([0, d3.max(data, function(d) { return d.load_volume; })])
              .range([0, graphHeight]);

      // Set the X scale.
      var x = d3.scale.linear().domain([0, data.length]).range([0, graphWidth]);

      // Draw the bars.
      svg.selectAll("rect")
              .data(data).enter().append("rect").sort(function(d) { return d3.ascending(d.date); })
              .attr("x", function(d, i) { return x(i); })
              .attr("y", function(d) { return graphHeight - y(d.load_volume); })
              .attr("height", function(d) { return y(d.load_volume); })
              .attr("width", barWidth)
              .attr("fill", "#2d578b");

      // Draw the text.
      svg.selectAll("text").data(data)
              .enter().append("text")
              .attr("x", function(d, i) { return x(i) + barWidth/2; })
              .attr("y", graphHeight)
              .attr("dy", function(d) { return -y(d.load_volume) + 20; })
              .attr("text-anchor", "middle")
              .attr("class", "bar")
              .text(function(d) { return d.load_volume; });

      // Y axis labels.
      svg.append("g").selectAll("text").data(data).enter().append("text")
              .attr("x", function(d, i) { return x(i) + (barWidth / 2) - 15; })
              .attr("y", graphHeight)
              .attr("transform", "translate(0,15)")
              .text(function(d) { return d.date; });
  });
	
	
	
	
});
	