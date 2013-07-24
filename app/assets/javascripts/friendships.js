// ************** FRIENDSHIPS *************

$(document).ready(function() {

	// Hide and show the Find Friends link
	$("#find_friends_link").on('click', function(e) {
		e.stopPropagation();
		if ($("#friend_finder_actions > li").css('display') == 'none') {
			$("#friend_finder_actions > li").css("display", "block");
		} else {
			$("#friend_finder_actions > li").css("display", "none");
		}
	});
	
	$("body").on('click', function() {
		if ($("#friend_finder_actions > li").css('display') == 'block') {
			$("#friend_finder_actions > li").css("display", "none");
		}
	});

});