$(document).ready(function() {

	$("#time_scale li:last").addClass('current');
	$("#time_scale li").on("click", function() {
		$("#time_scale li").removeClass('current');
		$(this).addClass('current');
	});

$("ul#time_scale li, #metric_select, #category_select").on('click change', function () {
	var category = $("#category_select option:selected").attr("value");
	var metric = $("#metric_select option:selected").attr("value");
	var time_scale = $("ul#time_scale li.current").text();
	var pElem = $('#chart_title');
	var children = pElem.children();

	pElem.append(children);
	var arrow = 
		$("#chart_title span:nth-child(1)").text(" " + metric + " ");
		$("#chart_title span:nth-child(3)").text(" " + category + " ");
		$("#chart_title span:nth-child(5)").text(" " + time_scale + " ");
});
});

// When user clicks show link on tooltip, redirect to list page and show workout 
function show_workout() {
  // When li item is clicked, get the id of the ul parent,
  // remove the activeTab class from the previously active tab,
  // and hide its contents.
  var workout_id = $(".tooltip_show_workout").attr("id");
  var user_id = ($(".no_workouts_yet").length == 1) ? $(".no_workouts_yet").data("user_id") : $("#tabContainer").data("user");
  var current = $(".tabs ul li").parent("ul").attr("data-current");
  $("#tabHeader_" + current).removeClass("activeTab");
  $("#tabpage_" + current).css("display", "none");
  $("#tabHeader_2").attr("class","activeTab");
  $("#tabpage_2").css("display", "block");
  $(".tabs ul li").parent("ul").attr("data-current", 2);
  // Show workout.
  $(".workout_details").hide();
  $("tr [data-workout_id=31]").addClass('active');
  // Request workout.
  $.get("/users/" + user_id + "/workouts/" + workout_id); 
	if ($(".no_workouts_yet").length == 1) {
		window.location.pathname += "/workouts";
	}
  // Highlight table row.
  $(".row_for_workout").removeClass('active');
  $('[data-workout_id="' + workout_id + '"]').addClass('active');
}
