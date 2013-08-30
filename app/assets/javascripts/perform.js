$(document).on('ready page:load', function() {
	// Globals...
	var numExercises = $(".wrkt-table tr").last().data("ex_id") + 1,
			numFinished = 0,
			setsFinished = 0,
			totalSets = $("input[id=tot-sets").val();
			initialDuration = $(".performable-ex").eq(numFinished).find("input[id=duration_" + numFinished + "]").val(),
			intervals = {}, // global object for timer intervals.
			cachedDurations = cacheIntervals("duration");
			cachedRestPeriods = cacheIntervals("rp");


	startWorkout();
	onInputFocus();
	changeValue();
	completeExercise();

	function startWorkout() {
		$("#wrkt-start-link").on('click', function() {
			// Check if user is pausing workout
			if ($(this).text() == "Pause") {
				stopCountdown(numFinished);
				$(this).html("Resume");
			} else if ($(this).text() == "Resume") { 
				countdown("duration_" + numFinished, parseInt($(".performable-ex").eq(numFinished).find("input[id=duration_" + numFinished + "]").val()));
				$(this).html("Pause");
			}
			// Check if user is re-starting workout.
			if ($(this).text() == "Restart") {
				$(".bar").css("width", "1%");
				$("#wrkt-percent-complete").html("1");
				intervals = {}; // empty intervals
				reSetIntervals();
				numFinished = 0;
				$(".performable-ex").removeClass("completed").removeClass("performing").addClass("uncompleted");
				$(".wrkt-finish-actions").html("");
			}
			// Start Workout.
			if ($(this).text() != "Pause" && $(this).text() != "Resume" ) {
				$(this).removeClass("unstarted");
				$(".performable-ex").first().addClass("performing");
				$(".performable-ex").eq(1).addClass("next-ex");
				countdown("duration_" + numFinished, $("input[id=duration_" + numFinished + "]").val());
				$(this).html("Pause");
				$(".performable-ex").first().find("input").removeAttr("disabled"); // Enable inputs.
			}
			
		});
	}

	function onInputFocus() {
		$("input").on('focus', function() {
			$(this).parents("tr").find(".focus").removeClass("focus");
			$(this).addClass("focus");
			$(this).parents("tr").find(".revision").show();
			$(this).parents("tr").find(".btn-increment, .btn-decrement").show();
		});
	}

	// Hide value revision buttons when user is 'clicking out'
	$(document).on('click', function(e) {
		if ( (e.target.className != "btn-increment") && (e.target.className != "btn-decrement") && (e.target.tagName != "INPUT") ) {
			$(".revision").hide();	
		}
	});

	function changeValue() {
		$(".btn-increment, .btn-decrement").on('click', function() {
			var input = $(this).parents("tr").find(".focus"),
					value = parseInt(input.val()),
					el = $(this).attr("class");
			input.val( el == "btn-increment" ? ++value : --value );
		});
	}

	function completeExercise() {
		$(".ex-finished").on('click', function() {
			var finishingExercise = $(".uncompleted").first();
			var currentExercise = $(".uncompleted").eq(1); // equivalent to $(this)
			var nextExercise = $(".uncompleted").eq(2);
			var finishingDuration = finishingExercise.find("input[id=duration_" + numFinished + "]").val();
			var exDuration = parseInt(initialDuration) - parseInt(finishingDuration);
			stopCountdown(numFinished);
			$("input[id=duration_" + numFinished + "]").val(exDuration);
			proceedToNextSet();
			if (!$("#wrkt-start-link").hasClass("unstarted") && currentExercise.hasClass("uncompleted") && !currentExercise.hasClass("performing") && currentExercise.hasClass("next-ex") ) {
				finishingExercise.removeClass("uncompleted").removeClass("performing").addClass("completed");
				finishingExercise.find("input").attr("disabled", "disabled");
				currentExercise.addClass("performing").find("input").removeAttr("disabled");
				currentExercise.removeClass("next-ex");
				nextExercise.addClass("next-ex");
				numFinished++;
				countdown("duration_" + numFinished, $("input[id=duration_" + numFinished + "]").val());
				updateWrktPercentComplete(numFinished);
				prepareToFinish();
			}
		});
	}

	function updateWrktPercentComplete(completed) {
		setNumber = setsFinished + 1; 
		console.log(setNumber);
		var percent = ( (completed*setNumber) / (numExercises*totalSets) ) * 100;
		$(".bar").css("width", "" + Math.floor(percent) + "%");
		$("#wrkt-percent-complete").html("" + Math.floor(percent));
		if (percent == 100) {
			console.log("You've finished your workout!");
			$("#wrkt-start-link").html("Restart");
		}
	}

	function prepareToFinish() {
		// Show and highlight finish buttons when performing last exercise.
		if (numFinished == numExercises-1 && setsFinished == totalSets ) {
			$(".wrkt-finish-actions").append("" +
				"<a class='btn' href='javascript:void(0)' id='wrkt-fin-link' style='display: inline;'>" + 
				"<span>Finish</span>" + 
				"</a>" +
				"<input name='commit' type='submit' id='wrkt-finish-link' class='btn-success' style='display: inline;' value='Finish & Save'>");
			$("#wrkt-fin-link").stop().animate({"border-color": "#f77"}, 'slow');
			$("#wrkt-finish-link").stop().animate({"border-color": "#f77"}, 'slow');
			finishWorkout();
		} 
	}

	function proceedToNextSet() {
		if (numFinished == numExercises-1 && setsFinished != totalSets) {
			var currentSetNum = $("#current-set").html();
			$("#current-set").html("" + ++currentSetNum);
			intervals = {}; // empty intervals
			reSetIntervals();
			numFinished++;
			updateWrktPercentComplete(numFinished);	
			$(".performable-ex").removeClass("completed").removeClass("performing").addClass("uncompleted");
			$(".performable-ex").first().addClass("performing");
			$(".performable-ex").eq(1).addClass("next-ex");
			countdown("duration_" + numFinished, $("input[id=duration_" + numFinished + "]").val());
			$(".performable-ex").first().find("input").removeAttr("disabled"); // Enable inputs.
			setsFinished++;
			numFinished = 0;
		}
	}

	function finishWorkout() {
		$("#wrkt-fin-link").on('click', function() {
			var lastExercise = $(".uncompleted").last();
			lastExercise.removeClass("uncompleted").removeClass("performing").addClass("completed");
			lastExercise.find("input").attr("disabled", "disabled");
			$("#wrkt-fin-link").stop().animate({"border-color": "transparent"}, 'slow');
			if (numFinished < numExercises) {
				numFinished++;
				updateWrktPercentComplete(numFinished);	
			}
		});
	}

	// See http://stackoverflow.com/questions/4584397/javascript-countdown-clock
	function countdown(element, seconds) {
	    var intervalId = "interval_" + numFinished;
	    intervals[intervalId] = setInterval(function() {
	        var el = document.getElementById(element);
	        if (seconds == 0) { 
	        	stopCountdown(numFinished); 
	        	if ($("input[id=rp_" + numFinished + "]").val() > 1) {
	        		startRestPeriod();
	        	}
	        }
	        el.value = seconds % 60;
	        seconds--;
	    }, 80);
	}

	function stopCountdown(num) {
		clearInterval(intervals["interval_" + num]);
	}

	function startRestPeriod() {
		countdown("rp_" + numFinished, $("input[id=rp_" + numFinished + "]").val());		
	}

	function cacheIntervals(el) {
		var cache = [];
			for (var i = 0; i < numExercises; i++) {
				cache[i] = $("input[id=" + el + "_" + i + "]").val();
			}
		return cache;
	}

	function reSetIntervals() {
		types = ["duration", "rp"];
		for (var i = 0; i < types.length; i++) {
			$(".ex-" + types[i] + " input").each(function(i) {
				$(this).val( types[i] == "duration" ? cachedDurations[i] : cachedRestPeriods[i] );
			});
		}
	}


});

