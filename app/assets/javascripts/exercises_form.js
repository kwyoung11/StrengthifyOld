/*****
* Adds form input fields belonging to attributes on the Exercise model. The
* data attributes are passed via the link_to_add_fields helper function (in application_helper.rb)
* When the link_to_add_fields is clicked, a RegEx searches the data hash for the id, inserts the form fields
before the link, and replaces the regexp with the index variables i (initialized to 0).
The index (i) replaces the contents of the .ex_counter div in the rendered partial. If the remove field link
is clicked, a second index, k, decrements i to reflect the number of deleted exercises.
*****/
$(document).ready(function() {

/*Focuses on workout name on page load*/
$("#workout_name").focus();

/***
* Date input (default is today). If user wants to change this,
* he/she can click link and datepicker will be brought up
***/
$(".jquery-ui-date").datepicker({ dateFormat: 'yy-mm-dd' });
$('.jquery-ui-date').hide();
$('#workout_created_at_link').on('click', function() {
	$('#workout_created_at_link').hide();
	$('.jquery-ui-date').show();
	return false;
});


$("#workout_sets").change(function () {
    var value = $(this).val();
    $("#display-sets").css("display", "inline-block");
    $("#num_sets").text(value);
		$("#num_sets").append(' sets of:');
		$('#num_sets').show("fold", 1000);
		$('#workout_sets').hide("blind", 1000);
   }).keyup();

	$('#num_sets').on('click', function() {
		$('#num_sets').hide();
		$('#workout_sets').show();
		setTimeout(function() { $("#workout_sets").focus();	}, 300);
	});


/*  Remove exercise link in workout form */
	$(function() {
	  return $('form').on('click', '.remove-exercise-link', function(event) {
	    $(this).prev('input[type=hidden]').val('1');
	    $(this).closest('.exercise-wrapper').hide();
	    return event.preventDefault();
	  });
	});

	var k = 0;
	$('form').on('click', '.remove-exercise-link', function(event) {
		k++;
	});
$(".add-exercise-link").on('click', function(event) {
		var i = $('#workout_form .exercise-wrapper').size() - k;
		var regexp = new RegExp($(this).data('id'), 'g');
		$(".exercise-list").append($(this).data('fields').replace(regexp, i));
		event.preventDefault();
		$("#workout_exercises_attributes_" + i + "_name").focus();
		$("#workout_form .exercise-wrapper .ex_counter").last().html("" + (i+1));
		i++;
	});



	

});	
