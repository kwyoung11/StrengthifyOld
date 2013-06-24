// ************** FRIENDSHIPS *************

$(document).ready(function() {

	$("#user_list a").on('click', function() {
		var user_name = $("#user li").data("user_id");
		alert("Please confirm that you would like to send a friend request to " + user_name + ".");
	});


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