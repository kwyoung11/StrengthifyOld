$(document).ready(function() {

// hide/show nav dropdown. Clicking the settings li shows the list.	
$(".header-nav-list-dropdown").on('click', function(e) { 
	if ($(".header-nav-list-dropdown ul").css('display') == 'none') {
     $(this).find("ul").show();
		return false;
	}
 });  

// Clicking anywhere in browser window hides the list.
window.onclick = hideSettings;
function hideSettings() {
		$(".header-nav-list-dropdown ul").hide();	
}

// Change time zone according to location. See https://bitbucket.org/pellepim/jstimezonedetect
var timezone = jstz.determine();
document.cookie = 'time_zone='+timezone.name()+';';

$(".sub-header-nav-list li").mouseover(function() {
	$(".sub-header-nav-list-dd").css("display", "block");
});

});