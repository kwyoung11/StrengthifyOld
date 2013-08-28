$(document).on('ready page:load', function() {
	var finishLink = $(".ex-f");
	var finished = false;
	$("#wrkt-finish-link").attr("href", "javascript:void(0)");
	$(".ex-f").hide();

	
	// Index the exercises
	var numExercises = $(".wrkt-table tr").last().data("ex_id") + 1;
	var numFinished = 0;

	startWorkout();
	completeExercise();
	saveWorkout(finished);


	function startWorkout() {
		$("#wrkt-start-link").on('click', function() {
			// Check if user is pausing workout
			if ($(this).text() == "Pause") {
				// Next click resumes workout
				$(this).html("Resume");
			} else if ($(this).text() == "Resume") {
				// Next click pauses workout
				$(this).html("Pause");

			}
			// Check if user is re-starting workout.
			if ($(this).text() == "Restart") {
				$(".bar").css("width", "1%");
				numFinished = 0;
			}
			// Start Workout.
			if ($(this).text() != "Pause" && $(this).text() != "Resume" ) {
				finishLink.first().show();
				$(this).html("Pause");
				$(".performable-ex").first().animate({backgroundColor: "#fefc99"}, 300); // Highlight first exercise
			}
			
		});
	}

	function completeExercise() {
		finishLink.on('click', function() {
			$(this).parents("tr").animate({backgroundColor: "#ffffff"}, 300);
			$(this).hide();
			$(this).parents("tr").next("tr").animate({backgroundColor: "#fefc99"}, 300);
			$(this).parents("tr").next("tr").children(".finish-link").children(".ex-f").show();
			numFinished++;
			updateWrktPercentComplete(numFinished, numExercises);
		});
	}

	function updateWrktPercentComplete(completed, total) {
		var percent = (completed/total) * 100;
		$(".bar").css("width", "" + percent + "%");
		if (percent == 100) {
			finishWorkout();
		}
	}

	function finishWorkout() {
		// Update finished flag.
		var finished = true;
		$("#wrkt-start-link").html("Restart");
		saveWorkout(finished);
	}

	function saveWorkout(finished) {
		$("#wrkt-finish-link").on('click', function() {
			console.log(finished);
			if (finished == true) {
				console.log("You just saved the workout");
			} else {
				alert("You haven't finished your workout yet. Are you sure you want to save this?");
			}
		});
	}


	

});

