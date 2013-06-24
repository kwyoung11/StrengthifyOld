/*****
* Adds form input fields belonging to attributes on the Exercise model. The
* data attributes are passed via the link_to_add_fields helper function (in application_helper.rb)
* When the link_to_add_fields is clicked, a RegEx searches the data hash for the id, inserts the form fields
before the link, and replaces the regexp with the index variables i (initialized to 0).
The index (i) replaces the contents of the .ex_counter div in the rendered partial. If the remove field link
is clicked, a second index, k, decrements i to reflect the number of deleted exercises.
*****/
$(document).ready(function(){



	/*  Remove exercise link in workout form */
	$(function() {
	  return $('form').on('click', '.remove_fields', function(event) {
	    $(this).prev('input[type=hidden]').val('1');
	    $(this).closest('.ex_fields').hide();
	    return event.preventDefault();
	  });
	});

	var k = 0;
	$('form').on('click', '.remove_fields', function(event) {
		k++;
	});
$('form').on('click', '.add_fields', function(event) {
		var i = $('#workout_form .ex_fields').size() - k;
		var regexp = new RegExp($(this).data('id'), 'g');
		$(this).before($(this).data('fields').replace(regexp, i));
		event.preventDefault();
		$("#workout_exercises_attributes_" + i + "_name").focus();
		$("#workout_form .ex_fields .ex_counter").last().html("" + (i+1));
		i++;
	});




});	
