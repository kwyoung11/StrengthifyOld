$(document).on('ready page:load', function() {
	// Globals...
	var exInSet = $(".wrkt-table tr").last().data("ex_id") + 1,
			exFinInSet = 0,
			totExFin = 0,
			setsFin = 0,
			totSets = $("input[id=tot-sets]").val(),
			intervals = {};

	// Start sequence.		
	startWorkout();
	
	function startWorkout() {
		var	cachedDur = cacheIntervals("duration");
		var	cachedRP = cacheIntervals("rp");
		var ctrlBtn = $("#wrkt-start-link");

		onInputFocus();
		changeValue();
		completeExercise(ctrlBtn, cachedDur, cachedRP);

		ctrlBtn.on('click', function() {
			if (ctrlBtn.hasClass("pause")) { pauseWorkout(ctrlBtn); 
			} else if (ctrlBtn.hasClass("resume")) { resumeWorkout(ctrlBtn); }
			if (ctrlBtn.hasClass("restart")) { reStartWorkout(cachedDur, cachedRP); }
			if (ctrlBtn.hasClass("unstarted") ) { initializeWorkout(ctrlBtn); }
		});

	}

	function completeExercise(ctrlBtn, cachedDur, cachedRP) {
		$(".ex-finished").on('click', function() {
			if ( !$(this).hasClass("wrkt-finished") ) {
				$(".wrkt-rest").html("");
				var finishingExercise = $(".uncompleted").first();
				var currentExercise = $(".uncompleted").eq(1); // equivalent to $(this)
				var nextExercise = $(".uncompleted").eq(2);
				var exDuration = parseInt(cachedDur[exFinInSet]) - parseInt(finishingExercise.find("input[id=duration_" + exFinInSet + "]").val());

				// If user is on last exercise in set ...
				if (exFinInSet == exInSet-1 && setsFin != totSets) { 
					proceedToNextSet(cachedDur, cachedRP);
				} 

				if (!ctrlBtn.hasClass("unstarted") && !ctrlBtn.hasClass("resume") && currentExercise.hasClass("uncompleted") && !currentExercise.hasClass("performing") && currentExercise.hasClass("next-ex") ) {
					stopCountdown(totExFin);
					$("input[id=duration_" + exFinInSet + "]").val(exDuration);
					exFinInSet++;
					totExFin++;
	
					finishingExercise.removeClass("uncompleted").removeClass("performing").addClass("completed");
					finishingExercise.find("input").attr("disabled", "disabled");
					currentExercise.addClass("performing").find("input").removeAttr("disabled");
					currentExercise.removeClass("next-ex");
					nextExercise.addClass("next-ex");
					enableRestPeriod();
					updateWrktPercentComplete();
					prepareToFinish(cachedDur);
				}
			}
		});
	}

	function proceedToNextSet(cachedDur, cachedRP) {
		$(".ex-finished").addClass("next-set");
		$(".ex-finished").html("Next Set"); 
		if ($(".next-ex").length == 0) {
			var finishingExercise = $(".uncompleted").first();
			var exDuration = parseInt(cachedDur[exFinInSet]) - parseInt(finishingExercise.find("input[id=duration_" + exFinInSet + "]").val());
			stopCountdown(totExFin);
			$("input[id=duration_" + exFinInSet + "]").val(exDuration);
			if (exFinInSet == exInSet-1 && setsFin != totSets) {
				var currentSetNum = $("#current-set").html();
				$("#current-set").html("" + ++currentSetNum);
				reSetIntervals(cachedDur, cachedRP);
				$(".uncompleted").last().find("input").attr("disabled", "disabled");
				$(".performable-ex").removeClass("completed").removeClass("performing").addClass("uncompleted").first().addClass("performing").find("input").removeAttr("disabled");
				$(".performable-ex").eq(1).addClass("next-ex");
				$(".ex-finished").removeClass('next-set').html("Next");	
				setsFin++;
				totExFin++;
				exFinInSet = 0;
				updateWrktPercentComplete();
				enableRestPeriod();
			}
		}
	}

	function prepareToFinish(cachedDur) {
		// Show and highlight finish buttons when performing last exercise.
		if (exFinInSet == exInSet-1 && setsFin == totSets-1 ) {
			// Disable next exercise link
			$(".ex-finished").addClass("wrkt-finished");
			$("#wrkt-start-link").removeClass("pause");
			$(".wrkt-finish-actions").append("" +
				"<a class='btn' href='javascript:void(0)' id='wrkt-fin-link' style='display: inline;'>" + 
				"<span>Finish</span>" + 
				"</a>" +
				"<input name='commit' type='submit' id='wrkt-finish-link' class='btn-success' style='display: inline;' value='Finish & Save'>");
			$("#wrkt-fin-link").stop().animate({"border-color": "#f77"}, 'slow');
			$("#wrkt-finish-link").stop().animate({"border-color": "#f77"}, 'slow');
			finishWorkout(cachedDur);
		} 
	}

	function finishWorkout(cachedDur) {
		$("#wrkt-fin-link").on('click', function() {
			var lastExercise = $(".uncompleted").last();
			lastExercise.removeClass("uncompleted").removeClass("performing").addClass("completed");
			lastExercise.find("input").attr("disabled", "disabled");
			$("#wrkt-fin-link").stop().animate({"border-color": "transparent"}, 'slow');
			stopCountdown(totExFin);
			var exDuration = parseInt(cachedDur[exFinInSet]) - parseInt(lastExercise.find("input[id=duration_" + exFinInSet + "]").val());
			$("input[id=duration_" + exFinInSet + "]").val(exDuration);
			if (exFinInSet < exInSet) {
				exFinInSet++;
				totExFin++;
				updateWrktPercentComplete();	
			}
		});
	}

	function updateWrktPercentComplete() {
		var totExercises = exInSet*totSets;
		var percent = ( (totExFin) / (totExercises) ) * 100;
		$(".bar").css("width", "" + Math.floor(percent) + "%");
		$("#wrkt-percent-complete").html("" + Math.floor(percent));
		if (percent == 100) {
			$("#wrkt-start-link").html("Restart").addClass("restart");
		}
	}

	// See http://stackoverflow.com/questions/4584397/javascript-countdown-clock
	function countdown(element, seconds) {
	    var intervalId = "interval_" + totExFin;
	    intervals[intervalId] = setInterval(function() {
	        var el = document.getElementById(element);
	        if (seconds == 0) { 
	        	stopCountdown(totExFin); 
	        	if ($("input[id=rp_" + exFinInSet + "]").val() > 1) {
	        		startRestPeriod();
	        	}
	        }
	        el.value = parseInt(seconds);
	        seconds--;
	    }, 1000);
	}

	function initializeWorkout(ctrlBtn) {
		ctrlBtn.removeClass("unstarted").removeClass("restart").addClass("pause");
		$("#wrkt-next-link").removeClass("wrkt-finished");
		$(".performable-ex").first().addClass("performing");
		$(".performable-ex").eq(1).addClass("next-ex");
		enableRestPeriod();
		ctrlBtn.html("Pause");
		$(".performable-ex").first().find("input").removeAttr("disabled"); // Enable inputs.
	}

	// if ( ($(".workout-perform").length > 0) ) {
	// 	$(window).on('beforeunload ',function() {
 //    	return "Your workout is still in progress.";
	// 	});

	// 	$(window).on('onunload ',function() {
 //    	return "Your workout is still in progress.";
	// 	});
	// }






	//*****************************************
	//
	//	HELPER FUNCTIONS
	//
	//*****************************************

function onInputFocus() {
	$("input").on('focus', function() {
		$(this).parents("tr").find(".focus").removeClass("focus");
		$(this).addClass("focus");
		$(this).parents("tr").find(".revision").show();
		$(this).parents("tr").find(".btn-increment, .btn-decrement").show();
	});
}

function changeValue() {
	$(".btn-increment, .btn-decrement").on('click', function() {
		var input = $(this).parents("tr").find(".focus"),
				value = parseInt(input.val()),
				el = $(this).attr("class");
		input.val( el == "btn-increment" ? ++value : --value );
	});
}

function pauseWorkout(ctrlBtn) {
	stopCountdown(totExFin);
	ctrlBtn.html("Resume").removeClass("pause").addClass("resume");
}

function resumeWorkout(ctrlBtn) {
	countdown("duration_" + exFinInSet, parseInt($(".performable-ex").eq(exFinInSet).find("input[id=duration_" + exFinInSet + "]").val()));
	ctrlBtn.html("Pause").removeClass("resume").addClass("pause");
}

function enableRestPeriod() {
	if ($("input[id=duration_" + exFinInSet + "]").val() > 0 ) {
		countdown("duration_" + exFinInSet, $("input[id=duration_" + exFinInSet + "]").val());
	} else {
		$(".wrkt-rest").html("<a href='javascript:void(0)' id='rest-period-start' class='btn-success btn-rp'> Start Rest </a>");
	}
	$("#rest-period-start").on('click', function() {
		startRestPeriod();
		$(".wrkt-rest").html("");
	});
}

function reSetIntervals(cachedDur, cachedRP) {
	intervals = {};
	for (var i = 0; i < exInSet; i++) {
		delete intervals["interval_" + i];	
	}
	$(".ex-duration input").each(function(i) {
		$(this).val(cachedDur[i]);
	});
	$(".ex-rp input").each(function(i) {
		$(this).val(cachedRP[i]);
	});
}

function reStartWorkout(cachedDur, cachedRP) {
	$(".bar").css("width", "1%");
	$("#wrkt-percent-complete").html("0");
	reSetIntervals(cachedDur, cachedRP);
	exFinInSet = 0;
	totExFin = 0;
	setsFin = 0;
	$("#wrkt-start-link").addClass("unstarted");
	$("#current-set").html("1");
	$(".performable-ex").removeClass("completed").removeClass("performing").addClass("uncompleted");
	$(".wrkt-finish-actions").html("");
}

function stopCountdown(num) {
	clearInterval(intervals["interval_" + num]);
}

function startRestPeriod() {
	countdown("rp_" + exFinInSet, $("input[id=rp_" + exFinInSet + "]").val());		
}

function cacheIntervals(el) {
 var cache = [];
  for (var i = 0; i < exInSet; i++) {
   cache[i] = $("input[id=" + el + "_" + i + "]").val();
  }
  return cache;
}

// Hide value revision buttons when user is 'clicking out'
$(document).on('click', function(e) {
	if ( (e.target.className != "btn-increment") && (e.target.className != "btn-decrement") && (e.target.tagName != "INPUT") ) {
		$(".revision").hide();	
	}
});


});

