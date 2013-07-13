// $(document).ready(function(){
// 	$(".add-ex-link").on('click', function() {

// 	/* Highlight exercise card when clicked */
// 	   var exercise_card = $(this).parents(".ex-descriptions-card");
// 	   exercise_card.addClass('background-hilite');
			
// 	// When exercise card is clicked, request "show" partial via ajax
// 		var exercise_id = $(this).parents(".ex-descriptions-card").data("ex_id");
// 		$.get("/exercise_descriptions/" + exercise_id);
// 	});
// });


$(document).ready(function() {
	var cardCollection = document.getElementsByClassName('ex-descriptions-card');
	for(var i = 0; i < cardCollection.length; i++) {
		if (cardCollection[i].className == "hilite") {
			cardCollection[i].className += " hilite";
		}
	}
	
});
