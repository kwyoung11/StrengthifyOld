function showHideOnClick(wrapper, el, speed, effects, windowed, newText, oldText) {
	$(wrapper).on('click', function() {
		if ($(el).css("display") == "none") {
			$(el).show(speed);
			$(wrapper).html(newText);
			if (effects == "rotate") { $(".bar-expand a").css("-webkit-transform", "rotate(90deg)"); }
		} else {
			$(el).hide(speed);
			$(wrapper).html(oldText);
			if (effects == "rotate") { $(".bar-expand a").css("-webkit-transform", "rotate(360deg)"); }
		}
	});

	// Hide on window click
	if (windowed == true) {
		$(window).on('click', function(e) {
			var target_id = "#" + String(e.target.id)  
			if (target_id != wrapper) { $(el).hide();	}
		});
	}
}

function addExercise(selector, link_id, form_namespace, trigger) {
	trigger = trigger || null;
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
		addRestPeriodFields(i);
		i++;
	});
}

function addRestPeriodFields(i) {
	$(".slider").last().removeAttr("id").attr("id", "slider" + (i+1));
	if (i == 0) {
		$(".workout-rest").last().children("#rp-unit").before('<label for="workout_exercises_attributes_' + i + '_rest_period_attributes_rest_period"> Rest Period</label><input class="exercise__rest-period" id="workout_exercises_attributes_' + i + '_rest_period_attributes_seconds" name="workout[exercises_attributes][' + i + '][rest_period_attributes][seconds]" style="width: 35px;" type="text" value="" /><input id="workout_exercises_attributes_' + i + '_rest_period_attributes_id" name="workout[exercises_attributes][' + i + '][rest_period_attributes][id]" type="hidden" value="' + (i+5) + '>');
	} else {
		$(".workout-rest").last().children("#rp-unit").before('<input class="exercise__rest-period" id="workout_exercises_attributes_' + i + '_rest_period_attributes_seconds" name="workout[exercises_attributes][' + i + '][rest_period_attributes][seconds]" style="width: 35px;" type="text" value="" /><input id="workout_exercises_attributes_' + i + '_rest_period_attributes_id" name="workout[exercises_attributes][' + i + '][rest_period_attributes][id]" type="hidden" value="' + (i+5) + '>');
	}
	
	$("#slider" + (i+1)).slider({
  	value: 0,
  	min: 0,
  	max: 180,
  	step: 5,
  	slide: function(event, ui) {
  		$("input[id=workout_exercises_attributes_" + (i) + "_rest_period_attributes_seconds]").val(ui.value);
  	}	
  });
}

function removeExercise() {
	// Remove exercise link
	return $('form').on('click', '.workout-remove-exercise-link', function(event) {
	  $(this).prev('input[type=hidden]').val('1');
	  $(this).closest('.exercise').hide();
	  $(this).closest('.exercise').children(".workout-rest").remove();
	  return event.preventDefault();
	});
}

function highlight(el, originalColor, highlightColor) {
	$(el).animate({ backgroundColor: highlightColor}, 75);
	$(el).animate({ backgroundColor: originalColor}, 300);
}


