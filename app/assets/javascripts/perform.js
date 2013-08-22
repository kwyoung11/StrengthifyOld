$(document).on('ready page:load', function() {
	// Index the exercises
	var i = $(".wrkt-table tr").length;
	// When user starts workout
	$("#wrkt-start-link").on('click', function() {
		// global variables
		$(this).html("Pause");
		$(this).attr("id", "wrkt-pause-link");
		// Highlight first exercise
		$("#ex-1").newColor();
	});

	$(".ex-f").on('click', function() {
		var currEx = $(this).parents("tr");
		var currExNum = currEx.attr("id").split("-")[1];
		currEx.css("");
	});

});