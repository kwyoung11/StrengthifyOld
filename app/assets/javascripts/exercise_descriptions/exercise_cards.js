$(document).ready(function() {
	// expanding information on exercise card
$(".expandable_link").on('click', function() {
	var currentExerciseCard = $(this).parents(".exercise_container");
	var expandableContent = $(this).parents(".exercise_container").find(".expandable_content");
	var expandableContentHeight = expandableContent.height();
	var currentExerciseCardHeight = currentExerciseCard.height();

	if (expandableContent.css("display") == "none") {
		currentExerciseCard.attr("original-height", currentExerciseCardHeight); 	// set height for posterity

		if (currentExerciseCard.attr("siblingHeightDifference")) {
			currentExerciseCard.animate({ height: currentExerciseCardHeight + expandableContentHeight - currentExerciseCard.attr("siblingHeightDifference")}, 300);
		} else {
			currentExerciseCard.animate({height: currentExerciseCardHeight + expandableContentHeight}, 300);
		}
		expandableContent.slideDown(300);
		currentExerciseCard.find(".triangle").css("-webkit-transform", "rotate(180deg)");
		currentExerciseCard.find(".expandable_link").text("Collapse ");
	} else {
		var originalExerciseCardHeight = currentExerciseCard.attr("original-height");
		currentExerciseCard.animate({height: originalExerciseCardHeight}, 300);
		expandableContent.slideUp(300);
		currentExerciseCard.find(".triangle").css("-webkit-transform", "rotate(360deg)");
		currentExerciseCard.find(".expandable_link").text("Expand");
	}
});

if ($("#db_wrapper").length == 1) {
// for pagination links

// turn off turbolinks 
$(".previous_page").attr("data-no-turbolink", "true");
$(".next_page").attr("data-no-turbolink", "true");

// get position of left and right edges of exercise cards window
var positionLeft = $("#exercises_from_db").position().left;
var positionRight = positionLeft + $("#exercises_from_db").width();

// position pagination links
$(".previous_page_wrapper").css("margin-left", positionLeft - 45);
$(".next_page_wrapper").css("margin-left", positionRight - 15);

$(window).resize(function(){
	// get position of left and right edges of exercise cards window
var positionLeft = $("#exercises_from_db").position().left;
var positionRight = positionLeft + $("#exercises_from_db").width();

// position pagination links
$(".previous_page_wrapper").css("margin-left", positionLeft - 45);
$(".next_page_wrapper").css("margin-left", positionRight - 15);
});

}

});

