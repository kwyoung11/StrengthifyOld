$(document).ready(function() {

// General helper function for displaying tooltips
function ShowTooltip(selector) {
	$(selector).mouseover(function() {
		$(this).find(".tooltip_triangle").css("opacity", "1");
		var tooltip_width = $(this).find(".helper_tooltip").width();
		var elem_width = $(this).width();
		$(".helper_tooltip .tooltip_triangle").css("margin-left", "" + (tooltip_width/2 - 10) + "px");
		$(".helper_tooltip").css("margin-left", "-" + (elem_width/2 + tooltip_width/2)	 + "px");
	});

	$(selector).mouseout(function(){
		$(this).find(".tooltip_triangle").css("opacity", "0");
	});
}

// Twitter-style tooltips for friend photos
ShowTooltip(".user_photo");

// Tooltips for show and add buttons on exercise_db page
ShowTooltip(".show_exercise_container");
ShowTooltip(".add_exercise_container");


});
