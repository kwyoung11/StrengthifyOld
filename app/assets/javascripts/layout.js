$(document).ready(function() {

// show settings dropdown	
$(".header-nav-list-dropdown, .profile-find-friends").on('click', function(e) { 
    $(this).find("ul").show();
	return false;
 });  

// Send ajax request when users clicks notifications tab and show dropdown
$(".notifications").on('click', function() {
	$(".notifications-dropdown-li-item").each(function() {
			if ($(this).data("seen") == false) {
				id = $(this).data("notification_id");
	
				$.ajax({
					type: "POST",
					url: "/seen",
					data: {id: id},
					success: function(response) {
						$(".notification-count").html("");
					}
				});
			}
	});	

	if ($(".notifications-dropdown").css('display') == 'none') {
		$(this).find("ul").show();
		return false;
	}
	
});

	// Hide and show the Find Friends link
	$(".find-friends-link").on('click', function(e) {
		e.stopPropagation();
		if ($(".find-friend-actions > li").css('display') == 'none') {
			$(".find-friend-actions > li").css("display", "block");
		} else {
			$(".find-friend-actions > li").css("display", "none");
		}
	});
	
	$("body").on('click', function() {
		if ($(".find-friend-actions > li").css('display') == 'block') {
			$(".find-friend-actions > li").css("display", "none");
		}
	});


// hide nav/notifications/find friends link
$(window).on('click', function() {
	$(".notifications ul").hide();
	$(".header-nav-list-dropdown ul").hide();
	$(".find-friends-list").hide();	
});

// Change time zone according to location. See https://bitbucket.org/pellepim/jstimezonedetect
var timezone = jstz.determine();
document.cookie = 'time_zone='+timezone.name()+';';

// Show build workout dropdown on hover
$(".sub-header-nav-list li").mouseover(function() {
	$(".sub-header-nav-list-dd").css("display", "block");
});

});

