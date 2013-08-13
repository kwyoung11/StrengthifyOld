$(document).on('ready page:load', function () { 
 		// these are (ruh-roh) globals. You could wrap in an
    // immediately-Invoked Function Expression (IIFE) if you wanted to...
    var currentTallest = 0,
        currentRowStart = 0,
        tallest = 0,
        rowDivs = new Array();
    
    function setConformingHeight(el, newHeight) {
      // set the height to something new, but remember the original height in case things change
      el.data("originalHeight", (el.data("originalHeight") == undefined) ? (el.height()) : (el.data("originalHeight")));
      el.height(newHeight);
    }
    
    function getOriginalHeight(el) {
      // if the height has changed, send the originalHeight
      return (el.data("originalHeight") == undefined) ? (el.height()) : (el.data("originalHeight"));
    }

    function storeHeightDifference(shortestEl, tallestEl) {
      var shortest = (tallest == 1) ? (0) : (1);
      var heightDifference = tallestEl - shortestEl;
      rowDivs[shortest].attr("siblingHeightDifference", heightDifference);
    }
    
    function columnConform() {
    
      // find the tallest DIV in the row, and set the heights of all of the DIVs to match it.
      $('.ex-descriptions-card').each(function() {
      
        // "caching"
        var $el = $(this);
        
        var topPosition = $el.position().top;
    
        if (currentRowStart != topPosition) {
    
          // we just came to a new row.  Set all the heights on the completed row
          for(currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) setConformingHeight(rowDivs[currentDiv], currentTallest);
    
          // set the variables for the new row
          rowDivs.length = 0; // empty the array
          currentRowStart = topPosition;
          currentTallest = getOriginalHeight($el);
          rowDivs.push($el);
    
        } else {
    
          // another div on the current row.  Add it to the list and check if it's taller
          rowDivs.push($el);
          if (currentTallest < getOriginalHeight($el)) {
            tallest = 1; // second element is tallest
            storeHeightDifference(currentTallest, getOriginalHeight($el)); 
            currentTallest = getOriginalHeight($el);
          } else {
            tallest = 0; // first element is tallest
            storeHeightDifference(currentTallest, getOriginalHeight($el)); 
            currentTallest = currentTallest;
            
          }
    
        }
        // do the last row
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) setConformingHeight(rowDivs[currentDiv], currentTallest);
    
      });
    
    }
    
    $(window).resize(function() {
      columnConform();
    });
    
    // Dom Ready
    // You might also want to wait until window.onload if images are the things that
    // are unequalizing the blocks
    $(function() {
      columnConform();
    });


	// expanding information on exercise card
$(".extra-content-link").on('click', function() {
	var currentExerciseCard = $(this).parents(".ex-descriptions-card");
	var expandableContent = $(this).parents(".ex-descriptions-card").find(".ex-descriptions-extra-content");
	var expandableContentHeight = expandableContent.height();
	var currentExerciseCardHeight = currentExerciseCard.height();

	if (expandableContent.css("display") == "none") {
		currentExerciseCard.attr("original-height", currentExerciseCardHeight); 	// set height for posterity

		if (currentExerciseCard.attr("siblingHeightDifference")) {
			currentExerciseCard.animate({ height: currentExerciseCardHeight + expandableContentHeight - currentExerciseCard.attr("siblingHeightDifference")}, 300);
		} else {
			currentExerciseCard.animate({height: currentExerciseCardHeight + expandableContentHeight}, 300);
		}
		expandableContent.slideDown(300);
		currentExerciseCard.find(".triangle").css("-webkit-transform", "rotate(180deg)");
		currentExerciseCard.find(".extra-content-link").text("Collapse ");
	} else {
		var originalExerciseCardHeight = currentExerciseCard.attr("original-height");
		currentExerciseCard.animate({height: originalExerciseCardHeight}, 300);
		expandableContent.slideUp(300);
		currentExerciseCard.find(".triangle").css("-webkit-transform", "rotate(360deg)");
		currentExerciseCard.find(".extra-content-link").text("Expand");
	}
});

if ($(".ex-descriptions").length == 1) {
// for pagination links

// turn off turbolinks 
$(".previous_page").attr("data-no-turbolink", "true");
$(".next_page").attr("data-no-turbolink", "true");

// get position of left and right edges of exercise cards window
var positionLeft = $(".ex-descriptions").position().left;
var positionRight = positionLeft + $(".ex-descriptions").width();

// position pagination links
$(".previous_page_wrapper").css("margin-left", positionLeft - 45);
$(".next_page_wrapper").css("margin-left", positionRight - 15);

$(window).resize(function(){
	// get position of left and right edges of exercise cards window
var positionLeft = $(".ex-descriptions").position().left;
var positionRight = positionLeft + $(".ex-descriptions").width();

// position pagination links
$(".previous_page_wrapper").css("margin-left", positionLeft - 45);
$(".next_page_wrapper").css("margin-left", positionRight - 15);
});

}

});

