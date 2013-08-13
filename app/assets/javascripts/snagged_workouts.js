$(document).on('ready page:load', function() {
	// If snagged workout or on workouts#edit
	if ($("#workout_snagged").length) {

		$(".workout-rest").each(function(i) {
			$(this).parents(".exercise").children("li").first().children(".exercise-count").html(i+1);
			$("#ex-num-" + (i+1)).html("" + (i+1));
			$(this).children(".slider").attr("id", "slider" + (i+1));

			// $(this).children("#rp-unit").before('<input class="exercise__rest-period" id="workout_exercises_attributes_' + i + '_rest_period_attributes_seconds" name="workout[exercises_attributes][' + i + '][rest_period_attributes][seconds]" style="width: 35px;" type="text" value="" /><input id="workout_exercises_attributes_' + i + '_rest_period_attributes_id" name="workout[exercises_attributes][' + i + '][rest_period_attributes][id]" type="hidden" value="' + (i+5) + '>');


			if (!$(this).has(".ui-slider-handle").length) {
				$("#slider" + (i+1)).slider({
  	  		value: $(this).children(".exercise__rest-period").val(),
  	  		min: 0,
  	  		max: 180,
  	  		step: 5,
  	  		slide: function(event, ui) {
  	  			$("input[id=workout_exercises_attributes_" + (i) + "_rest_period_attributes_seconds]").val(ui.value);
  	  		}	
  			});
			}

		});

	}
});	


