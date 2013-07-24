$(document).ready(function() {

// hide/show nav dropdown. Clicking the settings li shows the list.	
$(".header-nav-list-dropdown").on('click', function(e) { 
	if ($(".header-nav-list-dropdown ul").css('display') == 'none') {
     $(this).find("ul").show();
		return false;
	}
 });  

// Change time zone according to location. See https://bitbucket.org/pellepim/jstimezonedetect
var timezone = jstz.determine();
document.cookie = 'time_zone='+timezone.name()+';';

// Show build workout dropdown on hover
$(".sub-header-nav-list li").mouseover(function() {
	$(".sub-header-nav-list-dd").css("display", "block");
});

// Show notifications dropdown menu
$(".strengthify-header").on('click', function() {
	$(".strengthify-header-dropdown").show();
	$(".strengthify-header-dropdown-li-item").show();
});

$(window).on('click', function() {
	$(".strengthify-header-dropdown-li-item").hide();
	$(".header-nav-list-dropdown ul").hide();	
});







});