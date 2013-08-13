$(document).on('ready page:load', function () {	
/* Highlight table row when clicked */
$(function() {
   var tr = $('.row_for_workout').click(function() {
       tr.removeClass('active');
       $(this).addClass('active');
   });

});

// When row is clicked, request "show" partial via ajax
$(".row_for_workout").click(function () {
	var workout_id = $(this).attr("data-workout_id");
	var user_id = $("#tabContainer").data("user");
	$.get("/users/" + user_id + "/workouts/" + workout_id);
});

});