/*****
* Adds form input fields belonging to attributes on the Exercise model. The
* data attributes are passed via the link_to_add_fields helper function (in application_helper.rb)
* When the link_to_add_fields is clicked, a RegEx searches the data hash for the id, inserts the form fields
before the link, and replaces the regexp with the index variables i (initialized to 0).
The index (i) replaces the contents of the .ex_counter div in the rendered partial. If the remove field link
is clicked, a second index, k, decrements i to reflect the number of deleted exercises.
*****/

$(document).on('ready page:load', function() {
$("#workout_name").focus();
    
// jQuery Datepicker
$(".jquery-ui-date").datepicker({ dateFormat: 'yy-mm-dd' });
$('.jquery-ui-date').hide();
$('#workout_created_at_link').on('click', function() {
	$('#workout_created_at_link').hide();
	$('.jquery-ui-date').show();
	return false;
});

// Display sets after input
$(".new #workout_sets").change(function () {
    var value = $(this).val();
    $("#display-sets").css("display", "inline-block");
    $("#num_sets").text(value);
		$("#num_sets").append(' sets of:');
		$('#num_sets').show("fold", 1000);
		$('#workout_sets, #workout_sets_label').hide();
   }).keyup();
	
// Re-edit sets after input
$('.new #num_sets').on('click', function() {
	$('#num_sets').hide();
	$('#workout_sets').show();
	setTimeout(function() { $("#workout_sets").focus();	}, 300);
});

if ($(".new")) {
	removeExercise();
	addExercise(".workout-add-exercise-link", "#add-ex", ".workout");
}


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
