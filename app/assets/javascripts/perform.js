$(document).on('ready page:load', function() {
	// Globals...
	var exInSet = $(".wrkt-table tr").last().data("ex_id") + 1,
			exFinInSet = 0,
			totExFin = 0,
			setsFin = 0,
			totSets = $("input[id=tot-sets]").val(),
			initDur = $(".performable-ex").eq(exFinInSet).find("input[id=duration_" + exFinInSet + "]").val(),
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
			console.log($("input[id=duration_" + exFinInSet).val());
			var finishingExercise = $(".uncompleted").first();
			var currentExercise = $(".uncompleted").eq(1); // equivalent to $(this)
			var nextExercise = $(".uncompleted").eq(2);
			var exDuration = parseInt(initDur) - parseInt(finishingExercise.find("input[id=duration_" + exFinInSet + "]").val());
			
			if (!ctrlBtn.hasClass("unstarted") && !ctrlBtn.hasClass("resume") && currentExercise.hasClass("uncompleted") && !currentExercise.hasClass("performing") && currentExercise.hasClass("next-ex") ) {
				stopCountdown(totExFin);
				$("input[id=duration_" + exFinInSet + "]").val(exDuration);
				exFinInSet++;
				totExFin++;

				// If user is on last exercise in set ...
				if (exFinInSet == exInSet-1 && setsFin != totSets) { 
					$(".ex-finished").addClass("next-set");
					$(".ex-finished").html("Next Set"); 
					proceedToNextSet(cachedDur, cachedRP);
				} 

				finishingExercise.removeClass("uncompleted").removeClass("performing").addClass("completed");
				finishingExercise.find("input").attr("disabled", "disabled");
				currentExercise.addClass("performing").find("input").removeAttr("disabled");
				currentExercise.removeClass("next-ex");
				nextExercise.addClass("next-ex");
				countdown("duration_" + exFinInSet, $("input[id=duration_" + exFinInSet + "]").val());
				updateWrktPercentComplete();
				prepareToFinish();
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

	function proceedToNextSet(cachedDur, cachedRP) {
		var finishingExercise = $(".uncompleted").first();
		var exDuration = parseInt(initDur) - parseInt(finishingExercise.find("input[id=duration_" + exFinInSet + "]").val());
		$(".next-set").on('click', function() {
			stopCountdown(totExFin);
			$("input[id=duration_" + exFinInSet + "]").val(exDuration);
			if (exFinInSet == exInSet-1 && setsFin != totSets) {
				var currentSetNum = $("#current-set").html();
				$("#current-set").html("" + ++currentSetNum);
				reSetIntervals(cachedDur, cachedRP);
				$(".uncompleted").last().find("input").attr("disabled", "disabled");
				$(".performable-ex").removeClass("completed").removeClass("performing").addClass("uncompleted").first().addClass("performing").find("input").removeAttr("disabled");
				$(".performable-ex").eq(1).addClass("next-ex");
				$(".ex-finished").removeClass('next-set').html("Next Exercise");	
				setsFin++;
				totExFin++;
				exFinInSet = 0;
				updateWrktPercentComplete();
				countdown("duration_" + exFinInSet, $("input[id=duration_" + exFinInSet + "]").val());
			}
		});
	}

	function prepareToFinish() {
		// Show and highlight finish buttons when performing last exercise.
		if (exFinInSet == exInSet-1 && setsFin == totSets-1 ) {
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

	function finishWorkout() {
		$("#wrkt-fin-link").on('click', function() {
			var lastExercise = $(".uncompleted").last();
			lastExercise.removeClass("uncompleted").removeClass("performing").addClass("completed");
			lastExercise.find("input").attr("disabled", "disabled");
			$("#wrkt-fin-link").stop().animate({"border-color": "transparent"}, 'slow');
			if (exFinInSet < exInSet) {
				exFinInSet++;
				totExFin++;
				updateWrktPercentComplete();	
			}
		});
	}

	// See http://stackoverflow.com/questions/4584397/javascript-countdown-clock
	function countdown(element, seconds) {
			var time = parseInt(seconds);
	    var intervalId = "interval_" + totExFin;
	    intervals[intervalId] = setInterval(function() {
	        var el = document.getElementById(element);
	        if (seconds == 0) { 
	        	stopCountdown(totExFin); 
	        	if ($("input[id=rp_" + exFinInSet + "]").val() > 1) {
	        		startRestPeriod();
	        	}
	        }
	        el.value = time % 60;
	        seconds--;
	    }, 400);
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
		$("#wrkt-percent-complete").html("1");
		reSetIntervals(cachedDur, cachedRP);
		exFinInSet = 0;
		$(".performable-ex").removeClass("completed").removeClass("performing").addClass("uncompleted");
		$(".wrkt-finish-actions").html("");
	}

	function initializeWorkout(ctrlBtn) {
		ctrlBtn.removeClass("unstarted").addClass("pause");
		$(".performable-ex").first().addClass("performing");
		$(".performable-ex").eq(1).addClass("next-ex");
		countdown("duration_" + exFinInSet, $("input[id=duration_" + exFinInSet + "]").val());
		ctrlBtn.html("Pause");
		$(".performable-ex").first().find("input").removeAttr("disabled"); // Enable inputs.
	}

	function pauseWorkout(ctrlBtn) {
		stopCountdown(exFinInSet);
		ctrlBtn.html("Resume").removeClass("pause").addClass("resume");
	}

	function resumeWorkout(ctrlBtn) {
		countdown("duration_" + exFinInSet, parseInt($(".performable-ex").eq(exFinInSet).find("input[id=duration_" + exFinInSet + "]").val()));
		ctrlBtn.html("Pause").removeClass("resume").addClass("pause");
	}

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

	// Hide value revision buttons when user is 'clicking out'
	$(document).on('click', function(e) {
		if ( (e.target.className != "btn-increment") && (e.target.className != "btn-decrement") && (e.target.tagName != "INPUT") ) {
			$(".revision").hide();	
		}
	});

});

