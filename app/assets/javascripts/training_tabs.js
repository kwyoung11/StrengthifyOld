// Manages tab functionality of training tabs on workouts#index page
window.onload=function() {
	if ($("#tabContainer").length == 1) { 
	// Select the tab container and its first li element,
	// get its id with split() and select the second element from resulting array.
	// Add id to data-current attribute of parent ul and
	// add the activeTab class to the current tab. 
  var container = document.getElementById("tabContainer");
  var navitem = document.getElementById("tabContainer").querySelector(".tabs ul li");
  var current_tab = navitem.id.split("_")[1];
  navitem.parentNode.setAttribute("data-current", current_tab);
  navitem.setAttribute("class","activeTab");

	// Hide the contents of the remaining tabs
  var pages = container.querySelectorAll(".tabpage");
  for (var i = 1; i < pages.length; i++) {
    pages[i].style.display = "none";
  }

	// When li item is clicked, get the id of the ul parent,
	// remove the activeTab class from the previously active tab,
	// and hide its contents.
	$(".tabs ul li").on("click", function(){
		var current = $(this).parent("ul").attr("data-current");
	  $("#tabHeader_" + current).removeClass("activeTab");
	  $("#tabpage_" + current).css("display", "none");

	// Add the activeTab class to the current tab, 
	// and show its contents
	var id = this.id.split("_")[1];
	$(this).attr("class","activeTab");
	$("#tabpage_" + id).css("display", "block");
	$(this).parent("ul").attr("data-current", id);
	});
}
};
		  