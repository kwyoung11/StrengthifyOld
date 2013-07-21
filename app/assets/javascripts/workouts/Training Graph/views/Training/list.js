$(document).ready(function() {
/* Highlight table row when clicked */
$(function() {
   var tr = $('tr').click(function() {
       tr.removeClass('active');
       $(this).addClass('active');
   });

});

// When row is clicked, request "show" partial via ajax
$("tr").click(function () {
	var workout_id = $(this).attr("data-workout_id");
	var user_id = $("#tabContainer").data("user");
	$.get("/users/" + user_id + "/workouts/" + workout_id);
});

});