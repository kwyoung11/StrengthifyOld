function showHideOnClick(wrapper, el, speed, effects) {
	$(wrapper).on('click', function() {
		if ($(el).css("display") == "none") {
			$(el).show(speed);
			if (effects == "rotate") { $(".bar-expand").css("-webkit-transform", "rotate(90deg)"); }
		} else {
			$(el).hide(speed);
			if (effects == "rotate") { $(".bar-expand").css("-webkit-transform", "rotate(360deg)"); }
		}
		
	});
}

function addExercise(selector, link_id, form_namespace) {
	// Keep track of the number of exercises on the page
	var k = 0;
	$('form').on('click', '.workout-remove-exercise-link', function() {
		k++;
	});
	
	// Add exercise link
	$(selector).on('click', function(e) {
		var i = $(form_namespace + ' .exercise').size() - k;
		var regexp = new RegExp($(link_id).data('id'), 'g');
		$(".exercise-list").append($(link_id).data('fields').replace(regexp, i));
		e.preventDefault();
		$("#workout_exercises_attributes_" + i + "_name").focus();
		$(form_namespace + " .exercise .exercise-count").last().html("" + (i+1));
		$(".slider").last().removeAttr("id").attr("id", "slider" + (i+1));
		if ($(".build")) {
			$(".workout-rest").last().children("#rp-unit").before('<label for="workout_exercises_attributes_' + i + '_rest_period_attributes_rest_period"> Rest Period</label><input class="exercise__rest-period" id="workout_exercises_attributes_' + i + '_rest_period_attributes_seconds" name="workout[exercises_attributes][' + i + '][rest_period_attributes][seconds]" style="width: 35px;" type="text" value="" /><input id="workout_exercises_attributes_' + i + '_rest_period_attributes_id" name="workout[exercises_attributes][' + i + '][rest_period_attributes][id]" type="hidden" value="' + (i+5) + '>');
		} else {
			$(".workout-rest").last().children("#rp-unit").before('<label for="workout_exercises_attributes_' + i + '_rest_period_attributes_rest_period"> Rest Period</label><input class="exercise__rest-period" id="workout_exercises_attributes_' + i + '_rest_period_attributes_seconds" name="workout[exercises_attributes][' + i + '][rest_period_attributes][seconds]" style="width: 35px;" type="text" value="" /><input id="workout_exercises_attributes_' + i + '_rest_period_attributes_id" name="workout[exercises_attributes][' + i + '][rest_period_attributes][id]" type="hidden" value="' + (i+5) + '>');
		}
		$("#slider" + (i+1)).slider({
    	value: 0,
    	min: 0,
    	max: 180,
    	step: 5,
    	slide: function(event, ui) {
    		$("input[id=workout_exercises_attributes_" + (i-1) + "_rest_period_attributes_seconds]").val(ui.value);
    	}	
  	});
		i++;

	});
}

function removeExercise() {
	// Remove exercise link
	$(function() {
	  return $('form').on('click', '.workout-remove-exercise-link', function(event) {
	    $(this).prev('input[type=hidden]').val('1');
	    $(this).closest('.exercise').hide();
	    $(this).closest('.exercise').children(".workout-rest").remove();
	    return event.preventDefault();
	  });
	});
}
