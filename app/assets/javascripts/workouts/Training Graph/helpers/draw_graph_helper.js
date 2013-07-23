// Convert dates to millisecond time.
function convertToMilliseconds(data) {
  for (i = 0; i < data.length; i++) { data[i].date = new Date(data[i].date).getTime(); }
  return data;
}

// Rounds numbers at the thousands and greater positions
// and appends an SI prefix. e.g. 1732 => 1.7K
function format(num, metric) {
  var prefix = d3.formatPrefix(num, 1);
  var num_scaled = prefix.scale(num);
  var rounded = d3.round(num_scaled, 1);
  return metric == "Time" ? (num/3600).toFixed(1) + "h" : rounded + prefix.symbol;
}

/* Choose date format for tooltips according to time scale. */
function chooseToolTipDateFormat(t) {
  return t == "Days" ? d3.time.format("%A %b %e") : t == "Weeks" ? d3.time.format("%b %d") : d3.time.format("%B");
}

function updateXDomain(data, x, time) {
  time == "One-Week" ? x.domain([d3.time.day.offset(new Date(), -7), d3.time.day.offset(new Date(), 0)]) :
  time == "Days" ? x.domain([d3.time.day.offset(new Date(), -22), d3.time.day.offset(new Date(), 0)]) :
  time == "Weeks" ? x.domain([d3.time.week.offset(new Date(), -22), d3.time.week.offset(new Date(), 0)]) :
  time == "Months" ? x.domain([d3.time.month.offset(new Date(), -12), d3.time.month.offset(new Date(), 0)]) :
  x.domain([d3.time.day.offset(new Date(), -22), d3.time.day.offset(new Date(), 0)]); // time interval did not change, return default domain
}

function updateYDomain(data, y, time) {
  y.domain([0, d3.max(data, function(d) { return d.load_volume; })]);
}

function setXDomain(time, w, margin) {
  return time == "One-Week" ? d3.time.scale().domain([d3.time.day.offset(new Date(), -7), d3.time.day.offset(new Date(), 0)]).rangeRound([0, w - margin.left - margin.right]) :
  time == "Days" ? d3.time.scale().domain([d3.time.day.offset(new Date(), -22), d3.time.day.offset(new Date(), 0)]).rangeRound([0, w - margin.left - margin.right]) :
  time == "Weeks" ? d3.time.scale().domain([d3.time.week.offset(new Date(), -22), d3.time.day.offset(new Date(), 0)]).rangeRound([0, w - margin.left - margin.right]) :
  time == "Months" ? d3.time.scale().domain([d3.time.month.offset(new Date(), -12), d3.time.day.offset(new Date(), 0)]).rangeRound([0, w - margin.left - margin.right]) :
  d3.time.scale().domain([d3.time.day.offset(new Date(), -22), d3.time.day.offset(new Date(), 0)]).rangeRound([0, w - margin.left - margin.right]); // time interval did not change, return default domain
}

function setYDomain(data, h, margin) {
  return d3.scale.linear().domain([0, d3.max(data, function(d) { return d.load_volume; })]).range([h - margin.top - margin.bottom, 0]);
}


function updateTickFormat(xAxis, x, time) {
  time == "One-Week" ? xAxis.scale(x).ticks(d3.time.days, 1).tickFormat(d3.time.format('%d')) :
  time == "Days" ? xAxis.scale(x).ticks(d3.time.days, 1).tickFormat(d3.time.format('%d')) : 
  time == "Weeks" ? xAxis.scale(x).ticks(d3.time.weeks, 1).tickFormat(d3.time.format('%W')) :
  time == "Months" ? xAxis.scale(x).ticks(d3.time.months, 1).tickFormat(d3.time.format('%b')) : 
  xAxis.scale(x) // time scale did not change, return default scale
}

function setTickFormat(xAxis, x, time) {
  return time == "One-Week" ? d3.scale.linear().domain([0, d3.max(data, function(d) { return d.load_volume; })]).range([h - margin.top - margin.bottom, 0]) :
  time == "Days" ? d3.scale.linear().domain([0, d3.max(data, function(d) { return d.load_volume; })]).range([h - margin.top - margin.bottom, 0]) : 
  time == "Weeks" ? d3.scale.linear().domain([0, d3.max(data, function(d) { return d.load_volume; })]).range([h - margin.top - margin.bottom, 0]) :
  time == "Months" ? d3.scale.linear().domain([0, d3.max(data, function(d) { return d.load_volume; })]).range([h - margin.top - margin.bottom, 0]) : 
  d3.scale.linear().domain([0, d3.max(data, function(d) { return d.load_volume; })]).range([h - margin.top - margin.bottom, 0]) // time scale did not change, return default scale
}


/*****************
Graph Interactivity Functions
*******************/

// On bar mouseover, display tooltip.
function barMouseOver(d, i, x, y, bar, tooltip, user_id, time, metric, barWidth) {

  if (d.load_volume != 0) {
    var xy = $(".chart").offset();
    d3.select(bar[0][i]).style("fill", "rgba(65,131,196,0.8)");

    clearTimeout($(".tooltip").attr("d")); // Clear the timeout data-attribute.
    setDateFormat(d, time, tooltip);
    var tooltip_width = $(".tooltip").width();
    var tooltip_height = $(".tooltip").height();

    // Show, position and insert data into tooltip.
    tooltip.style("display", "block").style("left", x(new Date(d.date)) + (xy.left - tooltip_width/2 + barWidth/4) + "px")
    .style("top", y(d.load_volume) - 70 + xy.top + "px")
    .transition().duration(200).style("opacity", .9);

    $(".tooltip").append(toolTipContents(d, user_id, metric));
  }
}

function setDateFormat(d, time, tooltip) {
  var formatTime = d3.time.format("%A %b %e"); // day month day_number

  if (time == "Weeks") {
    tooltip.html(formatTime(new Date(d.date + 86400000)) + "-" + formatTime(new Date(d.date + (7 * 86400000))) + "<br />");
  } else {
    tooltip.html(formatTime(new Date(d.date + 86400000)) + "<br />"); 
  }
}


function barMouseOut(d, i, bar, tooltip) {
  if (d.load_volume != 0) {
  d3.select(bar[0][i]).transition().duration(500).style("fill", "rgba(65,131,196,0.4)");
  // Grab the tooltip and set a delay for its disappearance.
    var timeoutId = setTimeout(function() {
        tooltip.transition().duration(200).style("opacity", 0); 
    }, 350);
   // Set the timeoutId, allowing us to clear this trigger if the mouse comes back over
   tooltip.attr("d", timeoutId);
  }
}

function toolTipMouseOver(tooltip) {
  $(".tooltip").mouseenter(function() {
      clearTimeout($(".tooltip").attr("d"));
      tooltip.style("display", "block").style("opacity", .9);
    }).mouseleave(function() {
      tooltip.transition().duration(200).style("opacity", 0);
      setTimeout(function() { tooltip.style("display", "none") }, 200); 
  });
}

function toolTipContents(d, user_id, metric) {
  var workout_ids = [];
  workout_ids = d.workout_id;
  var tooltip_contents = [];
  for (i = 0; i < workout_ids.length; i++) {
    if (parseInt(+d.ind_load_volume[i]) > 0) {
    tooltip_contents.push("LV: " + parseNumber(d.ind_load_volume, i, metric) + ' <span onclick="show_workout()" class="tooltip_show_workout" id="' + workout_ids[i] + '">Show</span><br/>');
    }
  }
  return tooltip_contents;  
}

function parseNumber(num, i, metric) {
  if (metric == "Time") {
    return (num[i]/3600).toFixed(1) + "h" 
  } else {
    return num[i]
  }
}
