/*****
* Adds form input fields belonging to attributes on the Exercise model. The
* data attributes are passed via the link_to_add_fields helper function (in application_helper.rb)
* When the link_to_add_fields is clicked, a RegEx searches the data hash for the id, inserts the form fields
before the link, and replaces the regexp with the index variables i (initialized to 0).
The index (i) replaces the contents of the .ex_counter div in the rendered partial. If the remove field link
is clicked, a second index, k, decrements i to reflect the number of deleted exercises.
*****/

$(document).ready(function() {
$("#workout_name").focus();
    
// Provide better interface for choosing date of workout
$(".jquery-ui-date").datepicker({ dateFormat: 'yy-mm-dd' });
$('.jquery-ui-date').hide();
$('#workout_created_at_link').on('click', function() {
	$('#workout_created_at_link').hide();
	$('.jquery-ui-date').show();
	return false;
});

// Display sets in more visual format after input
$("#workout_sets").change(function () {
    var value = $(this).val();
    $("#display-sets").css("display", "inline-block");
    $("#num_sets").text(value);
		$("#num_sets").append(' sets of:');
		$('#num_sets').show("fold", 1000);
		$('#workout_sets').hide("blind", 1000);
   }).keyup();
	
	// Allow for re-edit of sets after input
	$('#num_sets').on('click', function() {
		$('#num_sets').hide();
		$('#workout_sets').show();
		setTimeout(function() { $("#workout_sets").focus();	}, 300);
	});

/*  Implement ability to remove indiviual exercises if user made a mistake */
	$(function() {
	  return $('form').on('click', '.workout-remove-exercise-link', function(event) {
	    $(this).prev('input[type=hidden]').val('1');
	    $(this).closest('.exercise').hide();
	    $(this).closest('.exercise').children(".workout-rest").remove();
	    return event.preventDefault();
	  });
	});

	// Keep track of the number of exercise on the page
	var k = 0;
	$('form').on('click', '.workout-remove-exercise-link', function() {
		k++;
	});

	$("#slider1").slider({
    	value: 0,
    	min: 0,
    	max: 180,
    	step: 5,
    	slide: function(event, ui) {
    		$("input[id=workout_exercises_attributes_0_rest_period_attributes_seconds]").val(ui.value);
    	}	
  	});
    		
	// Allow the user to add additional exercises to workout form
	var i = $('.workout .exercise').size() - k;
	$(".workout-add-exercise-link").on('click', function(e) {
		var i = $('.workout .exercise').size() - k;
		var regexp = new RegExp($(this).data('id'), 'g');
		$(".exercise-list").append($(this).data('fields').replace(regexp, i));
		e.preventDefault();
		$("#workout_exercises_attributes_" + i + "_name").focus();
		$(".workout .exercise .exercise-count").last().html("" + (i+1));
		$(".slider").last().removeAttr("id").attr("id", "slider" + (i+1));
		$(".workout-rest-value").last().removeAttr("id").attr("id", "rest" + (i+1));
		$("#slider" + (i+1)).slider({
    	value: 0,
    	min: 0,
    	max: 180,
    	step: 5,
    	slide: function(event, ui) {
    		console.log(i+1);
    		$("input[id=workout_exercises_attributes_" + (i-1) + "_rest_period_attributes_seconds]").val(ui.value);
    	}	
  	});
		i++;
	});


/****  
* Autocomplete for exercises in the workout form. 
* Source (for autocomplete): all exercises marked as 'usable' in ibid table
* Includes "Monkey patch" that allows for 
* syntax highlighting of matched terms. 
*
****/
function monkeyPatchAutocomplete() {
    $.ui.autocomplete.prototype._renderItem = function (ul, item) {
        var keywords = $.trim(this.term).split(' ').join('|');
        var output = item.label.replace(new RegExp("(" + keywords + ")", "gi"), '<span style="font-weight:bold;color:Blue;">$1</span>');
        return $("<li>")
            .append($("<a>").html(output))
            .appendTo(ul);
    };
}

$(function() {
		monkeyPatchAutocomplete();
    $('.exercise_name').autocomplete({ 
			source: '<%= exercises_path %>'
	 	});
});






});	
